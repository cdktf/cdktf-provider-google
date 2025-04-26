# `dataGoogleStorageBucketObject` Submodule <a name="`dataGoogleStorageBucketObject` Submodule" id="@cdktf/provider-google.dataGoogleStorageBucketObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageBucketObject <a name="DataGoogleStorageBucketObject" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/storage_bucket_object google_storage_bucket_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.Initializer"></a>

```typescript
import { dataGoogleStorageBucketObject } from '@cdktf/provider-google'

new dataGoogleStorageBucketObject.DataGoogleStorageBucketObject(scope: Construct, id: string, config?: DataGoogleStorageBucketObjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig">DataGoogleStorageBucketObjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig">DataGoogleStorageBucketObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBucket` <a name="resetBucket" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleStorageBucketObject resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.isConstruct"></a>

```typescript
import { dataGoogleStorageBucketObject } from '@cdktf/provider-google'

dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.isTerraformElement"></a>

```typescript
import { dataGoogleStorageBucketObject } from '@cdktf/provider-google'

dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.isTerraformDataSource"></a>

```typescript
import { dataGoogleStorageBucketObject } from '@cdktf/provider-google'

dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.generateConfigForImport"></a>

```typescript
import { dataGoogleStorageBucketObject } from '@cdktf/provider-google'

dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleStorageBucketObject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleStorageBucketObject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleStorageBucketObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/storage_bucket_object#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageBucketObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.cacheControl">cacheControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.contentDisposition">contentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.contentEncoding">contentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.contentLanguage">contentLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.crc32C">crc32C</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.customerEncryption">customerEncryption</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList">DataGoogleStorageBucketObjectCustomerEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.detectMd5Hash">detectMd5Hash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.eventBasedHold">eventBasedHold</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.generation">generation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.md5Hash">md5Hash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.md5Hexhash">md5Hexhash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.mediaLink">mediaLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.outputName">outputName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.retention">retention</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionList">DataGoogleStorageBucketObjectRetentionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.temporaryHold">temporaryHold</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `cacheControl`<sup>Required</sup> <a name="cacheControl" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.cacheControl"></a>

```typescript
public readonly cacheControl: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentDisposition`<sup>Required</sup> <a name="contentDisposition" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.contentDisposition"></a>

```typescript
public readonly contentDisposition: string;
```

- *Type:* string

---

##### `contentEncoding`<sup>Required</sup> <a name="contentEncoding" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.contentEncoding"></a>

```typescript
public readonly contentEncoding: string;
```

- *Type:* string

---

##### `contentLanguage`<sup>Required</sup> <a name="contentLanguage" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.contentLanguage"></a>

```typescript
public readonly contentLanguage: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `crc32C`<sup>Required</sup> <a name="crc32C" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.crc32C"></a>

```typescript
public readonly crc32C: string;
```

- *Type:* string

---

##### `customerEncryption`<sup>Required</sup> <a name="customerEncryption" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.customerEncryption"></a>

```typescript
public readonly customerEncryption: DataGoogleStorageBucketObjectCustomerEncryptionList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList">DataGoogleStorageBucketObjectCustomerEncryptionList</a>

---

##### `detectMd5Hash`<sup>Required</sup> <a name="detectMd5Hash" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.detectMd5Hash"></a>

```typescript
public readonly detectMd5Hash: string;
```

- *Type:* string

---

##### `eventBasedHold`<sup>Required</sup> <a name="eventBasedHold" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.eventBasedHold"></a>

```typescript
public readonly eventBasedHold: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `md5Hash`<sup>Required</sup> <a name="md5Hash" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.md5Hash"></a>

```typescript
public readonly md5Hash: string;
```

- *Type:* string

---

##### `md5Hexhash`<sup>Required</sup> <a name="md5Hexhash" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.md5Hexhash"></a>

```typescript
public readonly md5Hexhash: string;
```

- *Type:* string

---

##### `mediaLink`<sup>Required</sup> <a name="mediaLink" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.mediaLink"></a>

```typescript
public readonly mediaLink: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.metadata"></a>

