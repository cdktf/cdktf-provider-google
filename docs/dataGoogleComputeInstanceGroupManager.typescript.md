# `dataGoogleComputeInstanceGroupManager` Submodule <a name="`dataGoogleComputeInstanceGroupManager` Submodule" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeInstanceGroupManager <a name="DataGoogleComputeInstanceGroupManager" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_instance_group_manager google_compute_instance_group_manager}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager(scope: Construct, id: string, config?: DataGoogleComputeInstanceGroupManagerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig">DataGoogleComputeInstanceGroupManagerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig">DataGoogleComputeInstanceGroupManagerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.resetSelfLink">resetSelfLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSelfLink` <a name="resetSelfLink" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.resetSelfLink"></a>

```typescript
public resetSelfLink(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComputeInstanceGroupManager resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.isConstruct"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.isTerraformElement"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.isTerraformDataSource"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.generateConfigForImport"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleComputeInstanceGroupManager resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeInstanceGroupManager to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeInstanceGroupManager that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_instance_group_manager#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeInstanceGroupManager to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.allInstancesConfig">allInstancesConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList">DataGoogleComputeInstanceGroupManagerAllInstancesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.autoHealingPolicies">autoHealingPolicies</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList">DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.baseInstanceName">baseInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.instanceGroup">instanceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.instanceGroupManagerId">instanceGroupManagerId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.instanceLifecyclePolicy">instanceLifecyclePolicy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList">DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.listManagedInstancesResults">listManagedInstancesResults</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.namedPort">namedPort</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList">DataGoogleComputeInstanceGroupManagerNamedPortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.resourcePolicies">resourcePolicies</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList">DataGoogleComputeInstanceGroupManagerResourcePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.standbyPolicy">standbyPolicy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList">DataGoogleComputeInstanceGroupManagerStandbyPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.statefulDisk">statefulDisk</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList">DataGoogleComputeInstanceGroupManagerStatefulDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.statefulExternalIp">statefulExternalIp</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList">DataGoogleComputeInstanceGroupManagerStatefulExternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.statefulInternalIp">statefulInternalIp</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList">DataGoogleComputeInstanceGroupManagerStatefulInternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.status">status</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList">DataGoogleComputeInstanceGroupManagerStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.targetPools">targetPools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.targetSize">targetSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.targetStoppedSize">targetStoppedSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.targetSuspendedSize">targetSuspendedSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList">DataGoogleComputeInstanceGroupManagerUpdatePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.version">version</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList">DataGoogleComputeInstanceGroupManagerVersionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.waitForInstances">waitForInstances</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.waitForInstancesStatus">waitForInstancesStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.selfLinkInput">selfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `allInstancesConfig`<sup>Required</sup> <a name="allInstancesConfig" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.allInstancesConfig"></a>

```typescript
public readonly allInstancesConfig: DataGoogleComputeInstanceGroupManagerAllInstancesConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList">DataGoogleComputeInstanceGroupManagerAllInstancesConfigList</a>

---

##### `autoHealingPolicies`<sup>Required</sup> <a name="autoHealingPolicies" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.autoHealingPolicies"></a>

```typescript
public readonly autoHealingPolicies: DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList">DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList</a>

---

##### `baseInstanceName`<sup>Required</sup> <a name="baseInstanceName" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.baseInstanceName"></a>

```typescript
public readonly baseInstanceName: string;
```

- *Type:* string

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `instanceGroup`<sup>Required</sup> <a name="instanceGroup" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.instanceGroup"></a>

```typescript
public readonly instanceGroup: string;
```

- *Type:* string

---

##### `instanceGroupManagerId`<sup>Required</sup> <a name="instanceGroupManagerId" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.instanceGroupManagerId"></a>

```typescript
public readonly instanceGroupManagerId: number;
```

- *Type:* number

---

##### `instanceLifecyclePolicy`<sup>Required</sup> <a name="instanceLifecyclePolicy" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.instanceLifecyclePolicy"></a>

```typescript
public readonly instanceLifecyclePolicy: DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList">DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList</a>

