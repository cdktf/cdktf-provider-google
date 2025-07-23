# `dataGoogleOracleDatabaseCloudVmClusters` Submodule <a name="`dataGoogleOracleDatabaseCloudVmClusters` Submodule" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseCloudVmClusters <a name="DataGoogleOracleDatabaseCloudVmClusters" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/oracle_database_cloud_vm_clusters google_oracle_database_cloud_vm_clusters}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudVmClusters } from '@cdktf/provider-google'

new dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters(scope: Construct, id: string, config: DataGoogleOracleDatabaseCloudVmClustersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig">DataGoogleOracleDatabaseCloudVmClustersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig">DataGoogleOracleDatabaseCloudVmClustersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleOracleDatabaseCloudVmClusters resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.isConstruct"></a>

```typescript
import { dataGoogleOracleDatabaseCloudVmClusters } from '@cdktf/provider-google'

dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.isTerraformElement"></a>

```typescript
import { dataGoogleOracleDatabaseCloudVmClusters } from '@cdktf/provider-google'

dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.isTerraformDataSource"></a>

```typescript
import { dataGoogleOracleDatabaseCloudVmClusters } from '@cdktf/provider-google'

dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.generateConfigForImport"></a>

```typescript
import { dataGoogleOracleDatabaseCloudVmClusters } from '@cdktf/provider-google'

dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleOracleDatabaseCloudVmClusters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleOracleDatabaseCloudVmClusters to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleOracleDatabaseCloudVmClusters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/oracle_database_cloud_vm_clusters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseCloudVmClusters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.cloudVmClusters">cloudVmClusters</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `cloudVmClusters`<sup>Required</sup> <a name="cloudVmClusters" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.cloudVmClusters"></a>

```typescript
public readonly cloudVmClusters: DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseCloudVmClustersCloudVmClusters <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClusters" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClusters.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudVmClusters } from '@cdktf/provider-google'

const dataGoogleOracleDatabaseCloudVmClustersCloudVmClusters: dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClusters = { ... }
```


### DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersProperties <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersProperties" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersProperties.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudVmClusters } from '@cdktf/provider-google'

const dataGoogleOracleDatabaseCloudVmClustersCloudVmClustersProperties: dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersProperties = { ... }
```


### DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptions <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptions" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptions.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudVmClusters } from '@cdktf/provider-google'

const dataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptions: dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptions = { ... }
```


### DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZone <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZone" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZone.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudVmClusters } from '@cdktf/provider-google'

const dataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZone: dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZone = { ... }
```


### DataGoogleOracleDatabaseCloudVmClustersConfig <a name="DataGoogleOracleDatabaseCloudVmClustersConfig" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudVmClusters } from '@cdktf/provider-google'

const dataGoogleOracleDatabaseCloudVmClustersConfig: dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.location">location</a></code> | <code>string</code> | location. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/oracle_database_cloud_vm_clusters#id DataGoogleOracleDatabaseCloudVmClusters#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.project">project</a></code> | <code>string</code> | The ID of the project in which the dataset is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/oracle_database_cloud_vm_clusters#location DataGoogleOracleDatabaseCloudVmClusters#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/oracle_database_cloud_vm_clusters#id DataGoogleOracleDatabaseCloudVmClusters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the dataset is located.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/oracle_database_cloud_vm_clusters#project DataGoogleOracleDatabaseCloudVmClusters#project}

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudVmClusters } from '@cdktf/provider-google'

new dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.get"></a>

```typescript
public get(index: number): DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudVmClusters } from '@cdktf/provider-google'

new dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.backupSubnetCidr">backupSubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.cloudVmClusterId">cloudVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.deletionProtection">deletionProtection</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.exadataInfrastructure">exadataInfrastructure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.gcpOracleZone">gcpOracleZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClusters">DataGoogleOracleDatabaseCloudVmClustersCloudVmClusters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupSubnetCidr`<sup>Required</sup> <a name="backupSubnetCidr" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.backupSubnetCidr"></a>

```typescript
public readonly backupSubnetCidr: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `cloudVmClusterId`<sup>Required</sup> <a name="cloudVmClusterId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.cloudVmClusterId"></a>

```typescript
public readonly cloudVmClusterId: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `exadataInfrastructure`<sup>Required</sup> <a name="exadataInfrastructure" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.exadataInfrastructure"></a>

```typescript
public readonly exadataInfrastructure: string;
```

- *Type:* string

---

##### `gcpOracleZone`<sup>Required</sup> <a name="gcpOracleZone" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.gcpOracleZone"></a>

```typescript
public readonly gcpOracleZone: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.properties"></a>

```typescript
public readonly properties: DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleOracleDatabaseCloudVmClustersCloudVmClusters;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClusters">DataGoogleOracleDatabaseCloudVmClustersCloudVmClusters</a>

---


### DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudVmClusters } from '@cdktf/provider-google'

new dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.get"></a>

```typescript
public get(index: number): DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudVmClusters } from '@cdktf/provider-google'

new dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabled">diagnosticsEventsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.healthMonitoringEnabled">healthMonitoringEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.incidentLogsEnabled">incidentLogsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptions">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diagnosticsEventsEnabled`<sup>Required</sup> <a name="diagnosticsEventsEnabled" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabled"></a>

```typescript
public readonly diagnosticsEventsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `healthMonitoringEnabled`<sup>Required</sup> <a name="healthMonitoringEnabled" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.healthMonitoringEnabled"></a>

```typescript
public readonly healthMonitoringEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `incidentLogsEnabled`<sup>Required</sup> <a name="incidentLogsEnabled" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.incidentLogsEnabled"></a>

```typescript
public readonly incidentLogsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptions;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptions">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptions</a>

