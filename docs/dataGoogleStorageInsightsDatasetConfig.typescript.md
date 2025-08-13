# `dataGoogleStorageInsightsDatasetConfig` Submodule <a name="`dataGoogleStorageInsightsDatasetConfig` Submodule" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageInsightsDatasetConfig <a name="DataGoogleStorageInsightsDatasetConfig" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/storage_insights_dataset_config google_storage_insights_dataset_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.Initializer"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

new dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig(scope: Construct, id: string, config: DataGoogleStorageInsightsDatasetConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig">DataGoogleStorageInsightsDatasetConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig">DataGoogleStorageInsightsDatasetConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleStorageInsightsDatasetConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.isConstruct"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.isTerraformElement"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.isTerraformDataSource"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.generateConfigForImport"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleStorageInsightsDatasetConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleStorageInsightsDatasetConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleStorageInsightsDatasetConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/storage_insights_dataset_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageInsightsDatasetConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.datasetConfigState">datasetConfigState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.excludeCloudStorageBuckets">excludeCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.excludeCloudStorageLocations">excludeCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList">DataGoogleStorageInsightsDatasetConfigIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.includeCloudStorageBuckets">includeCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.includeCloudStorageLocations">includeCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.includeNewlyCreatedBuckets">includeNewlyCreatedBuckets</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.link">link</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList">DataGoogleStorageInsightsDatasetConfigLinkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.linkDataset">linkDataset</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.organizationNumber">organizationNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.organizationScope">organizationScope</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.retentionPeriodDays">retentionPeriodDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.sourceFolders">sourceFolders</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList">DataGoogleStorageInsightsDatasetConfigSourceFoldersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.sourceProjects">sourceProjects</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList">DataGoogleStorageInsightsDatasetConfigSourceProjectsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.datasetConfigIdInput">datasetConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.datasetConfigId">datasetConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `datasetConfigState`<sup>Required</sup> <a name="datasetConfigState" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.datasetConfigState"></a>

```typescript
public readonly datasetConfigState: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `excludeCloudStorageBuckets`<sup>Required</sup> <a name="excludeCloudStorageBuckets" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.excludeCloudStorageBuckets"></a>

```typescript
public readonly excludeCloudStorageBuckets: DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList</a>

---

##### `excludeCloudStorageLocations`<sup>Required</sup> <a name="excludeCloudStorageLocations" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.excludeCloudStorageLocations"></a>

```typescript
public readonly excludeCloudStorageLocations: DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.identity"></a>

```typescript
public readonly identity: DataGoogleStorageInsightsDatasetConfigIdentityList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList">DataGoogleStorageInsightsDatasetConfigIdentityList</a>

---

##### `includeCloudStorageBuckets`<sup>Required</sup> <a name="includeCloudStorageBuckets" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.includeCloudStorageBuckets"></a>

```typescript
public readonly includeCloudStorageBuckets: DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList</a>

---

##### `includeCloudStorageLocations`<sup>Required</sup> <a name="includeCloudStorageLocations" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.includeCloudStorageLocations"></a>

```typescript
public readonly includeCloudStorageLocations: DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList</a>

---

##### `includeNewlyCreatedBuckets`<sup>Required</sup> <a name="includeNewlyCreatedBuckets" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.includeNewlyCreatedBuckets"></a>

```typescript
public readonly includeNewlyCreatedBuckets: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.link"></a>

```typescript
public readonly link: DataGoogleStorageInsightsDatasetConfigLinkList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList">DataGoogleStorageInsightsDatasetConfigLinkList</a>

---

##### `linkDataset`<sup>Required</sup> <a name="linkDataset" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.linkDataset"></a>

```typescript
public readonly linkDataset: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `organizationNumber`<sup>Required</sup> <a name="organizationNumber" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.organizationNumber"></a>

```typescript
public readonly organizationNumber: string;
```

- *Type:* string

---

##### `organizationScope`<sup>Required</sup> <a name="organizationScope" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.organizationScope"></a>

```typescript
public readonly organizationScope: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `retentionPeriodDays`<sup>Required</sup> <a name="retentionPeriodDays" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.retentionPeriodDays"></a>

```typescript
public readonly retentionPeriodDays: number;
```

- *Type:* number

---

##### `sourceFolders`<sup>Required</sup> <a name="sourceFolders" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.sourceFolders"></a>

```typescript
public readonly sourceFolders: DataGoogleStorageInsightsDatasetConfigSourceFoldersList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList">DataGoogleStorageInsightsDatasetConfigSourceFoldersList</a>

---

##### `sourceProjects`<sup>Required</sup> <a name="sourceProjects" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.sourceProjects"></a>

```typescript
public readonly sourceProjects: DataGoogleStorageInsightsDatasetConfigSourceProjectsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList">DataGoogleStorageInsightsDatasetConfigSourceProjectsList</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `datasetConfigIdInput`<sup>Optional</sup> <a name="datasetConfigIdInput" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.datasetConfigIdInput"></a>

```typescript
public readonly datasetConfigIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `datasetConfigId`<sup>Required</sup> <a name="datasetConfigId" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.datasetConfigId"></a>

```typescript
public readonly datasetConfigId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageInsightsDatasetConfigConfig <a name="DataGoogleStorageInsightsDatasetConfigConfig" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.Initializer"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

const dataGoogleStorageInsightsDatasetConfigConfig: dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.datasetConfigId">datasetConfigId</a></code> | <code>string</code> | The user-defined ID of the DatasetConfig. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.location">location</a></code> | <code>string</code> | The location of the DatasetConfig. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/storage_insights_dataset_config#id DataGoogleStorageInsightsDatasetConfig#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/storage_insights_dataset_config#project DataGoogleStorageInsightsDatasetConfig#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datasetConfigId`<sup>Required</sup> <a name="datasetConfigId" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.datasetConfigId"></a>

```typescript
public readonly datasetConfigId: string;
```

- *Type:* string

The user-defined ID of the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/storage_insights_dataset_config#dataset_config_id DataGoogleStorageInsightsDatasetConfig#dataset_config_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/storage_insights_dataset_config#location DataGoogleStorageInsightsDatasetConfig#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/storage_insights_dataset_config#id DataGoogleStorageInsightsDatasetConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/storage_insights_dataset_config#project DataGoogleStorageInsightsDatasetConfig#project}.

---

### DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets <a name="DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets.Initializer"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

const dataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets: dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets = { ... }
```


### DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets <a name="DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.Initializer"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

const dataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets: dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets = { ... }
```


### DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations <a name="DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations.Initializer"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

const dataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations: dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations = { ... }
```


### DataGoogleStorageInsightsDatasetConfigIdentity <a name="DataGoogleStorageInsightsDatasetConfigIdentity" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentity.Initializer"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

const dataGoogleStorageInsightsDatasetConfigIdentity: dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentity = { ... }
```


### DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets <a name="DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets.Initializer"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

const dataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets: dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets = { ... }
```


### DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets <a name="DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.Initializer"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

const dataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets: dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets = { ... }
```


### DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations <a name="DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations.Initializer"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

const dataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations: dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations = { ... }
```


### DataGoogleStorageInsightsDatasetConfigLink <a name="DataGoogleStorageInsightsDatasetConfigLink" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLink.Initializer"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

const dataGoogleStorageInsightsDatasetConfigLink: dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLink = { ... }
```


### DataGoogleStorageInsightsDatasetConfigSourceFolders <a name="DataGoogleStorageInsightsDatasetConfigSourceFolders" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFolders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFolders.Initializer"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

const dataGoogleStorageInsightsDatasetConfigSourceFolders: dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFolders = { ... }
```


### DataGoogleStorageInsightsDatasetConfigSourceProjects <a name="DataGoogleStorageInsightsDatasetConfigSourceProjects" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjects.Initializer"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

const dataGoogleStorageInsightsDatasetConfigSourceProjects: dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjects = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList <a name="DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

new dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.get"></a>

```typescript
public get(index: number): DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference <a name="DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

new dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex">bucketPrefixRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `bucketPrefixRegex`<sup>Required</sup> <a name="bucketPrefixRegex" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex"></a>

```typescript
public readonly bucketPrefixRegex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>

---


### DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList <a name="DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.Initializer"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

new dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.get"></a>

```typescript
public get(index: number): DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference <a name="DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

new dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets">cloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudStorageBuckets`<sup>Required</sup> <a name="cloudStorageBuckets" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets"></a>

```typescript
public readonly cloudStorageBuckets: DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a>

---


### DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList <a name="DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.Initializer"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

new dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.get"></a>

```typescript
public get(index: number): DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference <a name="DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

new dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locations">locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a>

---


### DataGoogleStorageInsightsDatasetConfigIdentityList <a name="DataGoogleStorageInsightsDatasetConfigIdentityList" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.Initializer"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

new dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.get"></a>

```typescript
public get(index: number): DataGoogleStorageInsightsDatasetConfigIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageInsightsDatasetConfigIdentityOutputReference <a name="DataGoogleStorageInsightsDatasetConfigIdentityOutputReference" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

new dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentity">DataGoogleStorageInsightsDatasetConfigIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageInsightsDatasetConfigIdentity;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentity">DataGoogleStorageInsightsDatasetConfigIdentity</a>

---


### DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList <a name="DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

new dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.get"></a>

```typescript
public get(index: number): DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference <a name="DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

new dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex">bucketPrefixRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `bucketPrefixRegex`<sup>Required</sup> <a name="bucketPrefixRegex" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex"></a>

```typescript
public readonly bucketPrefixRegex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>

---


### DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList <a name="DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.Initializer"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

new dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.get"></a>

```typescript
public get(index: number): DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference <a name="DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

new dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets">cloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudStorageBuckets`<sup>Required</sup> <a name="cloudStorageBuckets" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets"></a>

```typescript
public readonly cloudStorageBuckets: DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a>

---


### DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList <a name="DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.Initializer"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

new dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.get"></a>

```typescript
public get(index: number): DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference <a name="DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

new dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locations">locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a>

---


### DataGoogleStorageInsightsDatasetConfigLinkList <a name="DataGoogleStorageInsightsDatasetConfigLinkList" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.Initializer"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

new dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.get"></a>

```typescript
public get(index: number): DataGoogleStorageInsightsDatasetConfigLinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageInsightsDatasetConfigLinkOutputReference <a name="DataGoogleStorageInsightsDatasetConfigLinkOutputReference" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

new dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.property.dataset">dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.property.linked">linked</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLink">DataGoogleStorageInsightsDatasetConfigLink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

---

##### `linked`<sup>Required</sup> <a name="linked" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.property.linked"></a>

```typescript
public readonly linked: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageInsightsDatasetConfigLink;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLink">DataGoogleStorageInsightsDatasetConfigLink</a>

---


### DataGoogleStorageInsightsDatasetConfigSourceFoldersList <a name="DataGoogleStorageInsightsDatasetConfigSourceFoldersList" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.Initializer"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

new dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.get"></a>

```typescript
public get(index: number): DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference <a name="DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

new dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbers">folderNumbers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFolders">DataGoogleStorageInsightsDatasetConfigSourceFolders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `folderNumbers`<sup>Required</sup> <a name="folderNumbers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbers"></a>

```typescript
public readonly folderNumbers: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageInsightsDatasetConfigSourceFolders;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFolders">DataGoogleStorageInsightsDatasetConfigSourceFolders</a>

---


### DataGoogleStorageInsightsDatasetConfigSourceProjectsList <a name="DataGoogleStorageInsightsDatasetConfigSourceProjectsList" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.Initializer"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

new dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.get"></a>

```typescript
public get(index: number): DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference <a name="DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageInsightsDatasetConfig } from '@cdktf/provider-google'

new dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbers">projectNumbers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjects">DataGoogleStorageInsightsDatasetConfigSourceProjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `projectNumbers`<sup>Required</sup> <a name="projectNumbers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbers"></a>

```typescript
public readonly projectNumbers: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageInsightsDatasetConfigSourceProjects;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjects">DataGoogleStorageInsightsDatasetConfigSourceProjects</a>

---



