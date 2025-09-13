# `dataGoogleComputeStoragePoolTypes` Submodule <a name="`dataGoogleComputeStoragePoolTypes` Submodule" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeStoragePoolTypes <a name="DataGoogleComputeStoragePoolTypes" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/compute_storage_pool_types google_compute_storage_pool_types}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer"></a>

```typescript
import { dataGoogleComputeStoragePoolTypes } from '@cdktf/provider-google'

new dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes(scope: Construct, id: string, config: DataGoogleComputeStoragePoolTypesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig">DataGoogleComputeStoragePoolTypesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig">DataGoogleComputeStoragePoolTypesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComputeStoragePoolTypes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isConstruct"></a>

```typescript
import { dataGoogleComputeStoragePoolTypes } from '@cdktf/provider-google'

dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isTerraformElement"></a>

```typescript
import { dataGoogleComputeStoragePoolTypes } from '@cdktf/provider-google'

dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isTerraformDataSource"></a>

```typescript
import { dataGoogleComputeStoragePoolTypes } from '@cdktf/provider-google'

dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.generateConfigForImport"></a>

```typescript
import { dataGoogleComputeStoragePoolTypes } from '@cdktf/provider-google'

dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleComputeStoragePoolTypes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeStoragePoolTypes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeStoragePoolTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/compute_storage_pool_types#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeStoragePoolTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.deprecated">deprecated</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList">DataGoogleComputeStoragePoolTypesDeprecatedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.maxPoolProvisionedCapacityGb">maxPoolProvisionedCapacityGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.maxPoolProvisionedIops">maxPoolProvisionedIops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.maxPoolProvisionedThroughput">maxPoolProvisionedThroughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.minPoolProvisionedCapacityGb">minPoolProvisionedCapacityGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.minPoolProvisionedIops">minPoolProvisionedIops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.minPoolProvisionedThroughput">minPoolProvisionedThroughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.selfLinkWithId">selfLinkWithId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.supportedDiskTypes">supportedDiskTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.storagePoolTypeInput">storagePoolTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.storagePoolType">storagePoolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `deprecated`<sup>Required</sup> <a name="deprecated" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.deprecated"></a>

```typescript
public readonly deprecated: DataGoogleComputeStoragePoolTypesDeprecatedList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList">DataGoogleComputeStoragePoolTypesDeprecatedList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `maxPoolProvisionedCapacityGb`<sup>Required</sup> <a name="maxPoolProvisionedCapacityGb" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.maxPoolProvisionedCapacityGb"></a>

```typescript
public readonly maxPoolProvisionedCapacityGb: number;
```

- *Type:* number

---

##### `maxPoolProvisionedIops`<sup>Required</sup> <a name="maxPoolProvisionedIops" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.maxPoolProvisionedIops"></a>

```typescript
public readonly maxPoolProvisionedIops: number;
```

- *Type:* number

---

##### `maxPoolProvisionedThroughput`<sup>Required</sup> <a name="maxPoolProvisionedThroughput" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.maxPoolProvisionedThroughput"></a>

```typescript
public readonly maxPoolProvisionedThroughput: number;
```

- *Type:* number

---

##### `minPoolProvisionedCapacityGb`<sup>Required</sup> <a name="minPoolProvisionedCapacityGb" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.minPoolProvisionedCapacityGb"></a>

```typescript
public readonly minPoolProvisionedCapacityGb: number;
```

- *Type:* number

---

##### `minPoolProvisionedIops`<sup>Required</sup> <a name="minPoolProvisionedIops" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.minPoolProvisionedIops"></a>

```typescript
public readonly minPoolProvisionedIops: number;
```

- *Type:* number

---

##### `minPoolProvisionedThroughput`<sup>Required</sup> <a name="minPoolProvisionedThroughput" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.minPoolProvisionedThroughput"></a>

```typescript
public readonly minPoolProvisionedThroughput: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `selfLinkWithId`<sup>Required</sup> <a name="selfLinkWithId" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.selfLinkWithId"></a>

```typescript
public readonly selfLinkWithId: string;
```

- *Type:* string

---

##### `supportedDiskTypes`<sup>Required</sup> <a name="supportedDiskTypes" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.supportedDiskTypes"></a>

```typescript
public readonly supportedDiskTypes: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `storagePoolTypeInput`<sup>Optional</sup> <a name="storagePoolTypeInput" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.storagePoolTypeInput"></a>

```typescript
public readonly storagePoolTypeInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `storagePoolType`<sup>Required</sup> <a name="storagePoolType" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.storagePoolType"></a>

```typescript
public readonly storagePoolType: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeStoragePoolTypesConfig <a name="DataGoogleComputeStoragePoolTypesConfig" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.Initializer"></a>

```typescript
import { dataGoogleComputeStoragePoolTypes } from '@cdktf/provider-google'

const dataGoogleComputeStoragePoolTypesConfig: dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.storagePoolType">storagePoolType</a></code> | <code>string</code> | Name of the storage pool type. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.zone">zone</a></code> | <code>string</code> | The name of the zone. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/compute_storage_pool_types#project DataGoogleComputeStoragePoolTypes#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `storagePoolType`<sup>Required</sup> <a name="storagePoolType" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.storagePoolType"></a>

```typescript
public readonly storagePoolType: string;
```

- *Type:* string

Name of the storage pool type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/compute_storage_pool_types#storage_pool_type DataGoogleComputeStoragePoolTypes#storage_pool_type}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

The name of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/compute_storage_pool_types#zone DataGoogleComputeStoragePoolTypes#zone}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/compute_storage_pool_types#project DataGoogleComputeStoragePoolTypes#project}.

---

### DataGoogleComputeStoragePoolTypesDeprecated <a name="DataGoogleComputeStoragePoolTypesDeprecated" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecated"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecated.Initializer"></a>

```typescript
import { dataGoogleComputeStoragePoolTypes } from '@cdktf/provider-google'

const dataGoogleComputeStoragePoolTypesDeprecated: dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecated = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeStoragePoolTypesDeprecatedList <a name="DataGoogleComputeStoragePoolTypesDeprecatedList" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.Initializer"></a>

```typescript
import { dataGoogleComputeStoragePoolTypes } from '@cdktf/provider-google'

new dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.get"></a>

```typescript
public get(index: number): DataGoogleComputeStoragePoolTypesDeprecatedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeStoragePoolTypesDeprecatedOutputReference <a name="DataGoogleComputeStoragePoolTypesDeprecatedOutputReference" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeStoragePoolTypes } from '@cdktf/provider-google'

new dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.deleted">deleted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.deprecated">deprecated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.obsolete">obsolete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.replacement">replacement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecated">DataGoogleComputeStoragePoolTypesDeprecated</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleted`<sup>Required</sup> <a name="deleted" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.deleted"></a>

```typescript
public readonly deleted: string;
```

- *Type:* string

---

##### `deprecated`<sup>Required</sup> <a name="deprecated" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.deprecated"></a>

```typescript
public readonly deprecated: string;
```

- *Type:* string

---

##### `obsolete`<sup>Required</sup> <a name="obsolete" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.obsolete"></a>

```typescript
public readonly obsolete: string;
```

- *Type:* string

---

##### `replacement`<sup>Required</sup> <a name="replacement" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.replacement"></a>

```typescript
public readonly replacement: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeStoragePoolTypesDeprecated;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecated">DataGoogleComputeStoragePoolTypesDeprecated</a>

---