```typescript
public readonly metadata: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `outputName`<sup>Required</sup> <a name="outputName" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.outputName"></a>

```typescript
public readonly outputName: string;
```

- *Type:* string

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.retention"></a>

```typescript
public readonly retention: DataGoogleStorageBucketObjectRetentionList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionList">DataGoogleStorageBucketObjectRetentionList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `temporaryHold`<sup>Required</sup> <a name="temporaryHold" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.temporaryHold"></a>

```typescript
public readonly temporaryHold: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObject.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageBucketObjectConfig <a name="DataGoogleStorageBucketObjectConfig" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.Initializer"></a>

```typescript
import { dataGoogleStorageBucketObject } from '@cdktf/provider-google'

const dataGoogleStorageBucketObjectConfig: dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.bucket">bucket</a></code> | <code>string</code> | The name of the containing bucket. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/storage_bucket_object#id DataGoogleStorageBucketObject#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.name">name</a></code> | <code>string</code> | The name of the object. If you're interpolating the name of this object, see output_name instead. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The name of the containing bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/storage_bucket_object#bucket DataGoogleStorageBucketObject#bucket}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/storage_bucket_object#id DataGoogleStorageBucketObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the object. If you're interpolating the name of this object, see output_name instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/storage_bucket_object#name DataGoogleStorageBucketObject#name}

---

### DataGoogleStorageBucketObjectCustomerEncryption <a name="DataGoogleStorageBucketObjectCustomerEncryption" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryption.Initializer"></a>

```typescript
import { dataGoogleStorageBucketObject } from '@cdktf/provider-google'

const dataGoogleStorageBucketObjectCustomerEncryption: dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryption = { ... }
```


### DataGoogleStorageBucketObjectRetention <a name="DataGoogleStorageBucketObjectRetention" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetention"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetention.Initializer"></a>

```typescript
import { dataGoogleStorageBucketObject } from '@cdktf/provider-google'

const dataGoogleStorageBucketObjectRetention: dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetention = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageBucketObjectCustomerEncryptionList <a name="DataGoogleStorageBucketObjectCustomerEncryptionList" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.Initializer"></a>

```typescript
import { dataGoogleStorageBucketObject } from '@cdktf/provider-google'

new dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.get"></a>

```typescript
public get(index: number): DataGoogleStorageBucketObjectCustomerEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageBucketObjectCustomerEncryptionOutputReference <a name="DataGoogleStorageBucketObjectCustomerEncryptionOutputReference" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageBucketObject } from '@cdktf/provider-google'

new dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.property.encryptionKey">encryptionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryption">DataGoogleStorageBucketObjectCustomerEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionAlgorithm`<sup>Required</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.property.encryptionAlgorithm"></a>

```typescript
public readonly encryptionAlgorithm: string;
```

- *Type:* string

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageBucketObjectCustomerEncryption;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectCustomerEncryption">DataGoogleStorageBucketObjectCustomerEncryption</a>

---


### DataGoogleStorageBucketObjectRetentionList <a name="DataGoogleStorageBucketObjectRetentionList" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionList.Initializer"></a>

```typescript
import { dataGoogleStorageBucketObject } from '@cdktf/provider-google'

new dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionList.get"></a>

```typescript
public get(index: number): DataGoogleStorageBucketObjectRetentionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageBucketObjectRetentionOutputReference <a name="DataGoogleStorageBucketObjectRetentionOutputReference" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageBucketObject } from '@cdktf/provider-google'

new dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.property.retainUntilTime">retainUntilTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetention">DataGoogleStorageBucketObjectRetention</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `retainUntilTime`<sup>Required</sup> <a name="retainUntilTime" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.property.retainUntilTime"></a>

```typescript
public readonly retainUntilTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetentionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageBucketObjectRetention;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucketObject.DataGoogleStorageBucketObjectRetention">DataGoogleStorageBucketObjectRetention</a>

---



