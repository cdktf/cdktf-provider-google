# `dataGoogleDataprocMetastoreService` Submodule <a name="`dataGoogleDataprocMetastoreService` Submodule" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleDataprocMetastoreService <a name="DataGoogleDataprocMetastoreService" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/dataproc_metastore_service google_dataproc_metastore_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

new dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService(scope: Construct, id: string, config: DataGoogleDataprocMetastoreServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig">DataGoogleDataprocMetastoreServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig">DataGoogleDataprocMetastoreServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleDataprocMetastoreService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.isConstruct"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.isTerraformElement"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.isTerraformDataSource"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.generateConfigForImport"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleDataprocMetastoreService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleDataprocMetastoreService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleDataprocMetastoreService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/dataproc_metastore_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleDataprocMetastoreService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.artifactGcsUri">artifactGcsUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.databaseType">databaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.deletionProtection">deletionProtection</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList">DataGoogleDataprocMetastoreServiceEncryptionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.endpointUri">endpointUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.hiveMetastoreConfig">hiveMetastoreConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList">DataGoogleDataprocMetastoreServiceMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.metadataIntegration">metadataIntegration</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList">DataGoogleDataprocMetastoreServiceMetadataIntegrationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList">DataGoogleDataprocMetastoreServiceNetworkConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.releaseChannel">releaseChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.scalingConfig">scalingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList">DataGoogleDataprocMetastoreServiceScalingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.scheduledBackup">scheduledBackup</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList">DataGoogleDataprocMetastoreServiceScheduledBackupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.telemetryConfig">telemetryConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList">DataGoogleDataprocMetastoreServiceTelemetryConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.tier">tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.serviceIdInput">serviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `artifactGcsUri`<sup>Required</sup> <a name="artifactGcsUri" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.artifactGcsUri"></a>

```typescript
public readonly artifactGcsUri: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `databaseType`<sup>Required</sup> <a name="databaseType" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.databaseType"></a>

```typescript
public readonly databaseType: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: DataGoogleDataprocMetastoreServiceEncryptionConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList">DataGoogleDataprocMetastoreServiceEncryptionConfigList</a>

---

##### `endpointUri`<sup>Required</sup> <a name="endpointUri" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.endpointUri"></a>

```typescript
public readonly endpointUri: string;
```

- *Type:* string

---

##### `hiveMetastoreConfig`<sup>Required</sup> <a name="hiveMetastoreConfig" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.hiveMetastoreConfig"></a>

```typescript
public readonly hiveMetastoreConfig: DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: DataGoogleDataprocMetastoreServiceMaintenanceWindowList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList">DataGoogleDataprocMetastoreServiceMaintenanceWindowList</a>

---

##### `metadataIntegration`<sup>Required</sup> <a name="metadataIntegration" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.metadataIntegration"></a>

```typescript
public readonly metadataIntegration: DataGoogleDataprocMetastoreServiceMetadataIntegrationList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList">DataGoogleDataprocMetastoreServiceMetadataIntegrationList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.networkConfig"></a>

```typescript
public readonly networkConfig: DataGoogleDataprocMetastoreServiceNetworkConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList">DataGoogleDataprocMetastoreServiceNetworkConfigList</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `releaseChannel`<sup>Required</sup> <a name="releaseChannel" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.releaseChannel"></a>

```typescript
public readonly releaseChannel: string;
```

- *Type:* string

---

##### `scalingConfig`<sup>Required</sup> <a name="scalingConfig" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.scalingConfig"></a>

```typescript
public readonly scalingConfig: DataGoogleDataprocMetastoreServiceScalingConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList">DataGoogleDataprocMetastoreServiceScalingConfigList</a>

---

##### `scheduledBackup`<sup>Required</sup> <a name="scheduledBackup" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.scheduledBackup"></a>

```typescript
public readonly scheduledBackup: DataGoogleDataprocMetastoreServiceScheduledBackupList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList">DataGoogleDataprocMetastoreServiceScheduledBackupList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `telemetryConfig`<sup>Required</sup> <a name="telemetryConfig" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.telemetryConfig"></a>

```typescript
public readonly telemetryConfig: DataGoogleDataprocMetastoreServiceTelemetryConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList">DataGoogleDataprocMetastoreServiceTelemetryConfigList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.serviceIdInput"></a>

```typescript
public readonly serviceIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleDataprocMetastoreServiceConfig <a name="DataGoogleDataprocMetastoreServiceConfig" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

const dataGoogleDataprocMetastoreServiceConfig: dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.location">location</a></code> | <code>string</code> | The location where the metastore service should reside. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.serviceId">serviceId</a></code> | <code>string</code> | The ID of the metastore service. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/dataproc_metastore_service#id DataGoogleDataprocMetastoreService#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/dataproc_metastore_service#project DataGoogleDataprocMetastoreService#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location where the metastore service should reside. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/dataproc_metastore_service#location DataGoogleDataprocMetastoreService#location}

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The ID of the metastore service.

The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/dataproc_metastore_service#service_id DataGoogleDataprocMetastoreService#service_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/dataproc_metastore_service#id DataGoogleDataprocMetastoreService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/dataproc_metastore_service#project DataGoogleDataprocMetastoreService#project}.

---

### DataGoogleDataprocMetastoreServiceEncryptionConfig <a name="DataGoogleDataprocMetastoreServiceEncryptionConfig" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfig.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

const dataGoogleDataprocMetastoreServiceEncryptionConfig: dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfig = { ... }
```


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfig <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfig" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfig.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

const dataGoogleDataprocMetastoreServiceHiveMetastoreConfig: dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfig = { ... }
```


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

const dataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions: dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions = { ... }
```


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

const dataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig: dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig = { ... }
```


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

const dataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab: dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab = { ... }
```


### DataGoogleDataprocMetastoreServiceMaintenanceWindow <a name="DataGoogleDataprocMetastoreServiceMaintenanceWindow" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindow.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

const dataGoogleDataprocMetastoreServiceMaintenanceWindow: dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindow = { ... }
```


### DataGoogleDataprocMetastoreServiceMetadataIntegration <a name="DataGoogleDataprocMetastoreServiceMetadataIntegration" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegration.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

const dataGoogleDataprocMetastoreServiceMetadataIntegration: dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegration = { ... }
```


### DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig <a name="DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

const dataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig: dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig = { ... }
```


### DataGoogleDataprocMetastoreServiceNetworkConfig <a name="DataGoogleDataprocMetastoreServiceNetworkConfig" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfig.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

const dataGoogleDataprocMetastoreServiceNetworkConfig: dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfig = { ... }
```


### DataGoogleDataprocMetastoreServiceNetworkConfigConsumers <a name="DataGoogleDataprocMetastoreServiceNetworkConfigConsumers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumers.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

const dataGoogleDataprocMetastoreServiceNetworkConfigConsumers: dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumers = { ... }
```


### DataGoogleDataprocMetastoreServiceScalingConfig <a name="DataGoogleDataprocMetastoreServiceScalingConfig" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfig.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

const dataGoogleDataprocMetastoreServiceScalingConfig: dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfig = { ... }
```


### DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig <a name="DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

const dataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig: dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig = { ... }
```


### DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig <a name="DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

const dataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig: dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig = { ... }
```


### DataGoogleDataprocMetastoreServiceScheduledBackup <a name="DataGoogleDataprocMetastoreServiceScheduledBackup" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackup.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

const dataGoogleDataprocMetastoreServiceScheduledBackup: dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackup = { ... }
```


### DataGoogleDataprocMetastoreServiceTelemetryConfig <a name="DataGoogleDataprocMetastoreServiceTelemetryConfig" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfig.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

const dataGoogleDataprocMetastoreServiceTelemetryConfig: dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleDataprocMetastoreServiceEncryptionConfigList <a name="DataGoogleDataprocMetastoreServiceEncryptionConfigList" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

new dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.get"></a>

```typescript
public get(index: number): DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference <a name="DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

new dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfig">DataGoogleDataprocMetastoreServiceEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDataprocMetastoreServiceEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfig">DataGoogleDataprocMetastoreServiceEncryptionConfig</a>

---


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

new dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.get"></a>

```typescript
public get(index: number): DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

new dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.configOverrides">configOverrides</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configOverrides`<sup>Required</sup> <a name="configOverrides" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.configOverrides"></a>

```typescript
public readonly configOverrides: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>

---


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

new dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.get"></a>

```typescript
public get(index: number): DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

new dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.cloudSecret">cloudSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudSecret`<sup>Required</sup> <a name="cloudSecret" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.cloudSecret"></a>

```typescript
public readonly cloudSecret: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a>

---


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

new dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.get"></a>

```typescript
public get(index: number): DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

new dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.keytab">keytab</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.krb5ConfigGcsUri">krb5ConfigGcsUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keytab`<sup>Required</sup> <a name="keytab" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.keytab"></a>

```typescript
public readonly keytab: DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList</a>

---

##### `krb5ConfigGcsUri`<sup>Required</sup> <a name="krb5ConfigGcsUri" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.krb5ConfigGcsUri"></a>

```typescript
public readonly krb5ConfigGcsUri: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a>

---


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

new dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.get"></a>

```typescript
public get(index: number): DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

new dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.auxiliaryVersions">auxiliaryVersions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.configOverrides">configOverrides</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.endpointProtocol">endpointProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.kerberosConfig">kerberosConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfig">DataGoogleDataprocMetastoreServiceHiveMetastoreConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auxiliaryVersions`<sup>Required</sup> <a name="auxiliaryVersions" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.auxiliaryVersions"></a>

```typescript
public readonly auxiliaryVersions: DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList</a>

---

##### `configOverrides`<sup>Required</sup> <a name="configOverrides" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.configOverrides"></a>

```typescript
public readonly configOverrides: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `endpointProtocol`<sup>Required</sup> <a name="endpointProtocol" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.endpointProtocol"></a>

```typescript
public readonly endpointProtocol: string;
```

- *Type:* string

---

##### `kerberosConfig`<sup>Required</sup> <a name="kerberosConfig" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.kerberosConfig"></a>

```typescript
public readonly kerberosConfig: DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDataprocMetastoreServiceHiveMetastoreConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfig">DataGoogleDataprocMetastoreServiceHiveMetastoreConfig</a>

---


### DataGoogleDataprocMetastoreServiceMaintenanceWindowList <a name="DataGoogleDataprocMetastoreServiceMaintenanceWindowList" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

new dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.get"></a>

```typescript
public get(index: number): DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference <a name="DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

new dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.hourOfDay">hourOfDay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindow">DataGoogleDataprocMetastoreServiceMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

---

##### `hourOfDay`<sup>Required</sup> <a name="hourOfDay" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.hourOfDay"></a>

```typescript
public readonly hourOfDay: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDataprocMetastoreServiceMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindow">DataGoogleDataprocMetastoreServiceMaintenanceWindow</a>

---


### DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList <a name="DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

new dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.get"></a>

```typescript
public get(index: number): DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference <a name="DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

new dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a>

---


### DataGoogleDataprocMetastoreServiceMetadataIntegrationList <a name="DataGoogleDataprocMetastoreServiceMetadataIntegrationList" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

new dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.get"></a>

```typescript
public get(index: number): DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference <a name="DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

new dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.dataCatalogConfig">dataCatalogConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList">DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegration">DataGoogleDataprocMetastoreServiceMetadataIntegration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataCatalogConfig`<sup>Required</sup> <a name="dataCatalogConfig" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.dataCatalogConfig"></a>

```typescript
public readonly dataCatalogConfig: DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList">DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDataprocMetastoreServiceMetadataIntegration;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegration">DataGoogleDataprocMetastoreServiceMetadataIntegration</a>

---


### DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList <a name="DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

new dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.get"></a>

```typescript
public get(index: number): DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference <a name="DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

new dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.endpointUri">endpointUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumers">DataGoogleDataprocMetastoreServiceNetworkConfigConsumers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointUri`<sup>Required</sup> <a name="endpointUri" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.endpointUri"></a>

```typescript
public readonly endpointUri: string;
```

- *Type:* string

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDataprocMetastoreServiceNetworkConfigConsumers;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumers">DataGoogleDataprocMetastoreServiceNetworkConfigConsumers</a>

---


### DataGoogleDataprocMetastoreServiceNetworkConfigList <a name="DataGoogleDataprocMetastoreServiceNetworkConfigList" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

new dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.get"></a>

```typescript
public get(index: number): DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference <a name="DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

new dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.consumers">consumers</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList">DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfig">DataGoogleDataprocMetastoreServiceNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consumers`<sup>Required</sup> <a name="consumers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.consumers"></a>

```typescript
public readonly consumers: DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList">DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDataprocMetastoreServiceNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfig">DataGoogleDataprocMetastoreServiceNetworkConfig</a>

---


### DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList <a name="DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

new dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.get"></a>

```typescript
public get(index: number): DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference <a name="DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

new dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.maxScalingFactor">maxScalingFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.minScalingFactor">minScalingFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig">DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxScalingFactor`<sup>Required</sup> <a name="maxScalingFactor" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.maxScalingFactor"></a>

```typescript
public readonly maxScalingFactor: number;
```

- *Type:* number

---

##### `minScalingFactor`<sup>Required</sup> <a name="minScalingFactor" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.minScalingFactor"></a>

```typescript
public readonly minScalingFactor: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig">DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig</a>

---


### DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList <a name="DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

new dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.get"></a>

```typescript
public get(index: number): DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference <a name="DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

new dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.autoscalingEnabled">autoscalingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.autoscalingFactor">autoscalingFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.limitConfig">limitConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList">DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig">DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoscalingEnabled`<sup>Required</sup> <a name="autoscalingEnabled" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.autoscalingEnabled"></a>

```typescript
public readonly autoscalingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `autoscalingFactor`<sup>Required</sup> <a name="autoscalingFactor" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.autoscalingFactor"></a>

```typescript
public readonly autoscalingFactor: number;
```

- *Type:* number

---

##### `limitConfig`<sup>Required</sup> <a name="limitConfig" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.limitConfig"></a>

```typescript
public readonly limitConfig: DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList">DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig">DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig</a>

---


### DataGoogleDataprocMetastoreServiceScalingConfigList <a name="DataGoogleDataprocMetastoreServiceScalingConfigList" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

new dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.get"></a>

```typescript
public get(index: number): DataGoogleDataprocMetastoreServiceScalingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDataprocMetastoreServiceScalingConfigOutputReference <a name="DataGoogleDataprocMetastoreServiceScalingConfigOutputReference" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

new dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.property.autoscalingConfig">autoscalingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList">DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.property.instanceSize">instanceSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.property.scalingFactor">scalingFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfig">DataGoogleDataprocMetastoreServiceScalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoscalingConfig`<sup>Required</sup> <a name="autoscalingConfig" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.property.autoscalingConfig"></a>

```typescript
public readonly autoscalingConfig: DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList">DataGoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList</a>

---

##### `instanceSize`<sup>Required</sup> <a name="instanceSize" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.property.instanceSize"></a>

```typescript
public readonly instanceSize: string;
```

- *Type:* string

---

##### `scalingFactor`<sup>Required</sup> <a name="scalingFactor" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.property.scalingFactor"></a>

```typescript
public readonly scalingFactor: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDataprocMetastoreServiceScalingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScalingConfig">DataGoogleDataprocMetastoreServiceScalingConfig</a>

---


### DataGoogleDataprocMetastoreServiceScheduledBackupList <a name="DataGoogleDataprocMetastoreServiceScheduledBackupList" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

new dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.get"></a>

```typescript
public get(index: number): DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference <a name="DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

new dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.backupLocation">backupLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.cronSchedule">cronSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackup">DataGoogleDataprocMetastoreServiceScheduledBackup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupLocation`<sup>Required</sup> <a name="backupLocation" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.backupLocation"></a>

```typescript
public readonly backupLocation: string;
```

- *Type:* string

---

##### `cronSchedule`<sup>Required</sup> <a name="cronSchedule" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.cronSchedule"></a>

```typescript
public readonly cronSchedule: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDataprocMetastoreServiceScheduledBackup;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceScheduledBackup">DataGoogleDataprocMetastoreServiceScheduledBackup</a>

---


### DataGoogleDataprocMetastoreServiceTelemetryConfigList <a name="DataGoogleDataprocMetastoreServiceTelemetryConfigList" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

new dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.get"></a>

```typescript
public get(index: number): DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference <a name="DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleDataprocMetastoreService } from '@cdktf/provider-google'

new dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.logFormat">logFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfig">DataGoogleDataprocMetastoreServiceTelemetryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logFormat`<sup>Required</sup> <a name="logFormat" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDataprocMetastoreServiceTelemetryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfig">DataGoogleDataprocMetastoreServiceTelemetryConfig</a>

---