---

##### `listManagedInstancesResults`<sup>Required</sup> <a name="listManagedInstancesResults" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.listManagedInstancesResults"></a>

```typescript
public readonly listManagedInstancesResults: string;
```

- *Type:* string

---

##### `namedPort`<sup>Required</sup> <a name="namedPort" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.namedPort"></a>

```typescript
public readonly namedPort: DataGoogleComputeInstanceGroupManagerNamedPortList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList">DataGoogleComputeInstanceGroupManagerNamedPortList</a>

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `resourcePolicies`<sup>Required</sup> <a name="resourcePolicies" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.resourcePolicies"></a>

```typescript
public readonly resourcePolicies: DataGoogleComputeInstanceGroupManagerResourcePoliciesList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList">DataGoogleComputeInstanceGroupManagerResourcePoliciesList</a>

---

##### `standbyPolicy`<sup>Required</sup> <a name="standbyPolicy" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.standbyPolicy"></a>

```typescript
public readonly standbyPolicy: DataGoogleComputeInstanceGroupManagerStandbyPolicyList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList">DataGoogleComputeInstanceGroupManagerStandbyPolicyList</a>

---

##### `statefulDisk`<sup>Required</sup> <a name="statefulDisk" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.statefulDisk"></a>

```typescript
public readonly statefulDisk: DataGoogleComputeInstanceGroupManagerStatefulDiskList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList">DataGoogleComputeInstanceGroupManagerStatefulDiskList</a>

---

##### `statefulExternalIp`<sup>Required</sup> <a name="statefulExternalIp" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.statefulExternalIp"></a>

```typescript
public readonly statefulExternalIp: DataGoogleComputeInstanceGroupManagerStatefulExternalIpList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList">DataGoogleComputeInstanceGroupManagerStatefulExternalIpList</a>

---

##### `statefulInternalIp`<sup>Required</sup> <a name="statefulInternalIp" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.statefulInternalIp"></a>

```typescript
public readonly statefulInternalIp: DataGoogleComputeInstanceGroupManagerStatefulInternalIpList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList">DataGoogleComputeInstanceGroupManagerStatefulInternalIpList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.status"></a>

```typescript
public readonly status: DataGoogleComputeInstanceGroupManagerStatusList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList">DataGoogleComputeInstanceGroupManagerStatusList</a>

---

##### `targetPools`<sup>Required</sup> <a name="targetPools" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.targetPools"></a>

```typescript
public readonly targetPools: string[];
```

- *Type:* string[]

---

##### `targetSize`<sup>Required</sup> <a name="targetSize" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.targetSize"></a>

```typescript
public readonly targetSize: number;
```

- *Type:* number

---

##### `targetStoppedSize`<sup>Required</sup> <a name="targetStoppedSize" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.targetStoppedSize"></a>

```typescript
public readonly targetStoppedSize: number;
```

- *Type:* number

---

##### `targetSuspendedSize`<sup>Required</sup> <a name="targetSuspendedSize" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.targetSuspendedSize"></a>

```typescript
public readonly targetSuspendedSize: number;
```

- *Type:* number

---

##### `updatePolicy`<sup>Required</sup> <a name="updatePolicy" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.updatePolicy"></a>

```typescript
public readonly updatePolicy: DataGoogleComputeInstanceGroupManagerUpdatePolicyList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList">DataGoogleComputeInstanceGroupManagerUpdatePolicyList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.version"></a>

```typescript
public readonly version: DataGoogleComputeInstanceGroupManagerVersionList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList">DataGoogleComputeInstanceGroupManagerVersionList</a>

---

##### `waitForInstances`<sup>Required</sup> <a name="waitForInstances" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.waitForInstances"></a>

```typescript
public readonly waitForInstances: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `waitForInstancesStatus`<sup>Required</sup> <a name="waitForInstancesStatus" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.waitForInstancesStatus"></a>

