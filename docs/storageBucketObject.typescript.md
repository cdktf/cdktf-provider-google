# `storageBucketObject` Submodule <a name="`storageBucketObject` Submodule" id="@cdktf/provider-google.storageBucketObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageBucketObject <a name="StorageBucketObject" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/storage_bucket_object google_storage_bucket_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer"></a>

```typescript
import { storageBucketObject } from '@cdktf/provider-google'

new storageBucketObject.StorageBucketObject(scope: Construct, id: string, config: StorageBucketObjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig">StorageBucketObjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig">StorageBucketObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.putCustomerEncryption">putCustomerEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.putRetention">putRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetCacheControl">resetCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContentDisposition">resetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContentEncoding">resetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContentLanguage">resetContentLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetCustomerEncryption">resetCustomerEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetDetectMd5Hash">resetDetectMd5Hash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetEventBasedHold">resetEventBasedHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetRetention">resetRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetStorageClass">resetStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetTemporaryHold">resetTemporaryHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomerEncryption` <a name="putCustomerEncryption" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.putCustomerEncryption"></a>

```typescript
public putCustomerEncryption(value: StorageBucketObjectCustomerEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.putCustomerEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption">StorageBucketObjectCustomerEncryption</a>

---

##### `putRetention` <a name="putRetention" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.putRetention"></a>

```typescript
public putRetention(value: StorageBucketObjectRetention): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.putRetention.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetention">StorageBucketObjectRetention</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.putTimeouts"></a>

```typescript
public putTimeouts(value: StorageBucketObjectTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts">StorageBucketObjectTimeouts</a>

---

##### `resetCacheControl` <a name="resetCacheControl" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetCacheControl"></a>

```typescript
public resetCacheControl(): void
```

##### `resetContent` <a name="resetContent" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetContentDisposition` <a name="resetContentDisposition" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContentDisposition"></a>

```typescript
public resetContentDisposition(): void
```

##### `resetContentEncoding` <a name="resetContentEncoding" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContentEncoding"></a>

```typescript
public resetContentEncoding(): void
```

##### `resetContentLanguage` <a name="resetContentLanguage" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContentLanguage"></a>

```typescript
public resetContentLanguage(): void
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetCustomerEncryption` <a name="resetCustomerEncryption" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetCustomerEncryption"></a>

```typescript
public resetCustomerEncryption(): void
```

##### `resetDetectMd5Hash` <a name="resetDetectMd5Hash" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetDetectMd5Hash"></a>

```typescript
public resetDetectMd5Hash(): void
```

##### `resetEventBasedHold` <a name="resetEventBasedHold" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetEventBasedHold"></a>

```typescript
public resetEventBasedHold(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetRetention` <a name="resetRetention" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetRetention"></a>

