# `dataGoogleBigqueryDataset` Submodule <a name="`dataGoogleBigqueryDataset` Submodule" id="@cdktf/provider-google.dataGoogleBigqueryDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBigqueryDataset <a name="DataGoogleBigqueryDataset" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/data-sources/bigquery_dataset google_bigquery_dataset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.Initializer"></a>

```typescript
import { dataGoogleBigqueryDataset } from '@cdktf/provider-google'

new dataGoogleBigqueryDataset.DataGoogleBigqueryDataset(scope: Construct, id: string, config: DataGoogleBigqueryDatasetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig">DataGoogleBigqueryDatasetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig">DataGoogleBigqueryDatasetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleBigqueryDataset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.isConstruct"></a>

```typescript
import { dataGoogleBigqueryDataset } from '@cdktf/provider-google'

dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.isTerraformElement"></a>

```typescript
import { dataGoogleBigqueryDataset } from '@cdktf/provider-google'

dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.isTerraformDataSource"></a>

```typescript
import { dataGoogleBigqueryDataset } from '@cdktf/provider-google'

dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.generateConfigForImport"></a>

```typescript
import { dataGoogleBigqueryDataset } from '@cdktf/provider-google'

dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleBigqueryDataset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleBigqueryDataset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleBigqueryDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/data-sources/bigquery_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleBigqueryDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.access">access</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList">DataGoogleBigqueryDatasetAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.creationTime">creationTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.defaultCollation">defaultCollation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.defaultEncryptionConfiguration">defaultEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList">DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.defaultPartitionExpirationMs">defaultPartitionExpirationMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.defaultTableExpirationMs">defaultTableExpirationMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.deleteContentsOnDestroy">deleteContentsOnDestroy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.friendlyName">friendlyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.isCaseInsensitive">isCaseInsensitive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.lastModifiedTime">lastModifiedTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.maxTimeTravelHours">maxTimeTravelHours</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.storageBillingModel">storageBillingModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.datasetIdInput">datasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.access"></a>

```typescript
public readonly access: DataGoogleBigqueryDatasetAccessList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList">DataGoogleBigqueryDatasetAccessList</a>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.creationTime"></a>

```typescript
public readonly creationTime: number;
```

- *Type:* number

---

##### `defaultCollation`<sup>Required</sup> <a name="defaultCollation" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.defaultCollation"></a>

```typescript
public readonly defaultCollation: string;
```

- *Type:* string

---

##### `defaultEncryptionConfiguration`<sup>Required</sup> <a name="defaultEncryptionConfiguration" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.defaultEncryptionConfiguration"></a>

```typescript
public readonly defaultEncryptionConfiguration: DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList">DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList</a>

---

##### `defaultPartitionExpirationMs`<sup>Required</sup> <a name="defaultPartitionExpirationMs" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.defaultPartitionExpirationMs"></a>

```typescript
public readonly defaultPartitionExpirationMs: number;
```

- *Type:* number

---

##### `defaultTableExpirationMs`<sup>Required</sup> <a name="defaultTableExpirationMs" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.defaultTableExpirationMs"></a>

```typescript
public readonly defaultTableExpirationMs: number;
```

- *Type:* number

---

##### `deleteContentsOnDestroy`<sup>Required</sup> <a name="deleteContentsOnDestroy" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.deleteContentsOnDestroy"></a>

```typescript
public readonly deleteContentsOnDestroy: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `friendlyName`<sup>Required</sup> <a name="friendlyName" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.friendlyName"></a>

```typescript
public readonly friendlyName: string;
```

- *Type:* string

---

##### `isCaseInsensitive`<sup>Required</sup> <a name="isCaseInsensitive" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.isCaseInsensitive"></a>

```typescript
public readonly isCaseInsensitive: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: number;
```

- *Type:* number

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `maxTimeTravelHours`<sup>Required</sup> <a name="maxTimeTravelHours" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.maxTimeTravelHours"></a>

```typescript
public readonly maxTimeTravelHours: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `storageBillingModel`<sup>Required</sup> <a name="storageBillingModel" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.storageBillingModel"></a>

```typescript
public readonly storageBillingModel: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.datasetIdInput"></a>

```typescript
public readonly datasetIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBigqueryDatasetAccess <a name="DataGoogleBigqueryDatasetAccess" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccess.Initializer"></a>

```typescript
import { dataGoogleBigqueryDataset } from '@cdktf/provider-google'

const dataGoogleBigqueryDatasetAccess: dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccess = { ... }
```


### DataGoogleBigqueryDatasetAccessDataset <a name="DataGoogleBigqueryDatasetAccessDataset" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDataset.Initializer"></a>

```typescript
import { dataGoogleBigqueryDataset } from '@cdktf/provider-google'

