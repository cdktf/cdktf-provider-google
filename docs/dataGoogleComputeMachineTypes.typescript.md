# `dataGoogleComputeMachineTypes` Submodule <a name="`dataGoogleComputeMachineTypes` Submodule" id="@cdktf/provider-google.dataGoogleComputeMachineTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeMachineTypes <a name="DataGoogleComputeMachineTypes" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/compute_machine_types google_compute_machine_types}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer"></a>

```typescript
import { dataGoogleComputeMachineTypes } from '@cdktf/provider-google'

new dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes(scope: Construct, id: string, config?: DataGoogleComputeMachineTypesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig">DataGoogleComputeMachineTypesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig">DataGoogleComputeMachineTypesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComputeMachineTypes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isConstruct"></a>

```typescript
import { dataGoogleComputeMachineTypes } from '@cdktf/provider-google'

dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isTerraformElement"></a>

```typescript
import { dataGoogleComputeMachineTypes } from '@cdktf/provider-google'

dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isTerraformDataSource"></a>

```typescript
import { dataGoogleComputeMachineTypes } from '@cdktf/provider-google'

dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.generateConfigForImport"></a>

```typescript
import { dataGoogleComputeMachineTypes } from '@cdktf/provider-google'

dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleComputeMachineTypes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeMachineTypes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeMachineTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/compute_machine_types#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeMachineTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.machineTypes">machineTypes</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList">DataGoogleComputeMachineTypesMachineTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `machineTypes`<sup>Required</sup> <a name="machineTypes" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.machineTypes"></a>

```typescript
public readonly machineTypes: DataGoogleComputeMachineTypesMachineTypesList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList">DataGoogleComputeMachineTypesMachineTypesList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeMachineTypesConfig <a name="DataGoogleComputeMachineTypesConfig" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.Initializer"></a>

```typescript
import { dataGoogleComputeMachineTypes } from '@cdktf/provider-google'

const dataGoogleComputeMachineTypesConfig: dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.filter">filter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/compute_machine_types#filter DataGoogleComputeMachineTypes#filter}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/compute_machine_types#id DataGoogleComputeMachineTypes#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.project">project</a></code> | <code>string</code> | Project ID for this request. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.zone">zone</a></code> | <code>string</code> | The name of the zone for this request. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/compute_machine_types#filter DataGoogleComputeMachineTypes#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/compute_machine_types#id DataGoogleComputeMachineTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Project ID for this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/compute_machine_types#project DataGoogleComputeMachineTypes#project}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

The name of the zone for this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/compute_machine_types#zone DataGoogleComputeMachineTypes#zone}

---

### DataGoogleComputeMachineTypesMachineTypes <a name="DataGoogleComputeMachineTypesMachineTypes" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypes.Initializer"></a>

```typescript
import { dataGoogleComputeMachineTypes } from '@cdktf/provider-google'

const dataGoogleComputeMachineTypesMachineTypes: dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypes = { ... }
```


### DataGoogleComputeMachineTypesMachineTypesAccelerators <a name="DataGoogleComputeMachineTypesMachineTypesAccelerators" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAccelerators.Initializer"></a>

```typescript
import { dataGoogleComputeMachineTypes } from '@cdktf/provider-google'

const dataGoogleComputeMachineTypesMachineTypesAccelerators: dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAccelerators = { ... }
```


### DataGoogleComputeMachineTypesMachineTypesDeprecated <a name="DataGoogleComputeMachineTypesMachineTypesDeprecated" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecated"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecated.Initializer"></a>

```typescript
import { dataGoogleComputeMachineTypes } from '@cdktf/provider-google'

const dataGoogleComputeMachineTypesMachineTypesDeprecated: dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecated = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeMachineTypesMachineTypesAcceleratorsList <a name="DataGoogleComputeMachineTypesMachineTypesAcceleratorsList" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.Initializer"></a>

