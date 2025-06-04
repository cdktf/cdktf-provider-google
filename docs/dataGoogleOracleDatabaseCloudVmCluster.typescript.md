# `dataGoogleOracleDatabaseCloudVmCluster` Submodule <a name="`dataGoogleOracleDatabaseCloudVmCluster` Submodule" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseCloudVmCluster <a name="DataGoogleOracleDatabaseCloudVmCluster" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/oracle_database_cloud_vm_cluster google_oracle_database_cloud_vm_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudVmCluster } from '@cdktf/provider-google'

new dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster(scope: Construct, id: string, config: DataGoogleOracleDatabaseCloudVmClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterConfig">DataGoogleOracleDatabaseCloudVmClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterConfig">DataGoogleOracleDatabaseCloudVmClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleOracleDatabaseCloudVmCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.isConstruct"></a>

```typescript
import { dataGoogleOracleDatabaseCloudVmCluster } from '@cdktf/provider-google'

dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.isTerraformElement"></a>

```typescript
import { dataGoogleOracleDatabaseCloudVmCluster } from '@cdktf/provider-google'

dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.isTerraformDataSource"></a>

```typescript
import { dataGoogleOracleDatabaseCloudVmCluster } from '@cdktf/provider-google'

dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.generateConfigForImport"></a>

```typescript
import { dataGoogleOracleDatabaseCloudVmCluster } from '@cdktf/provider-google'

dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleOracleDatabaseCloudVmCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleOracleDatabaseCloudVmCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleOracleDatabaseCloudVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/oracle_database_cloud_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseCloudVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.backupSubnetCidr">backupSubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.deletionProtection">deletionProtection</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.exadataInfrastructure">exadataInfrastructure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.gcpOracleZone">gcpOracleZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesList">DataGoogleOracleDatabaseCloudVmClusterPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.cloudVmClusterIdInput">cloudVmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.cloudVmClusterId">cloudVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `backupSubnetCidr`<sup>Required</sup> <a name="backupSubnetCidr" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.backupSubnetCidr"></a>

```typescript
public readonly backupSubnetCidr: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `exadataInfrastructure`<sup>Required</sup> <a name="exadataInfrastructure" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.exadataInfrastructure"></a>

```typescript
public readonly exadataInfrastructure: string;
```

- *Type:* string

---

##### `gcpOracleZone`<sup>Required</sup> <a name="gcpOracleZone" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.gcpOracleZone"></a>

```typescript
public readonly gcpOracleZone: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.properties"></a>

```typescript
public readonly properties: DataGoogleOracleDatabaseCloudVmClusterPropertiesList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesList">DataGoogleOracleDatabaseCloudVmClusterPropertiesList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `cloudVmClusterIdInput`<sup>Optional</sup> <a name="cloudVmClusterIdInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.cloudVmClusterIdInput"></a>

```typescript
public readonly cloudVmClusterIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `cloudVmClusterId`<sup>Required</sup> <a name="cloudVmClusterId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.cloudVmClusterId"></a>

```typescript
public readonly cloudVmClusterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseCloudVmClusterConfig <a name="DataGoogleOracleDatabaseCloudVmClusterConfig" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterConfig.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudVmCluster } from '@cdktf/provider-google'

const dataGoogleOracleDatabaseCloudVmClusterConfig: dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterConfig.property.cloudVmClusterId">cloudVmClusterId</a></code> | <code>string</code> | The ID of the VM Cluster to create. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbNode'. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/oracle_database_cloud_vm_cluster#id DataGoogleOracleDatabaseCloudVmCluster#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/oracle_database_cloud_vm_cluster#project DataGoogleOracleDatabaseCloudVmCluster#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cloudVmClusterId`<sup>Required</sup> <a name="cloudVmClusterId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterConfig.property.cloudVmClusterId"></a>

```typescript
public readonly cloudVmClusterId: string;
```

- *Type:* string

The ID of the VM Cluster to create.

This value is restricted
to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/oracle_database_cloud_vm_cluster#cloud_vm_cluster_id DataGoogleOracleDatabaseCloudVmCluster#cloud_vm_cluster_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbNode'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/oracle_database_cloud_vm_cluster#location DataGoogleOracleDatabaseCloudVmCluster#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/oracle_database_cloud_vm_cluster#id DataGoogleOracleDatabaseCloudVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/oracle_database_cloud_vm_cluster#project DataGoogleOracleDatabaseCloudVmCluster#project}.

---

### DataGoogleOracleDatabaseCloudVmClusterProperties <a name="DataGoogleOracleDatabaseCloudVmClusterProperties" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterProperties.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudVmCluster } from '@cdktf/provider-google'

const dataGoogleOracleDatabaseCloudVmClusterProperties: dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterProperties = { ... }
```


### DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions <a name="DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudVmCluster } from '@cdktf/provider-google'

const dataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions: dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions = { ... }
```


### DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZone <a name="DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZone" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZone.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudVmCluster } from '@cdktf/provider-google'

const dataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZone: dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZone = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList <a name="DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudVmCluster } from '@cdktf/provider-google'

new dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList.get"></a>

```typescript
public get(index: number): DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference <a name="DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudVmCluster } from '@cdktf/provider-google'

new dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabled">diagnosticsEventsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.healthMonitoringEnabled">healthMonitoringEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.incidentLogsEnabled">incidentLogsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diagnosticsEventsEnabled`<sup>Required</sup> <a name="diagnosticsEventsEnabled" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabled"></a>

```typescript
public readonly diagnosticsEventsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `healthMonitoringEnabled`<sup>Required</sup> <a name="healthMonitoringEnabled" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.healthMonitoringEnabled"></a>

```typescript
public readonly healthMonitoringEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `incidentLogsEnabled`<sup>Required</sup> <a name="incidentLogsEnabled" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.incidentLogsEnabled"></a>

```typescript
public readonly incidentLogsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a>

---


### DataGoogleOracleDatabaseCloudVmClusterPropertiesList <a name="DataGoogleOracleDatabaseCloudVmClusterPropertiesList" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesList.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudVmCluster } from '@cdktf/provider-google'

new dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesList.get"></a>

```typescript
public get(index: number): DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference <a name="DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudVmCluster } from '@cdktf/provider-google'

new dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dataStorageSizeTb">dataStorageSizeTb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbNodeStorageSizeGb">dbNodeStorageSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbServerOcids">dbServerOcids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.diagnosticsDataCollectionOptions">diagnosticsDataCollectionOptions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList">DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.diskRedundancy">diskRedundancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dnsListenerIp">dnsListenerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.giVersion">giVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostnamePrefix">hostnamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.licenseType">licenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.localBackupEnabled">localBackupEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.memorySizeGb">memorySizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.ociUrl">ociUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocpuCount">ocpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanDns">scanDns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanDnsRecordId">scanDnsRecordId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanIpIds">scanIpIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanListenerPortTcpSsl">scanListenerPortTcpSsl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.sparseDiskgroupEnabled">sparseDiskgroupEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.sshPublicKeys">sshPublicKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.storageSizeGb">storageSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.systemVersion">systemVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.timeZone">timeZone</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList">DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterProperties">DataGoogleOracleDatabaseCloudVmClusterProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

---

##### `dataStorageSizeTb`<sup>Required</sup> <a name="dataStorageSizeTb" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dataStorageSizeTb"></a>

```typescript
public readonly dataStorageSizeTb: number;
```

- *Type:* number

---

##### `dbNodeStorageSizeGb`<sup>Required</sup> <a name="dbNodeStorageSizeGb" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbNodeStorageSizeGb"></a>

```typescript
public readonly dbNodeStorageSizeGb: number;
```

- *Type:* number

---

##### `dbServerOcids`<sup>Required</sup> <a name="dbServerOcids" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbServerOcids"></a>

```typescript
public readonly dbServerOcids: string[];
```

- *Type:* string[]

---

##### `diagnosticsDataCollectionOptions`<sup>Required</sup> <a name="diagnosticsDataCollectionOptions" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.diagnosticsDataCollectionOptions"></a>

```typescript
public readonly diagnosticsDataCollectionOptions: DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList">DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList</a>

---

##### `diskRedundancy`<sup>Required</sup> <a name="diskRedundancy" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.diskRedundancy"></a>

```typescript
public readonly diskRedundancy: string;
```

- *Type:* string

---

##### `dnsListenerIp`<sup>Required</sup> <a name="dnsListenerIp" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dnsListenerIp"></a>

```typescript
public readonly dnsListenerIp: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `giVersion`<sup>Required</sup> <a name="giVersion" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.giVersion"></a>

```typescript
public readonly giVersion: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `hostnamePrefix`<sup>Required</sup> <a name="hostnamePrefix" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostnamePrefix"></a>

```typescript
public readonly hostnamePrefix: string;
```

- *Type:* string

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

---

##### `localBackupEnabled`<sup>Required</sup> <a name="localBackupEnabled" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.localBackupEnabled"></a>

```typescript
public readonly localBackupEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `memorySizeGb`<sup>Required</sup> <a name="memorySizeGb" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.memorySizeGb"></a>

```typescript
public readonly memorySizeGb: number;
```

- *Type:* number

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ociUrl`<sup>Required</sup> <a name="ociUrl" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.ociUrl"></a>

```typescript
public readonly ociUrl: string;
```

- *Type:* string

---

##### `ocpuCount`<sup>Required</sup> <a name="ocpuCount" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocpuCount"></a>

```typescript
public readonly ocpuCount: number;
```

- *Type:* number

---

##### `scanDns`<sup>Required</sup> <a name="scanDns" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanDns"></a>

```typescript
public readonly scanDns: string;
```

- *Type:* string

---

##### `scanDnsRecordId`<sup>Required</sup> <a name="scanDnsRecordId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanDnsRecordId"></a>

```typescript
public readonly scanDnsRecordId: string;
```

- *Type:* string

---

##### `scanIpIds`<sup>Required</sup> <a name="scanIpIds" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanIpIds"></a>

```typescript
public readonly scanIpIds: string[];
```

- *Type:* string[]

---

##### `scanListenerPortTcp`<sup>Required</sup> <a name="scanListenerPortTcp" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanListenerPortTcp"></a>

```typescript
public readonly scanListenerPortTcp: number;
```

- *Type:* number

---

##### `scanListenerPortTcpSsl`<sup>Required</sup> <a name="scanListenerPortTcpSsl" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanListenerPortTcpSsl"></a>

```typescript
public readonly scanListenerPortTcpSsl: number;
```

- *Type:* number

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `sparseDiskgroupEnabled`<sup>Required</sup> <a name="sparseDiskgroupEnabled" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.sparseDiskgroupEnabled"></a>

```typescript
public readonly sparseDiskgroupEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.sshPublicKeys"></a>

```typescript
public readonly sshPublicKeys: string[];
```

- *Type:* string[]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `storageSizeGb`<sup>Required</sup> <a name="storageSizeGb" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.storageSizeGb"></a>

```typescript
public readonly storageSizeGb: number;
```

- *Type:* number

---

##### `systemVersion`<sup>Required</sup> <a name="systemVersion" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.systemVersion"></a>

```typescript
public readonly systemVersion: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList">DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleOracleDatabaseCloudVmClusterProperties;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterProperties">DataGoogleOracleDatabaseCloudVmClusterProperties</a>

---


### DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList <a name="DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudVmCluster } from '@cdktf/provider-google'

new dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList.get"></a>

```typescript
public get(index: number): DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference <a name="DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudVmCluster } from '@cdktf/provider-google'

new dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZone">DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZone</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZone;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmCluster.DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZone">DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZone</a>

---