const dataGoogleBigqueryDatasetAccessDataset: dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDataset = { ... }
```


### DataGoogleBigqueryDatasetAccessDatasetDataset <a name="DataGoogleBigqueryDatasetAccessDatasetDataset" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDataset.Initializer"></a>

```typescript
import { dataGoogleBigqueryDataset } from '@cdktf/provider-google'

const dataGoogleBigqueryDatasetAccessDatasetDataset: dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDataset = { ... }
```


### DataGoogleBigqueryDatasetAccessRoutine <a name="DataGoogleBigqueryDatasetAccessRoutine" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutine.Initializer"></a>

```typescript
import { dataGoogleBigqueryDataset } from '@cdktf/provider-google'

const dataGoogleBigqueryDatasetAccessRoutine: dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutine = { ... }
```


### DataGoogleBigqueryDatasetAccessView <a name="DataGoogleBigqueryDatasetAccessView" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessView.Initializer"></a>

```typescript
import { dataGoogleBigqueryDataset } from '@cdktf/provider-google'

const dataGoogleBigqueryDatasetAccessView: dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessView = { ... }
```


### DataGoogleBigqueryDatasetConfig <a name="DataGoogleBigqueryDatasetConfig" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.Initializer"></a>

```typescript
import { dataGoogleBigqueryDataset } from '@cdktf/provider-google'

const dataGoogleBigqueryDatasetConfig: dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.datasetId">datasetId</a></code> | <code>string</code> | A unique ID for this dataset, without the project name. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/data-sources/bigquery_dataset#id DataGoogleBigqueryDataset#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/data-sources/bigquery_dataset#project DataGoogleBigqueryDataset#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

A unique ID for this dataset, without the project name.

The ID
must contain only letters (a-z, A-Z), numbers (0-9), or
underscores (_). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/data-sources/bigquery_dataset#dataset_id DataGoogleBigqueryDataset#dataset_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/data-sources/bigquery_dataset#id DataGoogleBigqueryDataset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/data-sources/bigquery_dataset#project DataGoogleBigqueryDataset#project}.

---

### DataGoogleBigqueryDatasetDefaultEncryptionConfiguration <a name="DataGoogleBigqueryDatasetDefaultEncryptionConfiguration" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfiguration.Initializer"></a>

```typescript
import { dataGoogleBigqueryDataset } from '@cdktf/provider-google'

const dataGoogleBigqueryDatasetDefaultEncryptionConfiguration: dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBigqueryDatasetAccessDatasetDatasetList <a name="DataGoogleBigqueryDatasetAccessDatasetDatasetList" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.Initializer"></a>

```typescript
import { dataGoogleBigqueryDataset } from '@cdktf/provider-google'

new dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.get"></a>

```typescript
public get(index: number): DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference <a name="DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.Initializer"></a>

```typescript
import { dataGoogleBigqueryDataset } from '@cdktf/provider-google'

new dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDataset">DataGoogleBigqueryDatasetAccessDatasetDataset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBigqueryDatasetAccessDatasetDataset;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDataset">DataGoogleBigqueryDatasetAccessDatasetDataset</a>

---


### DataGoogleBigqueryDatasetAccessDatasetList <a name="DataGoogleBigqueryDatasetAccessDatasetList" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.Initializer"></a>

```typescript
import { dataGoogleBigqueryDataset } from '@cdktf/provider-google'

new dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.get"></a>

```typescript
public get(index: number): DataGoogleBigqueryDatasetAccessDatasetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBigqueryDatasetAccessDatasetOutputReference <a name="DataGoogleBigqueryDatasetAccessDatasetOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.Initializer"></a>

```typescript
import { dataGoogleBigqueryDataset } from '@cdktf/provider-google'

new dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.property.dataset">dataset</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList">DataGoogleBigqueryDatasetAccessDatasetDatasetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.property.targetTypes">targetTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDataset">DataGoogleBigqueryDatasetAccessDataset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.property.dataset"></a>

```typescript
public readonly dataset: DataGoogleBigqueryDatasetAccessDatasetDatasetList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList">DataGoogleBigqueryDatasetAccessDatasetDatasetList</a>

---

##### `targetTypes`<sup>Required</sup> <a name="targetTypes" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.property.targetTypes"></a>

