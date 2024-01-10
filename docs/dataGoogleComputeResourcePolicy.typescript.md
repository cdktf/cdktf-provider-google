# `dataGoogleComputeResourcePolicy` Submodule <a name="`dataGoogleComputeResourcePolicy` Submodule" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeResourcePolicy <a name="DataGoogleComputeResourcePolicy" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/compute_resource_policy google_compute_resource_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

new dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy(scope: Construct, id: string, config: DataGoogleComputeResourcePolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig">DataGoogleComputeResourcePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig">DataGoogleComputeResourcePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComputeResourcePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.isConstruct"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.isTerraformElement"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.isTerraformDataSource"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.generateConfigForImport"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleComputeResourcePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeResourcePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeResourcePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/compute_resource_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeResourcePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.diskConsistencyGroupPolicy">diskConsistencyGroupPolicy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList">DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.groupPlacementPolicy">groupPlacementPolicy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList">DataGoogleComputeResourcePolicyGroupPlacementPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.instanceSchedulePolicy">instanceSchedulePolicy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList">DataGoogleComputeResourcePolicyInstanceSchedulePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.snapshotSchedulePolicy">snapshotSchedulePolicy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `diskConsistencyGroupPolicy`<sup>Required</sup> <a name="diskConsistencyGroupPolicy" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.diskConsistencyGroupPolicy"></a>

```typescript
public readonly diskConsistencyGroupPolicy: DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList">DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList</a>

---

##### `groupPlacementPolicy`<sup>Required</sup> <a name="groupPlacementPolicy" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.groupPlacementPolicy"></a>

```typescript
public readonly groupPlacementPolicy: DataGoogleComputeResourcePolicyGroupPlacementPolicyList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList">DataGoogleComputeResourcePolicyGroupPlacementPolicyList</a>

---

##### `instanceSchedulePolicy`<sup>Required</sup> <a name="instanceSchedulePolicy" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.instanceSchedulePolicy"></a>

```typescript
public readonly instanceSchedulePolicy: DataGoogleComputeResourcePolicyInstanceSchedulePolicyList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList">DataGoogleComputeResourcePolicyInstanceSchedulePolicyList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `snapshotSchedulePolicy`<sup>Required</sup> <a name="snapshotSchedulePolicy" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.snapshotSchedulePolicy"></a>

```typescript
public readonly snapshotSchedulePolicy: DataGoogleComputeResourcePolicySnapshotSchedulePolicyList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeResourcePolicyConfig <a name="DataGoogleComputeResourcePolicyConfig" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

const dataGoogleComputeResourcePolicyConfig: dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.name">name</a></code> | <code>string</code> | The name of the resource, provided by the client when initially creating the resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/compute_resource_policy#id DataGoogleComputeResourcePolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/compute_resource_policy#project DataGoogleComputeResourcePolicy#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.region">region</a></code> | <code>string</code> | Region where resource policy resides. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the resource, provided by the client when initially creating the resource.

The resource name must be 1-63 characters long, and comply
with RFC1035. Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])'? which means the
first character must be a lowercase letter, and all following characters
must be a dash, lowercase letter, or digit, except the last character,
which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/compute_resource_policy#name DataGoogleComputeResourcePolicy#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/compute_resource_policy#id DataGoogleComputeResourcePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/compute_resource_policy#project DataGoogleComputeResourcePolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where resource policy resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/compute_resource_policy#region DataGoogleComputeResourcePolicy#region}

---

### DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicy <a name="DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicy" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicy.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

const dataGoogleComputeResourcePolicyDiskConsistencyGroupPolicy: dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicy = { ... }
```


### DataGoogleComputeResourcePolicyGroupPlacementPolicy <a name="DataGoogleComputeResourcePolicyGroupPlacementPolicy" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicy.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

const dataGoogleComputeResourcePolicyGroupPlacementPolicy: dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicy = { ... }
```


### DataGoogleComputeResourcePolicyInstanceSchedulePolicy <a name="DataGoogleComputeResourcePolicyInstanceSchedulePolicy" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicy.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

const dataGoogleComputeResourcePolicyInstanceSchedulePolicy: dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicy = { ... }
```


### DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule <a name="DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

const dataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule: dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule = { ... }
```


### DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule <a name="DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

const dataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule: dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule = { ... }
```


### DataGoogleComputeResourcePolicySnapshotSchedulePolicy <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicy" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicy.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

const dataGoogleComputeResourcePolicySnapshotSchedulePolicy: dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicy = { ... }
```


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

const dataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy: dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy = { ... }
```


### DataGoogleComputeResourcePolicySnapshotSchedulePolicySchedule <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicySchedule" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySchedule.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

const dataGoogleComputeResourcePolicySnapshotSchedulePolicySchedule: dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySchedule = { ... }
```


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

const dataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule: dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule = { ... }
```


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

const dataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule: dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule = { ... }
```


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

const dataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule: dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule = { ... }
```


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

const dataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks: dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks = { ... }
```


### DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

const dataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties: dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList <a name="DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

new dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.get"></a>

```typescript
public get(index: number): DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference <a name="DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

new dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicy">DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicy">DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicy</a>

---


### DataGoogleComputeResourcePolicyGroupPlacementPolicyList <a name="DataGoogleComputeResourcePolicyGroupPlacementPolicyList" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

new dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.get"></a>

```typescript
public get(index: number): DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference <a name="DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

new dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.availabilityDomainCount">availabilityDomainCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.collocation">collocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.vmCount">vmCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicy">DataGoogleComputeResourcePolicyGroupPlacementPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomainCount`<sup>Required</sup> <a name="availabilityDomainCount" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.availabilityDomainCount"></a>

```typescript
public readonly availabilityDomainCount: number;
```

- *Type:* number

---

##### `collocation`<sup>Required</sup> <a name="collocation" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.collocation"></a>

```typescript
public readonly collocation: string;
```

- *Type:* string

---

##### `vmCount`<sup>Required</sup> <a name="vmCount" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.vmCount"></a>

```typescript
public readonly vmCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeResourcePolicyGroupPlacementPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicy">DataGoogleComputeResourcePolicyGroupPlacementPolicy</a>

