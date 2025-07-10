import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { Plus } from "lucide-react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./ui/select";
import type { UserPersona } from "./UnifiedPersonas";

export interface FocusGroup {
  id: number;
  name: string;
  personaIds: number[];
}

interface Props {
  personas: UserPersona[];
}

const FocusGroupManager: React.FC<Props> = ({ personas }) => {
  const [groups, setGroups] = useState<FocusGroup[]>([]);
  const [showCreate, setShowCreate] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<FocusGroup | null>(null);

  const handleCreateGroup = () => {
    if (groupName && selectedIds.length) {
      const newGroup: FocusGroup = {
        id: groups.length + 1,
        name: groupName,
        personaIds: selectedIds
      };
      setGroups([...groups, newGroup]);
      setGroupName("");
      setSelectedIds([]);
      setShowCreate(false);
    }
  };

  return (
    <div>
      <div className="flex gap-4 mb-4">
        <Button onClick={() => setShowCreate(true)} variant="outline" size="sm">
          <Plus className="w-4 h-4 mr-1" /> Crear Grupo
        </Button>
        <Select onValueChange={id => setSelectedGroup(groups.find(g => g.id === Number(id)) || null)}>
          <SelectTrigger className="w-56">
            <SelectValue placeholder="Seleccionar grupo existente" />
          </SelectTrigger>
          <SelectContent>
            {groups.map(group => (
              <SelectItem key={group.id} value={group.id.toString()}>{group.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {showCreate && (
        <div className="border rounded-lg p-4 mb-4 bg-black/60">
          <div className="mb-2">
            <Label>Nombre del Grupo</Label>
            <Input value={groupName} onChange={e => setGroupName(e.target.value)} placeholder="Ej: Focus Group A" />
          </div>
          <div className="mb-2">
            <Label>Selecciona Personas</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {personas.map(p => (
                <Button
                  key={p.id}
                  size="sm"
                  variant={selectedIds.includes(p.id) ? "default" : "outline"}
                  className={selectedIds.includes(p.id) ? "bg-blue-600" : ""}
                  onClick={() => setSelectedIds(ids => ids.includes(p.id) ? ids.filter(id => id !== p.id) : [...ids, p.id])}
                >
                  {p.name}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <Button onClick={handleCreateGroup} disabled={!groupName || !selectedIds.length} size="sm">
              Guardar Grupo
            </Button>
            <Button onClick={() => setShowCreate(false)} variant="ghost" size="sm">Cancelar</Button>
          </div>
        </div>
      )}
      {selectedGroup && (
        <div className="border rounded-lg p-4 bg-black/50">
          <h4 className="font-semibold mb-2">Grupo: {selectedGroup.name}</h4>
          <div className="flex flex-wrap gap-2">
            {selectedGroup.personaIds.map(id => {
              const persona = personas.find(p => p.id === id);
              return persona ? (
                <Badge key={id} className="bg-blue-700/70 border-blue-400/60 text-white">
                  {persona.name}
                </Badge>
              ) : null;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default FocusGroupManager;