```typescript
public readonly waitForInstancesStatus: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `selfLinkInput`<sup>Optional</sup> <a name="selfLinkInput" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.selfLinkInput"></a>

```typescript
public readonly selfLinkInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManager.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeInstanceGroupManagerAllInstancesConfig <a name="DataGoogleComputeInstanceGroupManagerAllInstancesConfig" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfig.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

const dataGoogleComputeInstanceGroupManagerAllInstancesConfig: dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfig = { ... }
```


### DataGoogleComputeInstanceGroupManagerAutoHealingPolicies <a name="DataGoogleComputeInstanceGroupManagerAutoHealingPolicies" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPolicies.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

const dataGoogleComputeInstanceGroupManagerAutoHealingPolicies: dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPolicies = { ... }
```


### DataGoogleComputeInstanceGroupManagerConfig <a name="DataGoogleComputeInstanceGroupManagerConfig" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

const dataGoogleComputeInstanceGroupManagerConfig: dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_instance_group_manager#id DataGoogleComputeInstanceGroupManager#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.name">name</a></code> | <code>string</code> | The name of the instance group manager. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.project">project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.selfLink">selfLink</a></code> | <code>string</code> | The URL of the created resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.zone">zone</a></code> | <code>string</code> | The zone that instances in this group should be created in. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_instance_group_manager#id DataGoogleComputeInstanceGroupManager#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the instance group manager.

Must be 1-63 characters long and comply with RFC1035. Supported characters include lowercase letters, numbers, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_instance_group_manager#name DataGoogleComputeInstanceGroupManager#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_instance_group_manager#project DataGoogleComputeInstanceGroupManager#project}

---

##### `selfLink`<sup>Optional</sup> <a name="selfLink" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

The URL of the created resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_instance_group_manager#self_link DataGoogleComputeInstanceGroupManager#self_link}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

The zone that instances in this group should be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_instance_group_manager#zone DataGoogleComputeInstanceGroupManager#zone}

---

### DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicy <a name="DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicy" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicy.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

const dataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicy: dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicy = { ... }
```


### DataGoogleComputeInstanceGroupManagerNamedPort <a name="DataGoogleComputeInstanceGroupManagerNamedPort" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPort.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

const dataGoogleComputeInstanceGroupManagerNamedPort: dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPort = { ... }
```


### DataGoogleComputeInstanceGroupManagerResourcePolicies <a name="DataGoogleComputeInstanceGroupManagerResourcePolicies" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePolicies.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

const dataGoogleComputeInstanceGroupManagerResourcePolicies: dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePolicies = { ... }
```


### DataGoogleComputeInstanceGroupManagerStandbyPolicy <a name="DataGoogleComputeInstanceGroupManagerStandbyPolicy" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicy.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

const dataGoogleComputeInstanceGroupManagerStandbyPolicy: dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicy = { ... }
```


### DataGoogleComputeInstanceGroupManagerStatefulDisk <a name="DataGoogleComputeInstanceGroupManagerStatefulDisk" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDisk.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

const dataGoogleComputeInstanceGroupManagerStatefulDisk: dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDisk = { ... }
```


### DataGoogleComputeInstanceGroupManagerStatefulExternalIp <a name="DataGoogleComputeInstanceGroupManagerStatefulExternalIp" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIp.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

const dataGoogleComputeInstanceGroupManagerStatefulExternalIp: dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIp = { ... }
```


### DataGoogleComputeInstanceGroupManagerStatefulInternalIp <a name="DataGoogleComputeInstanceGroupManagerStatefulInternalIp" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIp.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

const dataGoogleComputeInstanceGroupManagerStatefulInternalIp: dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIp = { ... }
```


### DataGoogleComputeInstanceGroupManagerStatus <a name="DataGoogleComputeInstanceGroupManagerStatus" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatus.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

const dataGoogleComputeInstanceGroupManagerStatus: dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatus = { ... }
```


### DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfig <a name="DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfig" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfig.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

const dataGoogleComputeInstanceGroupManagerStatusAllInstancesConfig: dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfig = { ... }
```


### DataGoogleComputeInstanceGroupManagerStatusStateful <a name="DataGoogleComputeInstanceGroupManagerStatusStateful" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStateful"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStateful.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

const dataGoogleComputeInstanceGroupManagerStatusStateful: dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStateful = { ... }
```


### DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs <a name="DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

const dataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs: dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs = { ... }
```


### DataGoogleComputeInstanceGroupManagerStatusVersionTarget <a name="DataGoogleComputeInstanceGroupManagerStatusVersionTarget" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTarget.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

const dataGoogleComputeInstanceGroupManagerStatusVersionTarget: dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTarget = { ... }
```


### DataGoogleComputeInstanceGroupManagerUpdatePolicy <a name="DataGoogleComputeInstanceGroupManagerUpdatePolicy" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicy.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

const dataGoogleComputeInstanceGroupManagerUpdatePolicy: dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicy = { ... }
```


### DataGoogleComputeInstanceGroupManagerVersion <a name="DataGoogleComputeInstanceGroupManagerVersion" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersion.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

const dataGoogleComputeInstanceGroupManagerVersion: dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersion = { ... }
```


### DataGoogleComputeInstanceGroupManagerVersionTargetSize <a name="DataGoogleComputeInstanceGroupManagerVersionTargetSize" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSize"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSize.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

const dataGoogleComputeInstanceGroupManagerVersionTargetSize: dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSize = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeInstanceGroupManagerAllInstancesConfigList <a name="DataGoogleComputeInstanceGroupManagerAllInstancesConfigList" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.get"></a>

```typescript
public get(index: number): DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference <a name="DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfig">DataGoogleComputeInstanceGroupManagerAllInstancesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.metadata"></a>

```typescript
public readonly metadata: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeInstanceGroupManagerAllInstancesConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAllInstancesConfig">DataGoogleComputeInstanceGroupManagerAllInstancesConfig</a>

---


### DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList <a name="DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.get"></a>

```typescript
public get(index: number): DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference <a name="DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheck">healthCheck</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySec">initialDelaySec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPolicies">DataGoogleComputeInstanceGroupManagerAutoHealingPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheck"></a>

```typescript
public readonly healthCheck: string;
```

- *Type:* string

---

##### `initialDelaySec`<sup>Required</sup> <a name="initialDelaySec" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySec"></a>

```typescript
public readonly initialDelaySec: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeInstanceGroupManagerAutoHealingPolicies;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerAutoHealingPolicies">DataGoogleComputeInstanceGroupManagerAutoHealingPolicies</a>

---


### DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList <a name="DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.get"></a>

```typescript
public get(index: number): DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference <a name="DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.defaultActionOnFailure">defaultActionOnFailure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.forceUpdateOnRepair">forceUpdateOnRepair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultActionOnFailure`<sup>Required</sup> <a name="defaultActionOnFailure" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.defaultActionOnFailure"></a>

```typescript
public readonly defaultActionOnFailure: string;
```

- *Type:* string

---

##### `forceUpdateOnRepair`<sup>Required</sup> <a name="forceUpdateOnRepair" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.forceUpdateOnRepair"></a>

```typescript
public readonly forceUpdateOnRepair: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicy;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a>

---


### DataGoogleComputeInstanceGroupManagerNamedPortList <a name="DataGoogleComputeInstanceGroupManagerNamedPortList" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.get"></a>

```typescript
public get(index: number): DataGoogleComputeInstanceGroupManagerNamedPortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeInstanceGroupManagerNamedPortOutputReference <a name="DataGoogleComputeInstanceGroupManagerNamedPortOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPort">DataGoogleComputeInstanceGroupManagerNamedPort</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPortOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeInstanceGroupManagerNamedPort;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerNamedPort">DataGoogleComputeInstanceGroupManagerNamedPort</a>