```typescript
public readonly targetTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBigqueryDatasetAccessDataset;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDataset">DataGoogleBigqueryDatasetAccessDataset</a>

---


### DataGoogleBigqueryDatasetAccessList <a name="DataGoogleBigqueryDatasetAccessList" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.Initializer"></a>

```typescript
import { dataGoogleBigqueryDataset } from '@cdktf/provider-google'

new dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.get"></a>

```typescript
public get(index: number): DataGoogleBigqueryDatasetAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBigqueryDatasetAccessOutputReference <a name="DataGoogleBigqueryDatasetAccessOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.Initializer"></a>

```typescript
import { dataGoogleBigqueryDataset } from '@cdktf/provider-google'

new dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.dataset">dataset</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList">DataGoogleBigqueryDatasetAccessDatasetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.groupByEmail">groupByEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.iamMember">iamMember</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.routine">routine</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList">DataGoogleBigqueryDatasetAccessRoutineList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.specialGroup">specialGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.userByEmail">userByEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.view">view</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList">DataGoogleBigqueryDatasetAccessViewList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccess">DataGoogleBigqueryDatasetAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.dataset"></a>

```typescript
public readonly dataset: DataGoogleBigqueryDatasetAccessDatasetList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList">DataGoogleBigqueryDatasetAccessDatasetList</a>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `groupByEmail`<sup>Required</sup> <a name="groupByEmail" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.groupByEmail"></a>

```typescript
public readonly groupByEmail: string;
```

- *Type:* string

---

##### `iamMember`<sup>Required</sup> <a name="iamMember" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.iamMember"></a>

```typescript
public readonly iamMember: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `routine`<sup>Required</sup> <a name="routine" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.routine"></a>

```typescript
public readonly routine: DataGoogleBigqueryDatasetAccessRoutineList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList">DataGoogleBigqueryDatasetAccessRoutineList</a>

---

##### `specialGroup`<sup>Required</sup> <a name="specialGroup" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.specialGroup"></a>

```typescript
public readonly specialGroup: string;
```

- *Type:* string

---

##### `userByEmail`<sup>Required</sup> <a name="userByEmail" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.userByEmail"></a>

```typescript
public readonly userByEmail: string;
```

- *Type:* string

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.view"></a>

```typescript
public readonly view: DataGoogleBigqueryDatasetAccessViewList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList">DataGoogleBigqueryDatasetAccessViewList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBigqueryDatasetAccess;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccess">DataGoogleBigqueryDatasetAccess</a>

---


### DataGoogleBigqueryDatasetAccessRoutineList <a name="DataGoogleBigqueryDatasetAccessRoutineList" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.Initializer"></a>

```typescript
import { dataGoogleBigqueryDataset } from '@cdktf/provider-google'

new dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.get"></a>

```typescript
public get(index: number): DataGoogleBigqueryDatasetAccessRoutineOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBigqueryDatasetAccessRoutineOutputReference <a name="DataGoogleBigqueryDatasetAccessRoutineOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.Initializer"></a>

```typescript
import { dataGoogleBigqueryDataset } from '@cdktf/provider-google'

new dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.property.routineId">routineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutine">DataGoogleBigqueryDatasetAccessRoutine</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `routineId`<sup>Required</sup> <a name="routineId" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.property.routineId"></a>

```typescript
public readonly routineId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBigqueryDatasetAccessRoutine;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutine">DataGoogleBigqueryDatasetAccessRoutine</a>

---


### DataGoogleBigqueryDatasetAccessViewList <a name="DataGoogleBigqueryDatasetAccessViewList" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.Initializer"></a>

```typescript
import { dataGoogleBigqueryDataset } from '@cdktf/provider-google'

new dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.get"></a>

```typescript
public get(index: number): DataGoogleBigqueryDatasetAccessViewOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBigqueryDatasetAccessViewOutputReference <a name="DataGoogleBigqueryDatasetAccessViewOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.Initializer"></a>

```typescript
import { dataGoogleBigqueryDataset } from '@cdktf/provider-google'

new dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.property.tableId">tableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessView">DataGoogleBigqueryDatasetAccessView</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBigqueryDatasetAccessView;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessView">DataGoogleBigqueryDatasetAccessView</a>

---


### DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList <a name="DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.Initializer"></a>

```typescript
import { dataGoogleBigqueryDataset } from '@cdktf/provider-google'

new dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.get"></a>

```typescript
public get(index: number): DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference <a name="DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataGoogleBigqueryDataset } from '@cdktf/provider-google'

new dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfiguration">DataGoogleBigqueryDatasetDefaultEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBigqueryDatasetDefaultEncryptionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfiguration">DataGoogleBigqueryDatasetDefaultEncryptionConfiguration</a>

---