```typescript
import { dataGoogleComputeMachineTypes } from '@cdktf/provider-google'

new dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference <a name="DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeMachineTypes } from '@cdktf/provider-google'

new dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.guestAcceleratorCount">guestAcceleratorCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.guestAcceleratorType">guestAcceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAccelerators">DataGoogleComputeMachineTypesMachineTypesAccelerators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `guestAcceleratorCount`<sup>Required</sup> <a name="guestAcceleratorCount" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.guestAcceleratorCount"></a>

```typescript
public readonly guestAcceleratorCount: number;
```

- *Type:* number

---

##### `guestAcceleratorType`<sup>Required</sup> <a name="guestAcceleratorType" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.guestAcceleratorType"></a>

```typescript
public readonly guestAcceleratorType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeMachineTypesMachineTypesAccelerators;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAccelerators">DataGoogleComputeMachineTypesMachineTypesAccelerators</a>

---


### DataGoogleComputeMachineTypesMachineTypesDeprecatedList <a name="DataGoogleComputeMachineTypesMachineTypesDeprecatedList" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.Initializer"></a>

```typescript
import { dataGoogleComputeMachineTypes } from '@cdktf/provider-google'

new dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.get"></a>

```typescript
public get(index: number): DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference <a name="DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeMachineTypes } from '@cdktf/provider-google'

new dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.replacement">replacement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecated">DataGoogleComputeMachineTypesMachineTypesDeprecated</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `replacement`<sup>Required</sup> <a name="replacement" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.replacement"></a>

```typescript
public readonly replacement: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeMachineTypesMachineTypesDeprecated;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecated">DataGoogleComputeMachineTypesMachineTypesDeprecated</a>

---


### DataGoogleComputeMachineTypesMachineTypesList <a name="DataGoogleComputeMachineTypesMachineTypesList" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.Initializer"></a>

```typescript
import { dataGoogleComputeMachineTypes } from '@cdktf/provider-google'

new dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.get"></a>

```typescript
public get(index: number): DataGoogleComputeMachineTypesMachineTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeMachineTypesMachineTypesOutputReference <a name="DataGoogleComputeMachineTypesMachineTypesOutputReference" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeMachineTypes } from '@cdktf/provider-google'

new dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.accelerators">accelerators</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList">DataGoogleComputeMachineTypesMachineTypesAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.deprecated">deprecated</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList">DataGoogleComputeMachineTypesMachineTypesDeprecatedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.guestCpus">guestCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.isSharedCpus">isSharedCpus</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.maximumPersistentDisks">maximumPersistentDisks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.maximumPersistentDisksSizeGb">maximumPersistentDisksSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.memoryMb">memoryMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypes">DataGoogleComputeMachineTypesMachineTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accelerators`<sup>Required</sup> <a name="accelerators" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.accelerators"></a>

```typescript
public readonly accelerators: DataGoogleComputeMachineTypesMachineTypesAcceleratorsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList">DataGoogleComputeMachineTypesMachineTypesAcceleratorsList</a>

---

##### `deprecated`<sup>Required</sup> <a name="deprecated" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.deprecated"></a>

```typescript
public readonly deprecated: DataGoogleComputeMachineTypesMachineTypesDeprecatedList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList">DataGoogleComputeMachineTypesMachineTypesDeprecatedList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `guestCpus`<sup>Required</sup> <a name="guestCpus" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.guestCpus"></a>

```typescript
public readonly guestCpus: number;
```

- *Type:* number

---

##### `isSharedCpus`<sup>Required</sup> <a name="isSharedCpus" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.isSharedCpus"></a>

```typescript
public readonly isSharedCpus: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `maximumPersistentDisks`<sup>Required</sup> <a name="maximumPersistentDisks" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.maximumPersistentDisks"></a>

```typescript
public readonly maximumPersistentDisks: number;
```

- *Type:* number

---

##### `maximumPersistentDisksSizeGb`<sup>Required</sup> <a name="maximumPersistentDisksSizeGb" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.maximumPersistentDisksSizeGb"></a>

```typescript
public readonly maximumPersistentDisksSizeGb: number;
```

- *Type:* number

---

##### `memoryMb`<sup>Required</sup> <a name="memoryMb" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.memoryMb"></a>

```typescript
public readonly memoryMb: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeMachineTypesMachineTypes;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypes">DataGoogleComputeMachineTypesMachineTypes</a>

---