---


### DataGoogleComputeInstanceGroupManagerResourcePoliciesList <a name="DataGoogleComputeInstanceGroupManagerResourcePoliciesList" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.get"></a>

```typescript
public get(index: number): DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference <a name="DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.property.workloadPolicy">workloadPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePolicies">DataGoogleComputeInstanceGroupManagerResourcePolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workloadPolicy`<sup>Required</sup> <a name="workloadPolicy" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.property.workloadPolicy"></a>

```typescript
public readonly workloadPolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeInstanceGroupManagerResourcePolicies;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerResourcePolicies">DataGoogleComputeInstanceGroupManagerResourcePolicies</a>

---


### DataGoogleComputeInstanceGroupManagerStandbyPolicyList <a name="DataGoogleComputeInstanceGroupManagerStandbyPolicyList" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.get"></a>

```typescript
public get(index: number): DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference <a name="DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.initialDelaySec">initialDelaySec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicy">DataGoogleComputeInstanceGroupManagerStandbyPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `initialDelaySec`<sup>Required</sup> <a name="initialDelaySec" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.initialDelaySec"></a>

```typescript
public readonly initialDelaySec: number;
```

- *Type:* number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeInstanceGroupManagerStandbyPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStandbyPolicy">DataGoogleComputeInstanceGroupManagerStandbyPolicy</a>

---


### DataGoogleComputeInstanceGroupManagerStatefulDiskList <a name="DataGoogleComputeInstanceGroupManagerStatefulDiskList" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.get"></a>

```typescript
public get(index: number): DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference <a name="DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deleteRule">deleteRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDisk">DataGoogleComputeInstanceGroupManagerStatefulDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteRule`<sup>Required</sup> <a name="deleteRule" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deleteRule"></a>

```typescript
public readonly deleteRule: string;
```

- *Type:* string

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeInstanceGroupManagerStatefulDisk;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulDisk">DataGoogleComputeInstanceGroupManagerStatefulDisk</a>

---


### DataGoogleComputeInstanceGroupManagerStatefulExternalIpList <a name="DataGoogleComputeInstanceGroupManagerStatefulExternalIpList" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.get"></a>

```typescript
public get(index: number): DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference <a name="DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRule">deleteRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceName">interfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIp">DataGoogleComputeInstanceGroupManagerStatefulExternalIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteRule`<sup>Required</sup> <a name="deleteRule" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRule"></a>

```typescript
public readonly deleteRule: string;
```

- *Type:* string

---

##### `interfaceName`<sup>Required</sup> <a name="interfaceName" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceName"></a>

```typescript
public readonly interfaceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeInstanceGroupManagerStatefulExternalIp;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulExternalIp">DataGoogleComputeInstanceGroupManagerStatefulExternalIp</a>

---


### DataGoogleComputeInstanceGroupManagerStatefulInternalIpList <a name="DataGoogleComputeInstanceGroupManagerStatefulInternalIpList" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.get"></a>

```typescript
public get(index: number): DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference <a name="DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRule">deleteRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceName">interfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIp">DataGoogleComputeInstanceGroupManagerStatefulInternalIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteRule`<sup>Required</sup> <a name="deleteRule" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRule"></a>

```typescript
public readonly deleteRule: string;
```

- *Type:* string

---

##### `interfaceName`<sup>Required</sup> <a name="interfaceName" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceName"></a>

```typescript
public readonly interfaceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeInstanceGroupManagerStatefulInternalIp;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatefulInternalIp">DataGoogleComputeInstanceGroupManagerStatefulInternalIp</a>

---


### DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList <a name="DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.get"></a>

```typescript
public get(index: number): DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference <a name="DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.currentRevision">currentRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.effective">effective</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfig">DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currentRevision`<sup>Required</sup> <a name="currentRevision" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.currentRevision"></a>