```typescript
public resetRetention(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetStorageClass"></a>

```typescript
public resetStorageClass(): void
```

##### `resetTemporaryHold` <a name="resetTemporaryHold" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetTemporaryHold"></a>

```typescript
public resetTemporaryHold(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StorageBucketObject resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.isConstruct"></a>

```typescript
import { storageBucketObject } from '@cdktf/provider-google'

storageBucketObject.StorageBucketObject.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.isTerraformElement"></a>

```typescript
import { storageBucketObject } from '@cdktf/provider-google'

storageBucketObject.StorageBucketObject.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.isTerraformResource"></a>

```typescript
import { storageBucketObject } from '@cdktf/provider-google'

storageBucketObject.StorageBucketObject.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.generateConfigForImport"></a>

```typescript
import { storageBucketObject } from '@cdktf/provider-google'

storageBucketObject.StorageBucketObject.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StorageBucketObject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageBucketObject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageBucketObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/storage_bucket_object#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StorageBucketObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.crc32C">crc32C</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.customerEncryption">customerEncryption</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference">StorageBucketObjectCustomerEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.generation">generation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.md5Hash">md5Hash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.mediaLink">mediaLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.outputName">outputName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.retention">retention</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference">StorageBucketObjectRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference">StorageBucketObjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.cacheControlInput">cacheControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentDispositionInput">contentDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentEncodingInput">contentEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentLanguageInput">contentLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.customerEncryptionInput">customerEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption">StorageBucketObjectCustomerEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.detectMd5HashInput">detectMd5HashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.eventBasedHoldInput">eventBasedHoldInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.retentionInput">retentionInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetention">StorageBucketObjectRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.storageClassInput">storageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.temporaryHoldInput">temporaryHoldInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts">StorageBucketObjectTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.cacheControl">cacheControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentDisposition">contentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentEncoding">contentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentLanguage">contentLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.detectMd5Hash">detectMd5Hash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.eventBasedHold">eventBasedHold</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.temporaryHold">temporaryHold</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `crc32C`<sup>Required</sup> <a name="crc32C" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.crc32C"></a>

```typescript
public readonly crc32C: string;
```

- *Type:* string

---

##### `customerEncryption`<sup>Required</sup> <a name="customerEncryption" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.customerEncryption"></a>

```typescript
public readonly customerEncryption: StorageBucketObjectCustomerEncryptionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference">StorageBucketObjectCustomerEncryptionOutputReference</a>

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

---

##### `md5Hash`<sup>Required</sup> <a name="md5Hash" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.md5Hash"></a>

```typescript
public readonly md5Hash: string;
```

- *Type:* string

---

##### `mediaLink`<sup>Required</sup> <a name="mediaLink" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.mediaLink"></a>

```typescript
public readonly mediaLink: string;
```

- *Type:* string

---

##### `outputName`<sup>Required</sup> <a name="outputName" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.outputName"></a>

```typescript
public readonly outputName: string;
```

- *Type:* string

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.retention"></a>

```typescript
public readonly retention: StorageBucketObjectRetentionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference">StorageBucketObjectRetentionOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.timeouts"></a>

```typescript
public readonly timeouts: StorageBucketObjectTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference">StorageBucketObjectTimeoutsOutputReference</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `cacheControlInput`<sup>Optional</sup> <a name="cacheControlInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.cacheControlInput"></a>

```typescript
public readonly cacheControlInput: string;
```

- *Type:* string

---

##### `contentDispositionInput`<sup>Optional</sup> <a name="contentDispositionInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentDispositionInput"></a>

```typescript
public readonly contentDispositionInput: string;
```

- *Type:* string

---

##### `contentEncodingInput`<sup>Optional</sup> <a name="contentEncodingInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentEncodingInput"></a>

```typescript
public readonly contentEncodingInput: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentLanguageInput`<sup>Optional</sup> <a name="contentLanguageInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentLanguageInput"></a>

```typescript
public readonly contentLanguageInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `customerEncryptionInput`<sup>Optional</sup> <a name="customerEncryptionInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.customerEncryptionInput"></a>

```typescript
public readonly customerEncryptionInput: StorageBucketObjectCustomerEncryption;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption">StorageBucketObjectCustomerEncryption</a>

---

##### `detectMd5HashInput`<sup>Optional</sup> <a name="detectMd5HashInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.detectMd5HashInput"></a>

```typescript
public readonly detectMd5HashInput: string;
```

- *Type:* string

---

##### `eventBasedHoldInput`<sup>Optional</sup> <a name="eventBasedHoldInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.eventBasedHoldInput"></a>

```typescript
public readonly eventBasedHoldInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `retentionInput`<sup>Optional</sup> <a name="retentionInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.retentionInput"></a>

```typescript
public readonly retentionInput: StorageBucketObjectRetention;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetention">StorageBucketObjectRetention</a>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.storageClassInput"></a>

```typescript
public readonly storageClassInput: string;
```

- *Type:* string

---

##### `temporaryHoldInput`<sup>Optional</sup> <a name="temporaryHoldInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.temporaryHoldInput"></a>

```typescript
public readonly temporaryHoldInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StorageBucketObjectTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts">StorageBucketObjectTimeouts</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `cacheControl`<sup>Required</sup> <a name="cacheControl" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.cacheControl"></a>

```typescript
public readonly cacheControl: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentDisposition`<sup>Required</sup> <a name="contentDisposition" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentDisposition"></a>

```typescript
public readonly contentDisposition: string;
```

- *Type:* string

---

##### `contentEncoding`<sup>Required</sup> <a name="contentEncoding" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentEncoding"></a>

```typescript
public readonly contentEncoding: string;
```

- *Type:* string

---

##### `contentLanguage`<sup>Required</sup> <a name="contentLanguage" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentLanguage"></a>

```typescript
public readonly contentLanguage: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `detectMd5Hash`<sup>Required</sup> <a name="detectMd5Hash" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.detectMd5Hash"></a>

```typescript
public readonly detectMd5Hash: string;
```

- *Type:* string

---

##### `eventBasedHold`<sup>Required</sup> <a name="eventBasedHold" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.eventBasedHold"></a>

```typescript
public readonly eventBasedHold: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `temporaryHold`<sup>Required</sup> <a name="temporaryHold" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.temporaryHold"></a>

```typescript
public readonly temporaryHold: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageBucketObjectConfig <a name="StorageBucketObjectConfig" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.Initializer"></a>

```typescript
import { storageBucketObject } from '@cdktf/provider-google'

const storageBucketObjectConfig: storageBucketObject.StorageBucketObjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.bucket">bucket</a></code> | <code>string</code> | The name of the containing bucket. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.name">name</a></code> | <code>string</code> | The name of the object. If you're interpolating the name of this object, see output_name instead. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.cacheControl">cacheControl</a></code> | <code>string</code> | Cache-Control directive to specify caching behavior of object data. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.content">content</a></code> | <code>string</code> | Data as string to be uploaded. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.contentDisposition">contentDisposition</a></code> | <code>string</code> | Content-Disposition of the object data. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.contentEncoding">contentEncoding</a></code> | <code>string</code> | Content-Encoding of the object data. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.contentLanguage">contentLanguage</a></code> | <code>string</code> | Content-Language of the object data. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.contentType">contentType</a></code> | <code>string</code> | Content-Type of the object data. Defaults to "application/octet-stream" or "text/plain; charset=utf-8". |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.customerEncryption">customerEncryption</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption">StorageBucketObjectCustomerEncryption</a></code> | customer_encryption block. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.detectMd5Hash">detectMd5Hash</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/storage_bucket_object#detect_md5hash StorageBucketObject#detect_md5hash}. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.eventBasedHold">eventBasedHold</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether an object is under event-based hold. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/storage_bucket_object#id StorageBucketObject#id}. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | Resource name of the Cloud KMS key that will be used to encrypt the object. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | User-provided metadata, in key/value pairs. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.retention">retention</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetention">StorageBucketObjectRetention</a></code> | retention block. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.source">source</a></code> | <code>string</code> | A path to the data you want to upload. Must be defined if content is not. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.storageClass">storageClass</a></code> | <code>string</code> | The StorageClass of the new bucket object. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.temporaryHold">temporaryHold</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether an object is under temporary hold. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts">StorageBucketObjectTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The name of the containing bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/storage_bucket_object#bucket StorageBucketObject#bucket}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the object. If you're interpolating the name of this object, see output_name instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/storage_bucket_object#name StorageBucketObject#name}

---

##### `cacheControl`<sup>Optional</sup> <a name="cacheControl" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.cacheControl"></a>

```typescript
public readonly cacheControl: string;
```

- *Type:* string

Cache-Control directive to specify caching behavior of object data.

If omitted and object is accessible to all anonymous users, the default will be public, max-age=3600

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/storage_bucket_object#cache_control StorageBucketObject#cache_control}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Data as string to be uploaded.

Must be defined if source is not. Note: The content field is marked as sensitive. To view the raw contents of the object, please define an output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/storage_bucket_object#content StorageBucketObject#content}

---

##### `contentDisposition`<sup>Optional</sup> <a name="contentDisposition" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.contentDisposition"></a>

```typescript
public readonly contentDisposition: string;
```

- *Type:* string

Content-Disposition of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/storage_bucket_object#content_disposition StorageBucketObject#content_disposition}

---

##### `contentEncoding`<sup>Optional</sup> <a name="contentEncoding" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.contentEncoding"></a>

```typescript
public readonly contentEncoding: string;
```

- *Type:* string

Content-Encoding of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/storage_bucket_object#content_encoding StorageBucketObject#content_encoding}

---

##### `contentLanguage`<sup>Optional</sup> <a name="contentLanguage" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.contentLanguage"></a>

```typescript
public readonly contentLanguage: string;
```

- *Type:* string

Content-Language of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/storage_bucket_object#content_language StorageBucketObject#content_language}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Content-Type of the object data. Defaults to "application/octet-stream" or "text/plain; charset=utf-8".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/storage_bucket_object#content_type StorageBucketObject#content_type}

---

##### `customerEncryption`<sup>Optional</sup> <a name="customerEncryption" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.customerEncryption"></a>

```typescript
public readonly customerEncryption: StorageBucketObjectCustomerEncryption;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption">StorageBucketObjectCustomerEncryption</a>

customer_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/storage_bucket_object#customer_encryption StorageBucketObject#customer_encryption}

---

##### `detectMd5Hash`<sup>Optional</sup> <a name="detectMd5Hash" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.detectMd5Hash"></a>

```typescript
public readonly detectMd5Hash: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/storage_bucket_object#detect_md5hash StorageBucketObject#detect_md5hash}.

---

##### `eventBasedHold`<sup>Optional</sup> <a name="eventBasedHold" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.eventBasedHold"></a>

```typescript
public readonly eventBasedHold: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether an object is under event-based hold.

Event-based hold is a way to retain objects until an event occurs, which is signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects will be subject to bucket-level retention (if any).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/storage_bucket_object#event_based_hold StorageBucketObject#event_based_hold}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/storage_bucket_object#id StorageBucketObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

Resource name of the Cloud KMS key that will be used to encrypt the object.

Overrides the object metadata's kmsKeyName value, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/storage_bucket_object#kms_key_name StorageBucketObject#kms_key_name}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-provided metadata, in key/value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/storage_bucket_object#metadata StorageBucketObject#metadata}

---

##### `retention`<sup>Optional</sup> <a name="retention" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.retention"></a>

```typescript
public readonly retention: StorageBucketObjectRetention;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetention">StorageBucketObjectRetention</a>

retention block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/storage_bucket_object#retention StorageBucketObject#retention}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

A path to the data you want to upload. Must be defined if content is not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/storage_bucket_object#source StorageBucketObject#source}

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

The StorageClass of the new bucket object.

Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. If not provided, this defaults to the bucket's default storage class or to a standard class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/storage_bucket_object#storage_class StorageBucketObject#storage_class}

---

##### `temporaryHold`<sup>Optional</sup> <a name="temporaryHold" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.temporaryHold"></a>

```typescript
public readonly temporaryHold: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether an object is under temporary hold.

While this flag is set to true, the object is protected against deletion and overwrites.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/storage_bucket_object#temporary_hold StorageBucketObject#temporary_hold}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StorageBucketObjectTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts">StorageBucketObjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/storage_bucket_object#timeouts StorageBucketObject#timeouts}

---

### StorageBucketObjectCustomerEncryption <a name="StorageBucketObjectCustomerEncryption" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption.Initializer"></a>

```typescript
import { storageBucketObject } from '@cdktf/provider-google'

const storageBucketObjectCustomerEncryption: storageBucketObject.StorageBucketObjectCustomerEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption.property.encryptionKey">encryptionKey</a></code> | <code>string</code> | Base64 encoded customer supplied encryption key. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>string</code> | The encryption algorithm. Default: AES256. |

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: string;
```

- *Type:* string

Base64 encoded customer supplied encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/storage_bucket_object#encryption_key StorageBucketObject#encryption_key}

---

##### `encryptionAlgorithm`<sup>Optional</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption.property.encryptionAlgorithm"></a>

```typescript
public readonly encryptionAlgorithm: string;
```

- *Type:* string

The encryption algorithm. Default: AES256.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/storage_bucket_object#encryption_algorithm StorageBucketObject#encryption_algorithm}

---

### StorageBucketObjectRetention <a name="StorageBucketObjectRetention" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetention"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetention.Initializer"></a>

```typescript
import { storageBucketObject } from '@cdktf/provider-google'

const storageBucketObjectRetention: storageBucketObject.StorageBucketObjectRetention = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetention.property.mode">mode</a></code> | <code>string</code> | The object retention mode. Supported values include: "Unlocked", "Locked". |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetention.property.retainUntilTime">retainUntilTime</a></code> | <code>string</code> | Time in RFC 3339 (e.g. 2030-01-01T02:03:04Z) until which object retention protects this object. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetention.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

The object retention mode. Supported values include: "Unlocked", "Locked".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/storage_bucket_object#mode StorageBucketObject#mode}

---

##### `retainUntilTime`<sup>Required</sup> <a name="retainUntilTime" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetention.property.retainUntilTime"></a>

```typescript
public readonly retainUntilTime: string;
```

- *Type:* string

Time in RFC 3339 (e.g. 2030-01-01T02:03:04Z) until which object retention protects this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/storage_bucket_object#retain_until_time StorageBucketObject#retain_until_time}

---

### StorageBucketObjectTimeouts <a name="StorageBucketObjectTimeouts" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts.Initializer"></a>

```typescript
import { storageBucketObject } from '@cdktf/provider-google'

const storageBucketObjectTimeouts: storageBucketObject.StorageBucketObjectTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/storage_bucket_object#create StorageBucketObject#create}. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/storage_bucket_object#delete StorageBucketObject#delete}. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/storage_bucket_object#update StorageBucketObject#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/storage_bucket_object#create StorageBucketObject#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/storage_bucket_object#delete StorageBucketObject#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/storage_bucket_object#update StorageBucketObject#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageBucketObjectCustomerEncryptionOutputReference <a name="StorageBucketObjectCustomerEncryptionOutputReference" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.Initializer"></a>

```typescript
import { storageBucketObject } from '@cdktf/provider-google'

new storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.resetEncryptionAlgorithm">resetEncryptionAlgorithm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionAlgorithm` <a name="resetEncryptionAlgorithm" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.resetEncryptionAlgorithm"></a>

```typescript
public resetEncryptionAlgorithm(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.encryptionAlgorithmInput">encryptionAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.encryptionKey">encryptionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption">StorageBucketObjectCustomerEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionAlgorithmInput`<sup>Optional</sup> <a name="encryptionAlgorithmInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.encryptionAlgorithmInput"></a>

```typescript
public readonly encryptionAlgorithmInput: string;
```

- *Type:* string

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.encryptionKeyInput"></a>

```typescript
public readonly encryptionKeyInput: string;
```

- *Type:* string

---

##### `encryptionAlgorithm`<sup>Required</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.encryptionAlgorithm"></a>

```typescript
public readonly encryptionAlgorithm: string;
```

- *Type:* string

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageBucketObjectCustomerEncryption;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption">StorageBucketObjectCustomerEncryption</a>

---


### StorageBucketObjectRetentionOutputReference <a name="StorageBucketObjectRetentionOutputReference" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.Initializer"></a>

```typescript
import { storageBucketObject } from '@cdktf/provider-google'

new storageBucketObject.StorageBucketObjectRetentionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.property.retainUntilTimeInput">retainUntilTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.property.retainUntilTime">retainUntilTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetention">StorageBucketObjectRetention</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `retainUntilTimeInput`<sup>Optional</sup> <a name="retainUntilTimeInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.property.retainUntilTimeInput"></a>

```typescript
public readonly retainUntilTimeInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `retainUntilTime`<sup>Required</sup> <a name="retainUntilTime" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.property.retainUntilTime"></a>

```typescript
public readonly retainUntilTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetentionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageBucketObjectRetention;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectRetention">StorageBucketObjectRetention</a>

---


### StorageBucketObjectTimeoutsOutputReference <a name="StorageBucketObjectTimeoutsOutputReference" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.Initializer"></a>

```typescript
import { storageBucketObject } from '@cdktf/provider-google'

new storageBucketObject.StorageBucketObjectTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts">StorageBucketObjectTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageBucketObjectTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts">StorageBucketObjectTimeouts</a>

---