---


### DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudVmClusters } from '@cdktf/provider-google'

new dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.get"></a>

```typescript
public get(index: number): DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudVmClusters } from '@cdktf/provider-google'

new dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.dataStorageSizeTb">dataStorageSizeTb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.dbNodeStorageSizeGb">dbNodeStorageSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.dbServerOcids">dbServerOcids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.diagnosticsDataCollectionOptions">diagnosticsDataCollectionOptions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.diskRedundancy">diskRedundancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.dnsListenerIp">dnsListenerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.giVersion">giVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.hostnamePrefix">hostnamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.licenseType">licenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.localBackupEnabled">localBackupEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.memorySizeGb">memorySizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.ociUrl">ociUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.ocpuCount">ocpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.scanDns">scanDns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.scanDnsRecordId">scanDnsRecordId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.scanIpIds">scanIpIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.scanListenerPortTcpSsl">scanListenerPortTcpSsl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.sparseDiskgroupEnabled">sparseDiskgroupEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.sshPublicKeys">sshPublicKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.storageSizeGb">storageSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.systemVersion">systemVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.timeZone">timeZone</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersProperties">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

---

##### `dataStorageSizeTb`<sup>Required</sup> <a name="dataStorageSizeTb" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.dataStorageSizeTb"></a>

```typescript
public readonly dataStorageSizeTb: number;
```

- *Type:* number

---

##### `dbNodeStorageSizeGb`<sup>Required</sup> <a name="dbNodeStorageSizeGb" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.dbNodeStorageSizeGb"></a>

```typescript
public readonly dbNodeStorageSizeGb: number;
```

- *Type:* number

---

##### `dbServerOcids`<sup>Required</sup> <a name="dbServerOcids" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.dbServerOcids"></a>

```typescript
public readonly dbServerOcids: string[];
```

- *Type:* string[]

---

##### `diagnosticsDataCollectionOptions`<sup>Required</sup> <a name="diagnosticsDataCollectionOptions" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.diagnosticsDataCollectionOptions"></a>

```typescript
public readonly diagnosticsDataCollectionOptions: DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList</a>

---

##### `diskRedundancy`<sup>Required</sup> <a name="diskRedundancy" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.diskRedundancy"></a>

```typescript
public readonly diskRedundancy: string;
```

- *Type:* string

---

##### `dnsListenerIp`<sup>Required</sup> <a name="dnsListenerIp" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.dnsListenerIp"></a>

```typescript
public readonly dnsListenerIp: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `giVersion`<sup>Required</sup> <a name="giVersion" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.giVersion"></a>

```typescript
public readonly giVersion: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `hostnamePrefix`<sup>Required</sup> <a name="hostnamePrefix" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.hostnamePrefix"></a>

```typescript
public readonly hostnamePrefix: string;
```

- *Type:* string

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

---

##### `localBackupEnabled`<sup>Required</sup> <a name="localBackupEnabled" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.localBackupEnabled"></a>

```typescript
public readonly localBackupEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `memorySizeGb`<sup>Required</sup> <a name="memorySizeGb" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.memorySizeGb"></a>

```typescript
public readonly memorySizeGb: number;
```

- *Type:* number

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ociUrl`<sup>Required</sup> <a name="ociUrl" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.ociUrl"></a>

```typescript
public readonly ociUrl: string;
```

- *Type:* string

---

##### `ocpuCount`<sup>Required</sup> <a name="ocpuCount" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.ocpuCount"></a>

```typescript
public readonly ocpuCount: number;
```

- *Type:* number

---

##### `scanDns`<sup>Required</sup> <a name="scanDns" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.scanDns"></a>

```typescript
public readonly scanDns: string;
```

- *Type:* string

---

##### `scanDnsRecordId`<sup>Required</sup> <a name="scanDnsRecordId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.scanDnsRecordId"></a>

```typescript
public readonly scanDnsRecordId: string;
```

- *Type:* string

---

##### `scanIpIds`<sup>Required</sup> <a name="scanIpIds" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.scanIpIds"></a>

```typescript
public readonly scanIpIds: string[];
```

- *Type:* string[]

---

##### `scanListenerPortTcp`<sup>Required</sup> <a name="scanListenerPortTcp" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.scanListenerPortTcp"></a>

```typescript
public readonly scanListenerPortTcp: number;
```

- *Type:* number

---

##### `scanListenerPortTcpSsl`<sup>Required</sup> <a name="scanListenerPortTcpSsl" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.scanListenerPortTcpSsl"></a>

```typescript
public readonly scanListenerPortTcpSsl: number;
```

- *Type:* number

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `sparseDiskgroupEnabled`<sup>Required</sup> <a name="sparseDiskgroupEnabled" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.sparseDiskgroupEnabled"></a>

```typescript
public readonly sparseDiskgroupEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.sshPublicKeys"></a>

```typescript
public readonly sshPublicKeys: string[];
```

- *Type:* string[]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `storageSizeGb`<sup>Required</sup> <a name="storageSizeGb" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.storageSizeGb"></a>

```typescript
public readonly storageSizeGb: number;
```

- *Type:* number

---

##### `systemVersion`<sup>Required</sup> <a name="systemVersion" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.systemVersion"></a>

```typescript
public readonly systemVersion: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersProperties;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersProperties">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersProperties</a>

---


### DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudVmClusters } from '@cdktf/provider-google'

new dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.get"></a>

```typescript
public get(index: number): DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudVmClusters } from '@cdktf/provider-google'

new dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZone">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZone</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZone;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZone">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZone</a>

---