```typescript
public readonly currentRevision: string;
```

- *Type:* string

---

##### `effective`<sup>Required</sup> <a name="effective" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.effective"></a>

```typescript
public readonly effective: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfig">DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfig</a>

---


### DataGoogleComputeInstanceGroupManagerStatusList <a name="DataGoogleComputeInstanceGroupManagerStatusList" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.get"></a>

```typescript
public get(index: number): DataGoogleComputeInstanceGroupManagerStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeInstanceGroupManagerStatusOutputReference <a name="DataGoogleComputeInstanceGroupManagerStatusOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.property.allInstancesConfig">allInstancesConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList">DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.property.isStable">isStable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.property.stateful">stateful</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList">DataGoogleComputeInstanceGroupManagerStatusStatefulList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.property.versionTarget">versionTarget</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList">DataGoogleComputeInstanceGroupManagerStatusVersionTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatus">DataGoogleComputeInstanceGroupManagerStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allInstancesConfig`<sup>Required</sup> <a name="allInstancesConfig" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.property.allInstancesConfig"></a>

```typescript
public readonly allInstancesConfig: DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList">DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList</a>

---

##### `isStable`<sup>Required</sup> <a name="isStable" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.property.isStable"></a>

```typescript
public readonly isStable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `stateful`<sup>Required</sup> <a name="stateful" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.property.stateful"></a>

```typescript
public readonly stateful: DataGoogleComputeInstanceGroupManagerStatusStatefulList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList">DataGoogleComputeInstanceGroupManagerStatusStatefulList</a>

---

##### `versionTarget`<sup>Required</sup> <a name="versionTarget" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.property.versionTarget"></a>

```typescript
public readonly versionTarget: DataGoogleComputeInstanceGroupManagerStatusVersionTargetList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList">DataGoogleComputeInstanceGroupManagerStatusVersionTargetList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeInstanceGroupManagerStatus;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatus">DataGoogleComputeInstanceGroupManagerStatus</a>

---


### DataGoogleComputeInstanceGroupManagerStatusStatefulList <a name="DataGoogleComputeInstanceGroupManagerStatusStatefulList" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.get"></a>

```typescript
public get(index: number): DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference <a name="DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.hasStatefulConfig">hasStatefulConfig</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.perInstanceConfigs">perInstanceConfigs</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList">DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStateful">DataGoogleComputeInstanceGroupManagerStatusStateful</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hasStatefulConfig`<sup>Required</sup> <a name="hasStatefulConfig" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.hasStatefulConfig"></a>

```typescript
public readonly hasStatefulConfig: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `perInstanceConfigs`<sup>Required</sup> <a name="perInstanceConfigs" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.perInstanceConfigs"></a>

```typescript
public readonly perInstanceConfigs: DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList">DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeInstanceGroupManagerStatusStateful;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStateful">DataGoogleComputeInstanceGroupManagerStatusStateful</a>

---


### DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList <a name="DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference <a name="DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.allEffective">allEffective</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs">DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allEffective`<sup>Required</sup> <a name="allEffective" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.allEffective"></a>

```typescript
public readonly allEffective: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs">DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs</a>

---


### DataGoogleComputeInstanceGroupManagerStatusVersionTargetList <a name="DataGoogleComputeInstanceGroupManagerStatusVersionTargetList" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.get"></a>

```typescript
public get(index: number): DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference <a name="DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.isReached">isReached</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTarget">DataGoogleComputeInstanceGroupManagerStatusVersionTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isReached`<sup>Required</sup> <a name="isReached" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.isReached"></a>