---


### DataGoogleComputeResourcePolicyInstanceSchedulePolicyList <a name="DataGoogleComputeResourcePolicyInstanceSchedulePolicyList" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

new dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.get"></a>

```typescript
public get(index: number): DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference <a name="DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

new dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.expirationTime">expirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStartSchedule">vmStartSchedule</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList">DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStopSchedule">vmStopSchedule</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList">DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicy">DataGoogleComputeResourcePolicyInstanceSchedulePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.expirationTime"></a>

```typescript
public readonly expirationTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `vmStartSchedule`<sup>Required</sup> <a name="vmStartSchedule" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStartSchedule"></a>

```typescript
public readonly vmStartSchedule: DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList">DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList</a>

---

##### `vmStopSchedule`<sup>Required</sup> <a name="vmStopSchedule" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStopSchedule"></a>

```typescript
public readonly vmStopSchedule: DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList">DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeResourcePolicyInstanceSchedulePolicy;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicy">DataGoogleComputeResourcePolicyInstanceSchedulePolicy</a>

---


### DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList <a name="DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

new dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.get"></a>

```typescript
public get(index: number): DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference <a name="DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

new dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule">DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule">DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule</a>

---


### DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList <a name="DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

new dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.get"></a>

```typescript
public get(index: number): DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference <a name="DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

new dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule">DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule">DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule</a>

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyList <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyList" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

new dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.get"></a>

```typescript
public get(index: number): DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

new dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.snapshotProperties">snapshotProperties</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList">DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicy">DataGoogleComputeResourcePolicySnapshotSchedulePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retentionPolicy`<sup>Required</sup> <a name="retentionPolicy" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.retentionPolicy"></a>

```typescript
public readonly retentionPolicy: DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.schedule"></a>

```typescript
public readonly schedule: DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList</a>

---

##### `snapshotProperties`<sup>Required</sup> <a name="snapshotProperties" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.snapshotProperties"></a>

```typescript
public readonly snapshotProperties: DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList">DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeResourcePolicySnapshotSchedulePolicy;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicy">DataGoogleComputeResourcePolicySnapshotSchedulePolicy</a>

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

new dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.get"></a>

```typescript
public get(index: number): DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

new dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.maxRetentionDays">maxRetentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.onSourceDiskDelete">onSourceDiskDelete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy">DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxRetentionDays`<sup>Required</sup> <a name="maxRetentionDays" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.maxRetentionDays"></a>

```typescript
public readonly maxRetentionDays: number;
```

- *Type:* number

---

##### `onSourceDiskDelete`<sup>Required</sup> <a name="onSourceDiskDelete" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.onSourceDiskDelete"></a>

```typescript
public readonly onSourceDiskDelete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy">DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy</a>

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

new dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.get"></a>

```typescript
public get(index: number): DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

new dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.daysInCycle">daysInCycle</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysInCycle`<sup>Required</sup> <a name="daysInCycle" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.daysInCycle"></a>

```typescript
public readonly daysInCycle: number;
```

- *Type:* number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule</a>

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

new dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.get"></a>

```typescript
public get(index: number): DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

new dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.hoursInCycle">hoursInCycle</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hoursInCycle`<sup>Required</sup> <a name="hoursInCycle" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.hoursInCycle"></a>

```typescript
public readonly hoursInCycle: number;
```

- *Type:* number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule</a>

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

new dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.get"></a>

```typescript
public get(index: number): DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

new dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.dailySchedule">dailySchedule</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.hourlySchedule">hourlySchedule</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.weeklySchedule">weeklySchedule</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySchedule">DataGoogleComputeResourcePolicySnapshotSchedulePolicySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dailySchedule`<sup>Required</sup> <a name="dailySchedule" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.dailySchedule"></a>

```typescript
public readonly dailySchedule: DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList</a>

---

##### `hourlySchedule`<sup>Required</sup> <a name="hourlySchedule" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.hourlySchedule"></a>

```typescript
public readonly hourlySchedule: DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList</a>

---

##### `weeklySchedule`<sup>Required</sup> <a name="weeklySchedule" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.weeklySchedule"></a>

```typescript
public readonly weeklySchedule: DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeResourcePolicySnapshotSchedulePolicySchedule;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySchedule">DataGoogleComputeResourcePolicySnapshotSchedulePolicySchedule</a>

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

new dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.get"></a>

```typescript
public get(index: number): DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

new dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.day">day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks</a>

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

new dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.get"></a>

```typescript
public get(index: number): DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

new dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.dayOfWeeks">dayOfWeeks</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfWeeks`<sup>Required</sup> <a name="dayOfWeeks" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.dayOfWeeks"></a>

```typescript
public readonly dayOfWeeks: DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule</a>

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

new dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.get"></a>

```typescript
public get(index: number): DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeResourcePolicy } from '@cdktf/provider-google'

new dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.chainName">chainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.guestFlush">guestFlush</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.storageLocations">storageLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties">DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `chainName`<sup>Required</sup> <a name="chainName" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.chainName"></a>

```typescript
public readonly chainName: string;
```

- *Type:* string

---

##### `guestFlush`<sup>Required</sup> <a name="guestFlush" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.guestFlush"></a>

```typescript
public readonly guestFlush: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `storageLocations`<sup>Required</sup> <a name="storageLocations" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.storageLocations"></a>

```typescript
public readonly storageLocations: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties">DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties</a>

---



