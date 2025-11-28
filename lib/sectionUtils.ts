export function removeDuplicates(sections: any[]) {
    const seen = new Set<string>();
    const result: any[] = [];
    for (const s of sections) {
      if (!seen.has(s.section)) {
        seen.add(s.section);
        result.push(s);
      }
    }
    return result;
  }
  
  export function filterEnabled(sections: any[]) {
    return sections.filter((s) => !!s.enabled);
  }
  