```typescript
public readonly isReached: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeInstanceGroupManagerStatusVersionTarget;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerStatusVersionTarget">DataGoogleComputeInstanceGroupManagerStatusVersionTarget</a>

---


### DataGoogleComputeInstanceGroupManagerUpdatePolicyList <a name="DataGoogleComputeInstanceGroupManagerUpdatePolicyList" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.get"></a>

```typescript
public get(index: number): DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference <a name="DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixed">maxSurgeFixed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercent">maxSurgePercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixed">maxUnavailableFixed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercent">maxUnavailablePercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minimalAction">minimalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedAction">mostDisruptiveAllowedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethod">replacementMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicy">DataGoogleComputeInstanceGroupManagerUpdatePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxSurgeFixed`<sup>Required</sup> <a name="maxSurgeFixed" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixed"></a>

```typescript
public readonly maxSurgeFixed: number;
```

- *Type:* number

---

##### `maxSurgePercent`<sup>Required</sup> <a name="maxSurgePercent" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercent"></a>

```typescript
public readonly maxSurgePercent: number;
```

- *Type:* number

---

##### `maxUnavailableFixed`<sup>Required</sup> <a name="maxUnavailableFixed" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixed"></a>

```typescript
public readonly maxUnavailableFixed: number;
```

- *Type:* number

---

##### `maxUnavailablePercent`<sup>Required</sup> <a name="maxUnavailablePercent" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercent"></a>

```typescript
public readonly maxUnavailablePercent: number;
```

- *Type:* number

---

##### `minimalAction`<sup>Required</sup> <a name="minimalAction" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minimalAction"></a>

```typescript
public readonly minimalAction: string;
```

- *Type:* string

---

##### `mostDisruptiveAllowedAction`<sup>Required</sup> <a name="mostDisruptiveAllowedAction" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedAction"></a>

```typescript
public readonly mostDisruptiveAllowedAction: string;
```

- *Type:* string

---

##### `replacementMethod`<sup>Required</sup> <a name="replacementMethod" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethod"></a>

```typescript
public readonly replacementMethod: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeInstanceGroupManagerUpdatePolicy;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerUpdatePolicy">DataGoogleComputeInstanceGroupManagerUpdatePolicy</a>

---


### DataGoogleComputeInstanceGroupManagerVersionList <a name="DataGoogleComputeInstanceGroupManagerVersionList" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.get"></a>

```typescript
public get(index: number): DataGoogleComputeInstanceGroupManagerVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeInstanceGroupManagerVersionOutputReference <a name="DataGoogleComputeInstanceGroupManagerVersionOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.property.instanceTemplate">instanceTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.property.targetSize">targetSize</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList">DataGoogleComputeInstanceGroupManagerVersionTargetSizeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersion">DataGoogleComputeInstanceGroupManagerVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceTemplate`<sup>Required</sup> <a name="instanceTemplate" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.property.instanceTemplate"></a>

```typescript
public readonly instanceTemplate: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `targetSize`<sup>Required</sup> <a name="targetSize" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.property.targetSize"></a>

```typescript
public readonly targetSize: DataGoogleComputeInstanceGroupManagerVersionTargetSizeList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList">DataGoogleComputeInstanceGroupManagerVersionTargetSizeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeInstanceGroupManagerVersion;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersion">DataGoogleComputeInstanceGroupManagerVersion</a>

---


### DataGoogleComputeInstanceGroupManagerVersionTargetSizeList <a name="DataGoogleComputeInstanceGroupManagerVersionTargetSizeList" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.get"></a>

```typescript
public get(index: number): DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference <a name="DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroupManager } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fixed">fixed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.percent">percent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSize">DataGoogleComputeInstanceGroupManagerVersionTargetSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fixed`<sup>Required</sup> <a name="fixed" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fixed"></a>

```typescript
public readonly fixed: number;
```

- *Type:* number

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.percent"></a>

```typescript
public readonly percent: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeInstanceGroupManagerVersionTargetSize;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGroupManager.DataGoogleComputeInstanceGroupManagerVersionTargetSize">DataGoogleComputeInstanceGroupManagerVersionTargetSize</a>

---



