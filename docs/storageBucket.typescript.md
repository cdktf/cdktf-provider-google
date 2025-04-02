# `storageBucket` Submodule <a name="`storageBucket` Submodule" id="@cdktf/provider-google.storageBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageBucket <a name="StorageBucket" id="@cdktf/provider-google.storageBucket.StorageBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket google_storage_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

new storageBucket.StorageBucket(scope: Construct, id: string, config: StorageBucketConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig">StorageBucketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.storageBucket.StorageBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig">StorageBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putAutoclass">putAutoclass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putCors">putCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putCustomPlacementConfig">putCustomPlacementConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putEncryption">putEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putHierarchicalNamespace">putHierarchicalNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putLifecycleRule">putLifecycleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putLogging">putLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putRetentionPolicy">putRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putSoftDeletePolicy">putSoftDeletePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putVersioning">putVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.putWebsite">putWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetAutoclass">resetAutoclass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetCors">resetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetCustomPlacementConfig">resetCustomPlacementConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetDefaultEventBasedHold">resetDefaultEventBasedHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetEnableObjectRetention">resetEnableObjectRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetHierarchicalNamespace">resetHierarchicalNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetLifecycleRule">resetLifecycleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetLogging">resetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetPublicAccessPrevention">resetPublicAccessPrevention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetRequesterPays">resetRequesterPays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetRetentionPolicy">resetRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetRpo">resetRpo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetSoftDeletePolicy">resetSoftDeletePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetStorageClass">resetStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetUniformBucketLevelAccess">resetUniformBucketLevelAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetVersioning">resetVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.resetWebsite">resetWebsite</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.storageBucket.StorageBucket.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageBucket.StorageBucket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.storageBucket.StorageBucket.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.storageBucket.StorageBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.storageBucket.StorageBucket.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.storageBucket.StorageBucket.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.storageBucket.StorageBucket.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.storageBucket.StorageBucket.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.storageBucket.StorageBucket.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.storageBucket.StorageBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.storageBucket.StorageBucket.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.storageBucket.StorageBucket.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBucket.StorageBucket.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBucket.StorageBucket.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.storageBucket.StorageBucket.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBucket.StorageBucket.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.storageBucket.StorageBucket.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.storageBucket.StorageBucket.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.storageBucket.StorageBucket.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.storageBucket.StorageBucket.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBucket.StorageBucket.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoclass` <a name="putAutoclass" id="@cdktf/provider-google.storageBucket.StorageBucket.putAutoclass"></a>

```typescript
public putAutoclass(value: StorageBucketAutoclass): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putAutoclass.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a>

---

##### `putCors` <a name="putCors" id="@cdktf/provider-google.storageBucket.StorageBucket.putCors"></a>

```typescript
public putCors(value: IResolvable | StorageBucketCors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putCors.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.storageBucket.StorageBucketCors">StorageBucketCors</a>[]

---

##### `putCustomPlacementConfig` <a name="putCustomPlacementConfig" id="@cdktf/provider-google.storageBucket.StorageBucket.putCustomPlacementConfig"></a>

```typescript
public putCustomPlacementConfig(value: StorageBucketCustomPlacementConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putCustomPlacementConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a>

---

##### `putEncryption` <a name="putEncryption" id="@cdktf/provider-google.storageBucket.StorageBucket.putEncryption"></a>

```typescript
public putEncryption(value: StorageBucketEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a>

---

##### `putHierarchicalNamespace` <a name="putHierarchicalNamespace" id="@cdktf/provider-google.storageBucket.StorageBucket.putHierarchicalNamespace"></a>

```typescript
public putHierarchicalNamespace(value: StorageBucketHierarchicalNamespace): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putHierarchicalNamespace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace">StorageBucketHierarchicalNamespace</a>

---

##### `putLifecycleRule` <a name="putLifecycleRule" id="@cdktf/provider-google.storageBucket.StorageBucket.putLifecycleRule"></a>

```typescript
public putLifecycleRule(value: IResolvable | StorageBucketLifecycleRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putLifecycleRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule">StorageBucketLifecycleRule</a>[]

---

##### `putLogging` <a name="putLogging" id="@cdktf/provider-google.storageBucket.StorageBucket.putLogging"></a>

```typescript
public putLogging(value: StorageBucketLogging): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a>

---

##### `putRetentionPolicy` <a name="putRetentionPolicy" id="@cdktf/provider-google.storageBucket.StorageBucket.putRetentionPolicy"></a>

```typescript
public putRetentionPolicy(value: StorageBucketRetentionPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a>

---

##### `putSoftDeletePolicy` <a name="putSoftDeletePolicy" id="@cdktf/provider-google.storageBucket.StorageBucket.putSoftDeletePolicy"></a>

```typescript
public putSoftDeletePolicy(value: StorageBucketSoftDeletePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putSoftDeletePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy">StorageBucketSoftDeletePolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.storageBucket.StorageBucket.putTimeouts"></a>

```typescript
public putTimeouts(value: StorageBucketTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts">StorageBucketTimeouts</a>

---

##### `putVersioning` <a name="putVersioning" id="@cdktf/provider-google.storageBucket.StorageBucket.putVersioning"></a>

```typescript
public putVersioning(value: StorageBucketVersioning): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putVersioning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a>

---

##### `putWebsite` <a name="putWebsite" id="@cdktf/provider-google.storageBucket.StorageBucket.putWebsite"></a>

```typescript
public putWebsite(value: StorageBucketWebsite): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucket.putWebsite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a>

---

##### `resetAutoclass` <a name="resetAutoclass" id="@cdktf/provider-google.storageBucket.StorageBucket.resetAutoclass"></a>

```typescript
public resetAutoclass(): void
```

##### `resetCors` <a name="resetCors" id="@cdktf/provider-google.storageBucket.StorageBucket.resetCors"></a>

```typescript
public resetCors(): void
```

##### `resetCustomPlacementConfig` <a name="resetCustomPlacementConfig" id="@cdktf/provider-google.storageBucket.StorageBucket.resetCustomPlacementConfig"></a>

```typescript
public resetCustomPlacementConfig(): void
```

##### `resetDefaultEventBasedHold` <a name="resetDefaultEventBasedHold" id="@cdktf/provider-google.storageBucket.StorageBucket.resetDefaultEventBasedHold"></a>

```typescript
public resetDefaultEventBasedHold(): void
```

##### `resetEnableObjectRetention` <a name="resetEnableObjectRetention" id="@cdktf/provider-google.storageBucket.StorageBucket.resetEnableObjectRetention"></a>

```typescript
public resetEnableObjectRetention(): void
```

##### `resetEncryption` <a name="resetEncryption" id="@cdktf/provider-google.storageBucket.StorageBucket.resetEncryption"></a>

```typescript
public resetEncryption(): void
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-google.storageBucket.StorageBucket.resetForceDestroy"></a>

```typescript
public resetForceDestroy(): void
```

##### `resetHierarchicalNamespace` <a name="resetHierarchicalNamespace" id="@cdktf/provider-google.storageBucket.StorageBucket.resetHierarchicalNamespace"></a>

```typescript
public resetHierarchicalNamespace(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.storageBucket.StorageBucket.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.storageBucket.StorageBucket.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLifecycleRule` <a name="resetLifecycleRule" id="@cdktf/provider-google.storageBucket.StorageBucket.resetLifecycleRule"></a>

```typescript
public resetLifecycleRule(): void
```

##### `resetLogging` <a name="resetLogging" id="@cdktf/provider-google.storageBucket.StorageBucket.resetLogging"></a>

```typescript
public resetLogging(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.storageBucket.StorageBucket.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetPublicAccessPrevention` <a name="resetPublicAccessPrevention" id="@cdktf/provider-google.storageBucket.StorageBucket.resetPublicAccessPrevention"></a>

```typescript
public resetPublicAccessPrevention(): void
```

##### `resetRequesterPays` <a name="resetRequesterPays" id="@cdktf/provider-google.storageBucket.StorageBucket.resetRequesterPays"></a>

```typescript
public resetRequesterPays(): void
```

##### `resetRetentionPolicy` <a name="resetRetentionPolicy" id="@cdktf/provider-google.storageBucket.StorageBucket.resetRetentionPolicy"></a>

```typescript
public resetRetentionPolicy(): void
```

##### `resetRpo` <a name="resetRpo" id="@cdktf/provider-google.storageBucket.StorageBucket.resetRpo"></a>

```typescript
public resetRpo(): void
```

##### `resetSoftDeletePolicy` <a name="resetSoftDeletePolicy" id="@cdktf/provider-google.storageBucket.StorageBucket.resetSoftDeletePolicy"></a>

```typescript
public resetSoftDeletePolicy(): void
```

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktf/provider-google.storageBucket.StorageBucket.resetStorageClass"></a>

```typescript
public resetStorageClass(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.storageBucket.StorageBucket.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUniformBucketLevelAccess` <a name="resetUniformBucketLevelAccess" id="@cdktf/provider-google.storageBucket.StorageBucket.resetUniformBucketLevelAccess"></a>

```typescript
public resetUniformBucketLevelAccess(): void
```

##### `resetVersioning` <a name="resetVersioning" id="@cdktf/provider-google.storageBucket.StorageBucket.resetVersioning"></a>

```typescript
public resetVersioning(): void
```

##### `resetWebsite` <a name="resetWebsite" id="@cdktf/provider-google.storageBucket.StorageBucket.resetWebsite"></a>

```typescript
public resetWebsite(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StorageBucket resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.storageBucket.StorageBucket.isConstruct"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

storageBucket.StorageBucket.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageBucket.StorageBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.storageBucket.StorageBucket.isTerraformElement"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

storageBucket.StorageBucket.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageBucket.StorageBucket.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.storageBucket.StorageBucket.isTerraformResource"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

storageBucket.StorageBucket.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageBucket.StorageBucket.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.storageBucket.StorageBucket.generateConfigForImport"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

storageBucket.StorageBucket.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StorageBucket resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageBucket.StorageBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.storageBucket.StorageBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageBucket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.storageBucket.StorageBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBucket.StorageBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StorageBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.autoclass">autoclass</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference">StorageBucketAutoclassOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList">StorageBucketCorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.customPlacementConfig">customPlacementConfig</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference">StorageBucketCustomPlacementConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference">StorageBucketEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.hierarchicalNamespace">hierarchicalNamespace</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference">StorageBucketHierarchicalNamespaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.lifecycleRule">lifecycleRule</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList">StorageBucketLifecycleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference">StorageBucketLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.projectNumber">projectNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference">StorageBucketRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.softDeletePolicy">softDeletePolicy</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference">StorageBucketSoftDeletePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference">StorageBucketTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.versioning">versioning</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference">StorageBucketVersioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.website">website</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference">StorageBucketWebsiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.autoclassInput">autoclassInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.corsInput">corsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.storageBucket.StorageBucketCors">StorageBucketCors</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.customPlacementConfigInput">customPlacementConfigInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.defaultEventBasedHoldInput">defaultEventBasedHoldInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.enableObjectRetentionInput">enableObjectRetentionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.encryptionInput">encryptionInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.forceDestroyInput">forceDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.hierarchicalNamespaceInput">hierarchicalNamespaceInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace">StorageBucketHierarchicalNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.lifecycleRuleInput">lifecycleRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule">StorageBucketLifecycleRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.loggingInput">loggingInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.publicAccessPreventionInput">publicAccessPreventionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.requesterPaysInput">requesterPaysInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.retentionPolicyInput">retentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.rpoInput">rpoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.softDeletePolicyInput">softDeletePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy">StorageBucketSoftDeletePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.storageClassInput">storageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts">StorageBucketTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.uniformBucketLevelAccessInput">uniformBucketLevelAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.versioningInput">versioningInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.websiteInput">websiteInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.defaultEventBasedHold">defaultEventBasedHold</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.enableObjectRetention">enableObjectRetention</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.publicAccessPrevention">publicAccessPrevention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.requesterPays">requesterPays</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.rpo">rpo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.uniformBucketLevelAccess">uniformBucketLevelAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.storageBucket.StorageBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.storageBucket.StorageBucket.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucket.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.storageBucket.StorageBucket.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.storageBucket.StorageBucket.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.storageBucket.StorageBucket.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.storageBucket.StorageBucket.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageBucket.StorageBucket.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageBucket.StorageBucket.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageBucket.StorageBucket.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageBucket.StorageBucket.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageBucket.StorageBucket.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBucket.StorageBucket.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageBucket.StorageBucket.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoclass`<sup>Required</sup> <a name="autoclass" id="@cdktf/provider-google.storageBucket.StorageBucket.property.autoclass"></a>

```typescript
public readonly autoclass: StorageBucketAutoclassOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference">StorageBucketAutoclassOutputReference</a>

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-google.storageBucket.StorageBucket.property.cors"></a>

```typescript
public readonly cors: StorageBucketCorsList;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList">StorageBucketCorsList</a>

---

##### `customPlacementConfig`<sup>Required</sup> <a name="customPlacementConfig" id="@cdktf/provider-google.storageBucket.StorageBucket.property.customPlacementConfig"></a>

```typescript
public readonly customPlacementConfig: StorageBucketCustomPlacementConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference">StorageBucketCustomPlacementConfigOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.storageBucket.StorageBucket.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-google.storageBucket.StorageBucket.property.encryption"></a>

```typescript
public readonly encryption: StorageBucketEncryptionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference">StorageBucketEncryptionOutputReference</a>

---

##### `hierarchicalNamespace`<sup>Required</sup> <a name="hierarchicalNamespace" id="@cdktf/provider-google.storageBucket.StorageBucket.property.hierarchicalNamespace"></a>

```typescript
public readonly hierarchicalNamespace: StorageBucketHierarchicalNamespaceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference">StorageBucketHierarchicalNamespaceOutputReference</a>

---

##### `lifecycleRule`<sup>Required</sup> <a name="lifecycleRule" id="@cdktf/provider-google.storageBucket.StorageBucket.property.lifecycleRule"></a>

```typescript
public readonly lifecycleRule: StorageBucketLifecycleRuleList;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList">StorageBucketLifecycleRuleList</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-google.storageBucket.StorageBucket.property.logging"></a>

```typescript
public readonly logging: StorageBucketLoggingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference">StorageBucketLoggingOutputReference</a>

---

##### `projectNumber`<sup>Required</sup> <a name="projectNumber" id="@cdktf/provider-google.storageBucket.StorageBucket.property.projectNumber"></a>

```typescript
public readonly projectNumber: number;
```

- *Type:* number

---

##### `retentionPolicy`<sup>Required</sup> <a name="retentionPolicy" id="@cdktf/provider-google.storageBucket.StorageBucket.property.retentionPolicy"></a>

```typescript
public readonly retentionPolicy: StorageBucketRetentionPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference">StorageBucketRetentionPolicyOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.storageBucket.StorageBucket.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `softDeletePolicy`<sup>Required</sup> <a name="softDeletePolicy" id="@cdktf/provider-google.storageBucket.StorageBucket.property.softDeletePolicy"></a>

```typescript
public readonly softDeletePolicy: StorageBucketSoftDeletePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference">StorageBucketSoftDeletePolicyOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.storageBucket.StorageBucket.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.storageBucket.StorageBucket.property.timeouts"></a>

```typescript
public readonly timeouts: StorageBucketTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference">StorageBucketTimeoutsOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.storageBucket.StorageBucket.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `versioning`<sup>Required</sup> <a name="versioning" id="@cdktf/provider-google.storageBucket.StorageBucket.property.versioning"></a>

```typescript
public readonly versioning: StorageBucketVersioningOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference">StorageBucketVersioningOutputReference</a>

---

##### `website`<sup>Required</sup> <a name="website" id="@cdktf/provider-google.storageBucket.StorageBucket.property.website"></a>

```typescript
public readonly website: StorageBucketWebsiteOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference">StorageBucketWebsiteOutputReference</a>

---

##### `autoclassInput`<sup>Optional</sup> <a name="autoclassInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.autoclassInput"></a>

```typescript
public readonly autoclassInput: StorageBucketAutoclass;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a>

---

##### `corsInput`<sup>Optional</sup> <a name="corsInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.corsInput"></a>

```typescript
public readonly corsInput: IResolvable | StorageBucketCors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.storageBucket.StorageBucketCors">StorageBucketCors</a>[]

---

##### `customPlacementConfigInput`<sup>Optional</sup> <a name="customPlacementConfigInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.customPlacementConfigInput"></a>

```typescript
public readonly customPlacementConfigInput: StorageBucketCustomPlacementConfig;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a>

---

##### `defaultEventBasedHoldInput`<sup>Optional</sup> <a name="defaultEventBasedHoldInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.defaultEventBasedHoldInput"></a>

```typescript
public readonly defaultEventBasedHoldInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableObjectRetentionInput`<sup>Optional</sup> <a name="enableObjectRetentionInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.enableObjectRetentionInput"></a>

```typescript
public readonly enableObjectRetentionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.encryptionInput"></a>

```typescript
public readonly encryptionInput: StorageBucketEncryption;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a>

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.forceDestroyInput"></a>

```typescript
public readonly forceDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hierarchicalNamespaceInput`<sup>Optional</sup> <a name="hierarchicalNamespaceInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.hierarchicalNamespaceInput"></a>

```typescript
public readonly hierarchicalNamespaceInput: StorageBucketHierarchicalNamespace;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace">StorageBucketHierarchicalNamespace</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `lifecycleRuleInput`<sup>Optional</sup> <a name="lifecycleRuleInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.lifecycleRuleInput"></a>

```typescript
public readonly lifecycleRuleInput: IResolvable | StorageBucketLifecycleRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule">StorageBucketLifecycleRule</a>[]

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `loggingInput`<sup>Optional</sup> <a name="loggingInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.loggingInput"></a>

```typescript
public readonly loggingInput: StorageBucketLogging;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `publicAccessPreventionInput`<sup>Optional</sup> <a name="publicAccessPreventionInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.publicAccessPreventionInput"></a>

```typescript
public readonly publicAccessPreventionInput: string;
```

- *Type:* string

---

##### `requesterPaysInput`<sup>Optional</sup> <a name="requesterPaysInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.requesterPaysInput"></a>

```typescript
public readonly requesterPaysInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionPolicyInput`<sup>Optional</sup> <a name="retentionPolicyInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.retentionPolicyInput"></a>

```typescript
public readonly retentionPolicyInput: StorageBucketRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a>

---

##### `rpoInput`<sup>Optional</sup> <a name="rpoInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.rpoInput"></a>

```typescript
public readonly rpoInput: string;
```

- *Type:* string

---

##### `softDeletePolicyInput`<sup>Optional</sup> <a name="softDeletePolicyInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.softDeletePolicyInput"></a>

```typescript
public readonly softDeletePolicyInput: StorageBucketSoftDeletePolicy;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy">StorageBucketSoftDeletePolicy</a>

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.storageClassInput"></a>

```typescript
public readonly storageClassInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StorageBucketTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts">StorageBucketTimeouts</a>

---

##### `uniformBucketLevelAccessInput`<sup>Optional</sup> <a name="uniformBucketLevelAccessInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.uniformBucketLevelAccessInput"></a>

```typescript
public readonly uniformBucketLevelAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `versioningInput`<sup>Optional</sup> <a name="versioningInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.versioningInput"></a>

```typescript
public readonly versioningInput: StorageBucketVersioning;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a>

---

##### `websiteInput`<sup>Optional</sup> <a name="websiteInput" id="@cdktf/provider-google.storageBucket.StorageBucket.property.websiteInput"></a>

```typescript
public readonly websiteInput: StorageBucketWebsite;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a>

---

##### `defaultEventBasedHold`<sup>Required</sup> <a name="defaultEventBasedHold" id="@cdktf/provider-google.storageBucket.StorageBucket.property.defaultEventBasedHold"></a>

```typescript
public readonly defaultEventBasedHold: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableObjectRetention`<sup>Required</sup> <a name="enableObjectRetention" id="@cdktf/provider-google.storageBucket.StorageBucket.property.enableObjectRetention"></a>

```typescript
public readonly enableObjectRetention: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-google.storageBucket.StorageBucket.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBucket.StorageBucket.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.storageBucket.StorageBucket.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.storageBucket.StorageBucket.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageBucket.StorageBucket.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.storageBucket.StorageBucket.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `publicAccessPrevention`<sup>Required</sup> <a name="publicAccessPrevention" id="@cdktf/provider-google.storageBucket.StorageBucket.property.publicAccessPrevention"></a>

```typescript
public readonly publicAccessPrevention: string;
```

- *Type:* string

---

##### `requesterPays`<sup>Required</sup> <a name="requesterPays" id="@cdktf/provider-google.storageBucket.StorageBucket.property.requesterPays"></a>

```typescript
public readonly requesterPays: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rpo`<sup>Required</sup> <a name="rpo" id="@cdktf/provider-google.storageBucket.StorageBucket.property.rpo"></a>

```typescript
public readonly rpo: string;
```

- *Type:* string

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-google.storageBucket.StorageBucket.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `uniformBucketLevelAccess`<sup>Required</sup> <a name="uniformBucketLevelAccess" id="@cdktf/provider-google.storageBucket.StorageBucket.property.uniformBucketLevelAccess"></a>

```typescript
public readonly uniformBucketLevelAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucket.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.storageBucket.StorageBucket.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageBucketAutoclass <a name="StorageBucketAutoclass" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclass"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclass.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

const storageBucketAutoclass: storageBucket.StorageBucketAutoclass = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | While set to true, autoclass automatically transitions objects in your bucket to appropriate storage classes based on each object's access pattern. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass.property.terminalStorageClass">terminalStorageClass</a></code> | <code>string</code> | The storage class that objects in the bucket eventually transition to if they are not read for a certain length of time. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclass.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

While set to true, autoclass automatically transitions objects in your bucket to appropriate storage classes based on each object's access pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#enabled StorageBucket#enabled}

---

##### `terminalStorageClass`<sup>Optional</sup> <a name="terminalStorageClass" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclass.property.terminalStorageClass"></a>

```typescript
public readonly terminalStorageClass: string;
```

- *Type:* string

The storage class that objects in the bucket eventually transition to if they are not read for a certain length of time.

Supported values include: NEARLINE, ARCHIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#terminal_storage_class StorageBucket#terminal_storage_class}

---

### StorageBucketConfig <a name="StorageBucketConfig" id="@cdktf/provider-google.storageBucket.StorageBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

const storageBucketConfig: storageBucket.StorageBucketConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.location">location</a></code> | <code>string</code> | The Google Cloud Storage location or region. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.name">name</a></code> | <code>string</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.autoclass">autoclass</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a></code> | autoclass block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.cors">cors</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.storageBucket.StorageBucketCors">StorageBucketCors</a>[]</code> | cors block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.customPlacementConfig">customPlacementConfig</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a></code> | custom_placement_config block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.defaultEventBasedHold">defaultEventBasedHold</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not to automatically apply an eventBasedHold to new objects added to the bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.enableObjectRetention">enableObjectRetention</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables each object in the bucket to have its own retention policy, which prevents deletion until stored for a specific length of time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a></code> | encryption block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | When deleting a bucket, this boolean option will delete all contained objects. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.hierarchicalNamespace">hierarchicalNamespace</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace">StorageBucketHierarchicalNamespace</a></code> | hierarchical_namespace block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#id StorageBucket#id}. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | A set of key/value label pairs to assign to the bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.lifecycleRule">lifecycleRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule">StorageBucketLifecycleRule</a>[]</code> | lifecycle_rule block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.project">project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.publicAccessPrevention">publicAccessPrevention</a></code> | <code>string</code> | Prevents public access to a bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.requesterPays">requesterPays</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables Requester Pays on a storage bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.rpo">rpo</a></code> | <code>string</code> | Specifies the RPO setting of bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.softDeletePolicy">softDeletePolicy</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy">StorageBucketSoftDeletePolicy</a></code> | soft_delete_policy block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.storageClass">storageClass</a></code> | <code>string</code> | The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts">StorageBucketTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.uniformBucketLevelAccess">uniformBucketLevelAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables uniform bucket-level access on a bucket. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.versioning">versioning</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a></code> | versioning block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketConfig.property.website">website</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a></code> | website block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The Google Cloud Storage location or region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#location StorageBucket#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#name StorageBucket#name}

---

##### `autoclass`<sup>Optional</sup> <a name="autoclass" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.autoclass"></a>

```typescript
public readonly autoclass: StorageBucketAutoclass;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a>

autoclass block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#autoclass StorageBucket#autoclass}

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.cors"></a>

```typescript
public readonly cors: IResolvable | StorageBucketCors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.storageBucket.StorageBucketCors">StorageBucketCors</a>[]

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#cors StorageBucket#cors}

---

##### `customPlacementConfig`<sup>Optional</sup> <a name="customPlacementConfig" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.customPlacementConfig"></a>

```typescript
public readonly customPlacementConfig: StorageBucketCustomPlacementConfig;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a>

custom_placement_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#custom_placement_config StorageBucket#custom_placement_config}

---

##### `defaultEventBasedHold`<sup>Optional</sup> <a name="defaultEventBasedHold" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.defaultEventBasedHold"></a>

```typescript
public readonly defaultEventBasedHold: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not to automatically apply an eventBasedHold to new objects added to the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#default_event_based_hold StorageBucket#default_event_based_hold}

---

##### `enableObjectRetention`<sup>Optional</sup> <a name="enableObjectRetention" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.enableObjectRetention"></a>

```typescript
public readonly enableObjectRetention: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables each object in the bucket to have its own retention policy, which prevents deletion until stored for a specific length of time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#enable_object_retention StorageBucket#enable_object_retention}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.encryption"></a>

```typescript
public readonly encryption: StorageBucketEncryption;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#encryption StorageBucket#encryption}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When deleting a bucket, this boolean option will delete all contained objects.

If you try to delete a bucket that contains objects, Terraform will fail that run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#force_destroy StorageBucket#force_destroy}

---

##### `hierarchicalNamespace`<sup>Optional</sup> <a name="hierarchicalNamespace" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.hierarchicalNamespace"></a>

```typescript
public readonly hierarchicalNamespace: StorageBucketHierarchicalNamespace;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace">StorageBucketHierarchicalNamespace</a>

hierarchical_namespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#hierarchical_namespace StorageBucket#hierarchical_namespace}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#id StorageBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A set of key/value label pairs to assign to the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#labels StorageBucket#labels}

---

##### `lifecycleRule`<sup>Optional</sup> <a name="lifecycleRule" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.lifecycleRule"></a>

```typescript
public readonly lifecycleRule: IResolvable | StorageBucketLifecycleRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule">StorageBucketLifecycleRule</a>[]

lifecycle_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#lifecycle_rule StorageBucket#lifecycle_rule}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.logging"></a>

```typescript
public readonly logging: StorageBucketLogging;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#logging StorageBucket#logging}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#project StorageBucket#project}

---

##### `publicAccessPrevention`<sup>Optional</sup> <a name="publicAccessPrevention" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.publicAccessPrevention"></a>

```typescript
public readonly publicAccessPrevention: string;
```

- *Type:* string

Prevents public access to a bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#public_access_prevention StorageBucket#public_access_prevention}

---

##### `requesterPays`<sup>Optional</sup> <a name="requesterPays" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.requesterPays"></a>

```typescript
public readonly requesterPays: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables Requester Pays on a storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#requester_pays StorageBucket#requester_pays}

---

##### `retentionPolicy`<sup>Optional</sup> <a name="retentionPolicy" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.retentionPolicy"></a>

```typescript
public readonly retentionPolicy: StorageBucketRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#retention_policy StorageBucket#retention_policy}

---

##### `rpo`<sup>Optional</sup> <a name="rpo" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.rpo"></a>

```typescript
public readonly rpo: string;
```

- *Type:* string

Specifies the RPO setting of bucket.

If set 'ASYNC_TURBO', The Turbo Replication will be enabled for the dual-region bucket. Value 'DEFAULT' will set RPO setting to default. Turbo Replication is only for buckets in dual-regions.See the docs for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#rpo StorageBucket#rpo}

---

##### `softDeletePolicy`<sup>Optional</sup> <a name="softDeletePolicy" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.softDeletePolicy"></a>

```typescript
public readonly softDeletePolicy: StorageBucketSoftDeletePolicy;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy">StorageBucketSoftDeletePolicy</a>

soft_delete_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#soft_delete_policy StorageBucket#soft_delete_policy}

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#storage_class StorageBucket#storage_class}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StorageBucketTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts">StorageBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#timeouts StorageBucket#timeouts}

---

##### `uniformBucketLevelAccess`<sup>Optional</sup> <a name="uniformBucketLevelAccess" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.uniformBucketLevelAccess"></a>

```typescript
public readonly uniformBucketLevelAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables uniform bucket-level access on a bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#uniform_bucket_level_access StorageBucket#uniform_bucket_level_access}

---

##### `versioning`<sup>Optional</sup> <a name="versioning" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.versioning"></a>

```typescript
public readonly versioning: StorageBucketVersioning;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a>

versioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#versioning StorageBucket#versioning}

---

##### `website`<sup>Optional</sup> <a name="website" id="@cdktf/provider-google.storageBucket.StorageBucketConfig.property.website"></a>

```typescript
public readonly website: StorageBucketWebsite;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a>

website block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#website StorageBucket#website}

---

### StorageBucketCors <a name="StorageBucketCors" id="@cdktf/provider-google.storageBucket.StorageBucketCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketCors.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

const storageBucketCors: storageBucket.StorageBucketCors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCors.property.maxAgeSeconds">maxAgeSeconds</a></code> | <code>number</code> | The value, in seconds, to return in the Access-Control-Max-Age header used in preflight responses. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCors.property.method">method</a></code> | <code>string[]</code> | The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "*" is permitted in the list of methods, and means "any method". |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCors.property.origin">origin</a></code> | <code>string[]</code> | The list of Origins eligible to receive CORS response headers. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCors.property.responseHeader">responseHeader</a></code> | <code>string[]</code> | The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains. |

---

##### `maxAgeSeconds`<sup>Optional</sup> <a name="maxAgeSeconds" id="@cdktf/provider-google.storageBucket.StorageBucketCors.property.maxAgeSeconds"></a>

```typescript
public readonly maxAgeSeconds: number;
```

- *Type:* number

The value, in seconds, to return in the Access-Control-Max-Age header used in preflight responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#max_age_seconds StorageBucket#max_age_seconds}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google.storageBucket.StorageBucketCors.property.method"></a>

```typescript
public readonly method: string[];
```

- *Type:* string[]

The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "*" is permitted in the list of methods, and means "any method".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#method StorageBucket#method}

---

##### `origin`<sup>Optional</sup> <a name="origin" id="@cdktf/provider-google.storageBucket.StorageBucketCors.property.origin"></a>

```typescript
public readonly origin: string[];
```

- *Type:* string[]

The list of Origins eligible to receive CORS response headers.

Note: "*" is permitted in the list of origins, and means "any Origin".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#origin StorageBucket#origin}

---

##### `responseHeader`<sup>Optional</sup> <a name="responseHeader" id="@cdktf/provider-google.storageBucket.StorageBucketCors.property.responseHeader"></a>

```typescript
public readonly responseHeader: string[];
```

- *Type:* string[]

The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#response_header StorageBucket#response_header}

---

### StorageBucketCustomPlacementConfig <a name="StorageBucketCustomPlacementConfig" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

const storageBucketCustomPlacementConfig: storageBucket.StorageBucketCustomPlacementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig.property.dataLocations">dataLocations</a></code> | <code>string[]</code> | The list of individual regions that comprise a dual-region bucket. |

---

##### `dataLocations`<sup>Required</sup> <a name="dataLocations" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig.property.dataLocations"></a>

```typescript
public readonly dataLocations: string[];
```

- *Type:* string[]

The list of individual regions that comprise a dual-region bucket.

See the docs for a list of acceptable regions. Note: If any of the data_locations changes, it will recreate the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#data_locations StorageBucket#data_locations}

---

### StorageBucketEncryption <a name="StorageBucketEncryption" id="@cdktf/provider-google.storageBucket.StorageBucketEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketEncryption.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

const storageBucketEncryption: storageBucket.StorageBucketEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption.property.defaultKmsKeyName">defaultKmsKeyName</a></code> | <code>string</code> | A Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified. |

---

##### `defaultKmsKeyName`<sup>Required</sup> <a name="defaultKmsKeyName" id="@cdktf/provider-google.storageBucket.StorageBucketEncryption.property.defaultKmsKeyName"></a>

```typescript
public readonly defaultKmsKeyName: string;
```

- *Type:* string

A Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified.

You must pay attention to whether the crypto key is available in the location that this bucket is created in. See the docs for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#default_kms_key_name StorageBucket#default_kms_key_name}

---

### StorageBucketHierarchicalNamespace <a name="StorageBucketHierarchicalNamespace" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

const storageBucketHierarchicalNamespace: storageBucket.StorageBucketHierarchicalNamespace = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set this field true to organize bucket with logical file system structure. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set this field true to organize bucket with logical file system structure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#enabled StorageBucket#enabled}

---

### StorageBucketLifecycleRule <a name="StorageBucketLifecycleRule" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

const storageBucketLifecycleRule: storageBucket.StorageBucketLifecycleRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule.property.action">action</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a></code> | condition block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule.property.action"></a>

```typescript
public readonly action: StorageBucketLifecycleRuleAction;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#action StorageBucket#action}

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule.property.condition"></a>

```typescript
public readonly condition: StorageBucketLifecycleRuleCondition;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#condition StorageBucket#condition}

---

### StorageBucketLifecycleRuleAction <a name="StorageBucketLifecycleRuleAction" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

const storageBucketLifecycleRuleAction: storageBucket.StorageBucketLifecycleRuleAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction.property.type">type</a></code> | <code>string</code> | The type of the action of this Lifecycle Rule. Supported values include: Delete, SetStorageClass and AbortIncompleteMultipartUpload. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction.property.storageClass">storageClass</a></code> | <code>string</code> | The target Storage Class of objects affected by this Lifecycle Rule. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the action of this Lifecycle Rule. Supported values include: Delete, SetStorageClass and AbortIncompleteMultipartUpload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#type StorageBucket#type}

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

The target Storage Class of objects affected by this Lifecycle Rule. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#storage_class StorageBucket#storage_class}

---

### StorageBucketLifecycleRuleCondition <a name="StorageBucketLifecycleRuleCondition" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

const storageBucketLifecycleRuleCondition: storageBucket.StorageBucketLifecycleRuleCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.age">age</a></code> | <code>number</code> | Minimum age of an object in days to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.createdBefore">createdBefore</a></code> | <code>string</code> | Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.customTimeBefore">customTimeBefore</a></code> | <code>string</code> | Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.daysSinceCustomTime">daysSinceCustomTime</a></code> | <code>number</code> | Number of days elapsed since the user-specified timestamp set on an object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.daysSinceNoncurrentTime">daysSinceNoncurrentTime</a></code> | <code>number</code> | Number of days elapsed since the noncurrent timestamp of an object. This 										condition is relevant only for versioned objects. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.matchesPrefix">matchesPrefix</a></code> | <code>string[]</code> | One or more matching name prefixes to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.matchesStorageClass">matchesStorageClass</a></code> | <code>string[]</code> | Storage Class of objects to satisfy this condition. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, DURABLE_REDUCED_AVAILABILITY. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.matchesSuffix">matchesSuffix</a></code> | <code>string[]</code> | One or more matching name suffixes to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.noncurrentTimeBefore">noncurrentTimeBefore</a></code> | <code>string</code> | Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.numNewerVersions">numNewerVersions</a></code> | <code>number</code> | Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.sendAgeIfZero">sendAgeIfZero</a></code> | <code>boolean \| cdktf.IResolvable</code> | While set true, age value will be sent in the request even for zero value of the field. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.sendDaysSinceCustomTimeIfZero">sendDaysSinceCustomTimeIfZero</a></code> | <code>boolean \| cdktf.IResolvable</code> | While set true, days_since_custom_time value will be sent in the request even for zero value of the field. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.sendDaysSinceNoncurrentTimeIfZero">sendDaysSinceNoncurrentTimeIfZero</a></code> | <code>boolean \| cdktf.IResolvable</code> | While set true, days_since_noncurrent_time value will be sent in the request even for zero value of the field. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.sendNumNewerVersionsIfZero">sendNumNewerVersionsIfZero</a></code> | <code>boolean \| cdktf.IResolvable</code> | While set true, num_newer_versions value will be sent in the request even for zero value of the field. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.withState">withState</a></code> | <code>string</code> | Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: "LIVE", "ARCHIVED", "ANY". |

---

##### `age`<sup>Optional</sup> <a name="age" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.age"></a>

```typescript
public readonly age: number;
```

- *Type:* number

Minimum age of an object in days to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#age StorageBucket#age}

---

##### `createdBefore`<sup>Optional</sup> <a name="createdBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.createdBefore"></a>

```typescript
public readonly createdBefore: string;
```

- *Type:* string

Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#created_before StorageBucket#created_before}

---

##### `customTimeBefore`<sup>Optional</sup> <a name="customTimeBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.customTimeBefore"></a>

```typescript
public readonly customTimeBefore: string;
```

- *Type:* string

Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#custom_time_before StorageBucket#custom_time_before}

---

##### `daysSinceCustomTime`<sup>Optional</sup> <a name="daysSinceCustomTime" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.daysSinceCustomTime"></a>

```typescript
public readonly daysSinceCustomTime: number;
```

- *Type:* number

Number of days elapsed since the user-specified timestamp set on an object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#days_since_custom_time StorageBucket#days_since_custom_time}

---

##### `daysSinceNoncurrentTime`<sup>Optional</sup> <a name="daysSinceNoncurrentTime" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.daysSinceNoncurrentTime"></a>

```typescript
public readonly daysSinceNoncurrentTime: number;
```

- *Type:* number

Number of days elapsed since the noncurrent timestamp of an object. This 										condition is relevant only for versioned objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#days_since_noncurrent_time StorageBucket#days_since_noncurrent_time}

---

##### `matchesPrefix`<sup>Optional</sup> <a name="matchesPrefix" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.matchesPrefix"></a>

```typescript
public readonly matchesPrefix: string[];
```

- *Type:* string[]

One or more matching name prefixes to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#matches_prefix StorageBucket#matches_prefix}

---

##### `matchesStorageClass`<sup>Optional</sup> <a name="matchesStorageClass" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.matchesStorageClass"></a>

```typescript
public readonly matchesStorageClass: string[];
```

- *Type:* string[]

Storage Class of objects to satisfy this condition. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, DURABLE_REDUCED_AVAILABILITY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#matches_storage_class StorageBucket#matches_storage_class}

---

##### `matchesSuffix`<sup>Optional</sup> <a name="matchesSuffix" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.matchesSuffix"></a>

```typescript
public readonly matchesSuffix: string[];
```

- *Type:* string[]

One or more matching name suffixes to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#matches_suffix StorageBucket#matches_suffix}

---

##### `noncurrentTimeBefore`<sup>Optional</sup> <a name="noncurrentTimeBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.noncurrentTimeBefore"></a>

```typescript
public readonly noncurrentTimeBefore: string;
```

- *Type:* string

Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#noncurrent_time_before StorageBucket#noncurrent_time_before}

---

##### `numNewerVersions`<sup>Optional</sup> <a name="numNewerVersions" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.numNewerVersions"></a>

```typescript
public readonly numNewerVersions: number;
```

- *Type:* number

Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#num_newer_versions StorageBucket#num_newer_versions}

---

##### `sendAgeIfZero`<sup>Optional</sup> <a name="sendAgeIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.sendAgeIfZero"></a>

```typescript
public readonly sendAgeIfZero: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

While set true, age value will be sent in the request even for zero value of the field.

This field is only useful for setting 0 value to the age field. It can be used alone or together with age.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#send_age_if_zero StorageBucket#send_age_if_zero}

---

##### `sendDaysSinceCustomTimeIfZero`<sup>Optional</sup> <a name="sendDaysSinceCustomTimeIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.sendDaysSinceCustomTimeIfZero"></a>

```typescript
public readonly sendDaysSinceCustomTimeIfZero: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

While set true, days_since_custom_time value will be sent in the request even for zero value of the field.

This field is only useful for setting 0 value to the days_since_custom_time field. It can be used alone or together with days_since_custom_time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#send_days_since_custom_time_if_zero StorageBucket#send_days_since_custom_time_if_zero}

---

##### `sendDaysSinceNoncurrentTimeIfZero`<sup>Optional</sup> <a name="sendDaysSinceNoncurrentTimeIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.sendDaysSinceNoncurrentTimeIfZero"></a>

```typescript
public readonly sendDaysSinceNoncurrentTimeIfZero: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

While set true, days_since_noncurrent_time value will be sent in the request even for zero value of the field.

This field is only useful for setting 0 value to the days_since_noncurrent_time field. It can be used alone or together with days_since_noncurrent_time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#send_days_since_noncurrent_time_if_zero StorageBucket#send_days_since_noncurrent_time_if_zero}

---

##### `sendNumNewerVersionsIfZero`<sup>Optional</sup> <a name="sendNumNewerVersionsIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.sendNumNewerVersionsIfZero"></a>

```typescript
public readonly sendNumNewerVersionsIfZero: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

While set true, num_newer_versions value will be sent in the request even for zero value of the field.

This field is only useful for setting 0 value to the num_newer_versions field. It can be used alone or together with num_newer_versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#send_num_newer_versions_if_zero StorageBucket#send_num_newer_versions_if_zero}

---

##### `withState`<sup>Optional</sup> <a name="withState" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition.property.withState"></a>

```typescript
public readonly withState: string;
```

- *Type:* string

Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: "LIVE", "ARCHIVED", "ANY".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#with_state StorageBucket#with_state}

---

### StorageBucketLogging <a name="StorageBucketLogging" id="@cdktf/provider-google.storageBucket.StorageBucketLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketLogging.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

const storageBucketLogging: storageBucket.StorageBucketLogging = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging.property.logBucket">logBucket</a></code> | <code>string</code> | The bucket that will receive log objects. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging.property.logObjectPrefix">logObjectPrefix</a></code> | <code>string</code> | The object prefix for log objects. |

---

##### `logBucket`<sup>Required</sup> <a name="logBucket" id="@cdktf/provider-google.storageBucket.StorageBucketLogging.property.logBucket"></a>

```typescript
public readonly logBucket: string;
```

- *Type:* string

The bucket that will receive log objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#log_bucket StorageBucket#log_bucket}

---

##### `logObjectPrefix`<sup>Optional</sup> <a name="logObjectPrefix" id="@cdktf/provider-google.storageBucket.StorageBucketLogging.property.logObjectPrefix"></a>

```typescript
public readonly logObjectPrefix: string;
```

- *Type:* string

The object prefix for log objects.

If it's not provided, by default Google Cloud Storage sets this to this bucket's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#log_object_prefix StorageBucket#log_object_prefix}

---

### StorageBucketRetentionPolicy <a name="StorageBucketRetentionPolicy" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

const storageBucketRetentionPolicy: storageBucket.StorageBucketRetentionPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy.property.retentionPeriod">retentionPeriod</a></code> | <code>number</code> | The period of time, in seconds, that objects in the bucket must be retained and cannot be deleted, overwritten, or archived. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy.property.isLocked">isLocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, the bucket will be locked and permanently restrict edits to the bucket's retention policy. |

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: number;
```

- *Type:* number

The period of time, in seconds, that objects in the bucket must be retained and cannot be deleted, overwritten, or archived.

The value must be less than 3,155,760,000 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#retention_period StorageBucket#retention_period}

---

##### `isLocked`<sup>Optional</sup> <a name="isLocked" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy.property.isLocked"></a>

```typescript
public readonly isLocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, the bucket will be locked and permanently restrict edits to the bucket's retention policy.

Caution: Locking a bucket is an irreversible action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#is_locked StorageBucket#is_locked}

---

### StorageBucketSoftDeletePolicy <a name="StorageBucketSoftDeletePolicy" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

const storageBucketSoftDeletePolicy: storageBucket.StorageBucketSoftDeletePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy.property.retentionDurationSeconds">retentionDurationSeconds</a></code> | <code>number</code> | The duration in seconds that soft-deleted objects in the bucket will be retained and cannot be permanently deleted. |

---

##### `retentionDurationSeconds`<sup>Optional</sup> <a name="retentionDurationSeconds" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy.property.retentionDurationSeconds"></a>

```typescript
public readonly retentionDurationSeconds: number;
```

- *Type:* number

The duration in seconds that soft-deleted objects in the bucket will be retained and cannot be permanently deleted.

Default value is 604800.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#retention_duration_seconds StorageBucket#retention_duration_seconds}

---

### StorageBucketTimeouts <a name="StorageBucketTimeouts" id="@cdktf/provider-google.storageBucket.StorageBucketTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketTimeouts.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

const storageBucketTimeouts: storageBucket.StorageBucketTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#create StorageBucket#create}. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#read StorageBucket#read}. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#update StorageBucket#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.storageBucket.StorageBucketTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#create StorageBucket#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google.storageBucket.StorageBucketTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#read StorageBucket#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.storageBucket.StorageBucketTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#update StorageBucket#update}.

---

### StorageBucketVersioning <a name="StorageBucketVersioning" id="@cdktf/provider-google.storageBucket.StorageBucketVersioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketVersioning.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

const storageBucketVersioning: storageBucket.StorageBucketVersioning = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | While set to true, versioning is fully enabled for this bucket. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.storageBucket.StorageBucketVersioning.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

While set to true, versioning is fully enabled for this bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#enabled StorageBucket#enabled}

---

### StorageBucketWebsite <a name="StorageBucketWebsite" id="@cdktf/provider-google.storageBucket.StorageBucketWebsite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucket.StorageBucketWebsite.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

const storageBucketWebsite: storageBucket.StorageBucketWebsite = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite.property.mainPageSuffix">mainPageSuffix</a></code> | <code>string</code> | Behaves as the bucket's directory index where missing objects are treated as potential directories. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite.property.notFoundPage">notFoundPage</a></code> | <code>string</code> | The custom object to return when a requested resource is not found. |

---

##### `mainPageSuffix`<sup>Optional</sup> <a name="mainPageSuffix" id="@cdktf/provider-google.storageBucket.StorageBucketWebsite.property.mainPageSuffix"></a>

```typescript
public readonly mainPageSuffix: string;
```

- *Type:* string

Behaves as the bucket's directory index where missing objects are treated as potential directories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#main_page_suffix StorageBucket#main_page_suffix}

---

##### `notFoundPage`<sup>Optional</sup> <a name="notFoundPage" id="@cdktf/provider-google.storageBucket.StorageBucketWebsite.property.notFoundPage"></a>

```typescript
public readonly notFoundPage: string;
```

- *Type:* string

The custom object to return when a requested resource is not found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/storage_bucket#not_found_page StorageBucket#not_found_page}

---

## Classes <a name="Classes" id="Classes"></a>

### StorageBucketAutoclassOutputReference <a name="StorageBucketAutoclassOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

new storageBucket.StorageBucketAutoclassOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.resetTerminalStorageClass">resetTerminalStorageClass</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTerminalStorageClass` <a name="resetTerminalStorageClass" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.resetTerminalStorageClass"></a>

```typescript
public resetTerminalStorageClass(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.terminalStorageClassInput">terminalStorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.terminalStorageClass">terminalStorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `terminalStorageClassInput`<sup>Optional</sup> <a name="terminalStorageClassInput" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.terminalStorageClassInput"></a>

```typescript
public readonly terminalStorageClassInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `terminalStorageClass`<sup>Required</sup> <a name="terminalStorageClass" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.terminalStorageClass"></a>

```typescript
public readonly terminalStorageClass: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucket.StorageBucketAutoclassOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageBucketAutoclass;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketAutoclass">StorageBucketAutoclass</a>

---


### StorageBucketCorsList <a name="StorageBucketCorsList" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

new storageBucket.StorageBucketCorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.get"></a>

```typescript
public get(index: number): StorageBucketCorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.storageBucket.StorageBucketCors">StorageBucketCors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucket.StorageBucketCorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageBucketCors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.storageBucket.StorageBucketCors">StorageBucketCors</a>[]

---


### StorageBucketCorsOutputReference <a name="StorageBucketCorsOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

new storageBucket.StorageBucketCorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetMaxAgeSeconds">resetMaxAgeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetOrigin">resetOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetResponseHeader">resetResponseHeader</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxAgeSeconds` <a name="resetMaxAgeSeconds" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetMaxAgeSeconds"></a>

```typescript
public resetMaxAgeSeconds(): void
```

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetMethod"></a>

```typescript
public resetMethod(): void
```

##### `resetOrigin` <a name="resetOrigin" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetOrigin"></a>

```typescript
public resetOrigin(): void
```

##### `resetResponseHeader` <a name="resetResponseHeader" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.resetResponseHeader"></a>

```typescript
public resetResponseHeader(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.maxAgeSecondsInput">maxAgeSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.methodInput">methodInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.originInput">originInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.responseHeaderInput">responseHeaderInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.maxAgeSeconds">maxAgeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.method">method</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.origin">origin</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.responseHeader">responseHeader</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.storageBucket.StorageBucketCors">StorageBucketCors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxAgeSecondsInput`<sup>Optional</sup> <a name="maxAgeSecondsInput" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.maxAgeSecondsInput"></a>

```typescript
public readonly maxAgeSecondsInput: number;
```

- *Type:* number

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string[];
```

- *Type:* string[]

---

##### `originInput`<sup>Optional</sup> <a name="originInput" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.originInput"></a>

```typescript
public readonly originInput: string[];
```

- *Type:* string[]

---

##### `responseHeaderInput`<sup>Optional</sup> <a name="responseHeaderInput" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.responseHeaderInput"></a>

```typescript
public readonly responseHeaderInput: string[];
```

- *Type:* string[]

---

##### `maxAgeSeconds`<sup>Required</sup> <a name="maxAgeSeconds" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.maxAgeSeconds"></a>

```typescript
public readonly maxAgeSeconds: number;
```

- *Type:* number

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.method"></a>

```typescript
public readonly method: string[];
```

- *Type:* string[]

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.origin"></a>

```typescript
public readonly origin: string[];
```

- *Type:* string[]

---

##### `responseHeader`<sup>Required</sup> <a name="responseHeader" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.responseHeader"></a>

```typescript
public readonly responseHeader: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucket.StorageBucketCorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageBucketCors;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.storageBucket.StorageBucketCors">StorageBucketCors</a>

---


### StorageBucketCustomPlacementConfigOutputReference <a name="StorageBucketCustomPlacementConfigOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

new storageBucket.StorageBucketCustomPlacementConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.dataLocationsInput">dataLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.dataLocations">dataLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataLocationsInput`<sup>Optional</sup> <a name="dataLocationsInput" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.dataLocationsInput"></a>

```typescript
public readonly dataLocationsInput: string[];
```

- *Type:* string[]

---

##### `dataLocations`<sup>Required</sup> <a name="dataLocations" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.dataLocations"></a>

```typescript
public readonly dataLocations: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageBucketCustomPlacementConfig;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketCustomPlacementConfig">StorageBucketCustomPlacementConfig</a>

---


### StorageBucketEncryptionOutputReference <a name="StorageBucketEncryptionOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

new storageBucket.StorageBucketEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.defaultKmsKeyNameInput">defaultKmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.defaultKmsKeyName">defaultKmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultKmsKeyNameInput`<sup>Optional</sup> <a name="defaultKmsKeyNameInput" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.defaultKmsKeyNameInput"></a>

```typescript
public readonly defaultKmsKeyNameInput: string;
```

- *Type:* string

---

##### `defaultKmsKeyName`<sup>Required</sup> <a name="defaultKmsKeyName" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.defaultKmsKeyName"></a>

```typescript
public readonly defaultKmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucket.StorageBucketEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageBucketEncryption;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketEncryption">StorageBucketEncryption</a>

---


### StorageBucketHierarchicalNamespaceOutputReference <a name="StorageBucketHierarchicalNamespaceOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

new storageBucket.StorageBucketHierarchicalNamespaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace">StorageBucketHierarchicalNamespace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageBucketHierarchicalNamespace;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketHierarchicalNamespace">StorageBucketHierarchicalNamespace</a>

---


### StorageBucketLifecycleRuleActionOutputReference <a name="StorageBucketLifecycleRuleActionOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

new storageBucket.StorageBucketLifecycleRuleActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.resetStorageClass">resetStorageClass</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.resetStorageClass"></a>

```typescript
public resetStorageClass(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.storageClassInput">storageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.storageClassInput"></a>

```typescript
public readonly storageClassInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageBucketLifecycleRuleAction;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a>

---


### StorageBucketLifecycleRuleConditionOutputReference <a name="StorageBucketLifecycleRuleConditionOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

new storageBucket.StorageBucketLifecycleRuleConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetAge">resetAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetCreatedBefore">resetCreatedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetCustomTimeBefore">resetCustomTimeBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetDaysSinceCustomTime">resetDaysSinceCustomTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetDaysSinceNoncurrentTime">resetDaysSinceNoncurrentTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetMatchesPrefix">resetMatchesPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetMatchesStorageClass">resetMatchesStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetMatchesSuffix">resetMatchesSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetNoncurrentTimeBefore">resetNoncurrentTimeBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetNumNewerVersions">resetNumNewerVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetSendAgeIfZero">resetSendAgeIfZero</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetSendDaysSinceCustomTimeIfZero">resetSendDaysSinceCustomTimeIfZero</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetSendDaysSinceNoncurrentTimeIfZero">resetSendDaysSinceNoncurrentTimeIfZero</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetSendNumNewerVersionsIfZero">resetSendNumNewerVersionsIfZero</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetWithState">resetWithState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAge` <a name="resetAge" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetAge"></a>

```typescript
public resetAge(): void
```

##### `resetCreatedBefore` <a name="resetCreatedBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetCreatedBefore"></a>

```typescript
public resetCreatedBefore(): void
```

##### `resetCustomTimeBefore` <a name="resetCustomTimeBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetCustomTimeBefore"></a>

```typescript
public resetCustomTimeBefore(): void
```

##### `resetDaysSinceCustomTime` <a name="resetDaysSinceCustomTime" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetDaysSinceCustomTime"></a>

```typescript
public resetDaysSinceCustomTime(): void
```

##### `resetDaysSinceNoncurrentTime` <a name="resetDaysSinceNoncurrentTime" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetDaysSinceNoncurrentTime"></a>

```typescript
public resetDaysSinceNoncurrentTime(): void
```

##### `resetMatchesPrefix` <a name="resetMatchesPrefix" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetMatchesPrefix"></a>

```typescript
public resetMatchesPrefix(): void
```

##### `resetMatchesStorageClass` <a name="resetMatchesStorageClass" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetMatchesStorageClass"></a>

```typescript
public resetMatchesStorageClass(): void
```

##### `resetMatchesSuffix` <a name="resetMatchesSuffix" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetMatchesSuffix"></a>

```typescript
public resetMatchesSuffix(): void
```

##### `resetNoncurrentTimeBefore` <a name="resetNoncurrentTimeBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetNoncurrentTimeBefore"></a>

```typescript
public resetNoncurrentTimeBefore(): void
```

##### `resetNumNewerVersions` <a name="resetNumNewerVersions" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetNumNewerVersions"></a>

```typescript
public resetNumNewerVersions(): void
```

##### `resetSendAgeIfZero` <a name="resetSendAgeIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetSendAgeIfZero"></a>

```typescript
public resetSendAgeIfZero(): void
```

##### `resetSendDaysSinceCustomTimeIfZero` <a name="resetSendDaysSinceCustomTimeIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetSendDaysSinceCustomTimeIfZero"></a>

```typescript
public resetSendDaysSinceCustomTimeIfZero(): void
```

##### `resetSendDaysSinceNoncurrentTimeIfZero` <a name="resetSendDaysSinceNoncurrentTimeIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetSendDaysSinceNoncurrentTimeIfZero"></a>

```typescript
public resetSendDaysSinceNoncurrentTimeIfZero(): void
```

##### `resetSendNumNewerVersionsIfZero` <a name="resetSendNumNewerVersionsIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetSendNumNewerVersionsIfZero"></a>

```typescript
public resetSendNumNewerVersionsIfZero(): void
```

##### `resetWithState` <a name="resetWithState" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.resetWithState"></a>

```typescript
public resetWithState(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.ageInput">ageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.createdBeforeInput">createdBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.customTimeBeforeInput">customTimeBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTimeInput">daysSinceCustomTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTimeInput">daysSinceNoncurrentTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefixInput">matchesPrefixInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClassInput">matchesStorageClassInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffixInput">matchesSuffixInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBeforeInput">noncurrentTimeBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersionsInput">numNewerVersionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendAgeIfZeroInput">sendAgeIfZeroInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceCustomTimeIfZeroInput">sendDaysSinceCustomTimeIfZeroInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceNoncurrentTimeIfZeroInput">sendDaysSinceNoncurrentTimeIfZeroInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendNumNewerVersionsIfZeroInput">sendNumNewerVersionsIfZeroInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.withStateInput">withStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.age">age</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.createdBefore">createdBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.customTimeBefore">customTimeBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTime">daysSinceCustomTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTime">daysSinceNoncurrentTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefix">matchesPrefix</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClass">matchesStorageClass</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffix">matchesSuffix</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBefore">noncurrentTimeBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersions">numNewerVersions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendAgeIfZero">sendAgeIfZero</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceCustomTimeIfZero">sendDaysSinceCustomTimeIfZero</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceNoncurrentTimeIfZero">sendDaysSinceNoncurrentTimeIfZero</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendNumNewerVersionsIfZero">sendNumNewerVersionsIfZero</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.withState">withState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ageInput`<sup>Optional</sup> <a name="ageInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.ageInput"></a>

```typescript
public readonly ageInput: number;
```

- *Type:* number

---

##### `createdBeforeInput`<sup>Optional</sup> <a name="createdBeforeInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.createdBeforeInput"></a>

```typescript
public readonly createdBeforeInput: string;
```

- *Type:* string

---

##### `customTimeBeforeInput`<sup>Optional</sup> <a name="customTimeBeforeInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.customTimeBeforeInput"></a>

```typescript
public readonly customTimeBeforeInput: string;
```

- *Type:* string

---

##### `daysSinceCustomTimeInput`<sup>Optional</sup> <a name="daysSinceCustomTimeInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTimeInput"></a>

```typescript
public readonly daysSinceCustomTimeInput: number;
```

- *Type:* number

---

##### `daysSinceNoncurrentTimeInput`<sup>Optional</sup> <a name="daysSinceNoncurrentTimeInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTimeInput"></a>

```typescript
public readonly daysSinceNoncurrentTimeInput: number;
```

- *Type:* number

---

##### `matchesPrefixInput`<sup>Optional</sup> <a name="matchesPrefixInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefixInput"></a>

```typescript
public readonly matchesPrefixInput: string[];
```

- *Type:* string[]

---

##### `matchesStorageClassInput`<sup>Optional</sup> <a name="matchesStorageClassInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClassInput"></a>

```typescript
public readonly matchesStorageClassInput: string[];
```

- *Type:* string[]

---

##### `matchesSuffixInput`<sup>Optional</sup> <a name="matchesSuffixInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffixInput"></a>

```typescript
public readonly matchesSuffixInput: string[];
```

- *Type:* string[]

---

##### `noncurrentTimeBeforeInput`<sup>Optional</sup> <a name="noncurrentTimeBeforeInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBeforeInput"></a>

```typescript
public readonly noncurrentTimeBeforeInput: string;
```

- *Type:* string

---

##### `numNewerVersionsInput`<sup>Optional</sup> <a name="numNewerVersionsInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersionsInput"></a>

```typescript
public readonly numNewerVersionsInput: number;
```

- *Type:* number

---

##### `sendAgeIfZeroInput`<sup>Optional</sup> <a name="sendAgeIfZeroInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendAgeIfZeroInput"></a>

```typescript
public readonly sendAgeIfZeroInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sendDaysSinceCustomTimeIfZeroInput`<sup>Optional</sup> <a name="sendDaysSinceCustomTimeIfZeroInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceCustomTimeIfZeroInput"></a>

```typescript
public readonly sendDaysSinceCustomTimeIfZeroInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sendDaysSinceNoncurrentTimeIfZeroInput`<sup>Optional</sup> <a name="sendDaysSinceNoncurrentTimeIfZeroInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceNoncurrentTimeIfZeroInput"></a>

```typescript
public readonly sendDaysSinceNoncurrentTimeIfZeroInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sendNumNewerVersionsIfZeroInput`<sup>Optional</sup> <a name="sendNumNewerVersionsIfZeroInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendNumNewerVersionsIfZeroInput"></a>

```typescript
public readonly sendNumNewerVersionsIfZeroInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `withStateInput`<sup>Optional</sup> <a name="withStateInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.withStateInput"></a>

```typescript
public readonly withStateInput: string;
```

- *Type:* string

---

##### `age`<sup>Required</sup> <a name="age" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.age"></a>

```typescript
public readonly age: number;
```

- *Type:* number

---

##### `createdBefore`<sup>Required</sup> <a name="createdBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.createdBefore"></a>

```typescript
public readonly createdBefore: string;
```

- *Type:* string

---

##### `customTimeBefore`<sup>Required</sup> <a name="customTimeBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.customTimeBefore"></a>

```typescript
public readonly customTimeBefore: string;
```

- *Type:* string

---

##### `daysSinceCustomTime`<sup>Required</sup> <a name="daysSinceCustomTime" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTime"></a>

```typescript
public readonly daysSinceCustomTime: number;
```

- *Type:* number

---

##### `daysSinceNoncurrentTime`<sup>Required</sup> <a name="daysSinceNoncurrentTime" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTime"></a>

```typescript
public readonly daysSinceNoncurrentTime: number;
```

- *Type:* number

---

##### `matchesPrefix`<sup>Required</sup> <a name="matchesPrefix" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefix"></a>

```typescript
public readonly matchesPrefix: string[];
```

- *Type:* string[]

---

##### `matchesStorageClass`<sup>Required</sup> <a name="matchesStorageClass" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClass"></a>

```typescript
public readonly matchesStorageClass: string[];
```

- *Type:* string[]

---

##### `matchesSuffix`<sup>Required</sup> <a name="matchesSuffix" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffix"></a>

```typescript
public readonly matchesSuffix: string[];
```

- *Type:* string[]

---

##### `noncurrentTimeBefore`<sup>Required</sup> <a name="noncurrentTimeBefore" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBefore"></a>

```typescript
public readonly noncurrentTimeBefore: string;
```

- *Type:* string

---

##### `numNewerVersions`<sup>Required</sup> <a name="numNewerVersions" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersions"></a>

```typescript
public readonly numNewerVersions: number;
```

- *Type:* number

---

##### `sendAgeIfZero`<sup>Required</sup> <a name="sendAgeIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendAgeIfZero"></a>

```typescript
public readonly sendAgeIfZero: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sendDaysSinceCustomTimeIfZero`<sup>Required</sup> <a name="sendDaysSinceCustomTimeIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceCustomTimeIfZero"></a>

```typescript
public readonly sendDaysSinceCustomTimeIfZero: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sendDaysSinceNoncurrentTimeIfZero`<sup>Required</sup> <a name="sendDaysSinceNoncurrentTimeIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceNoncurrentTimeIfZero"></a>

```typescript
public readonly sendDaysSinceNoncurrentTimeIfZero: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sendNumNewerVersionsIfZero`<sup>Required</sup> <a name="sendNumNewerVersionsIfZero" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.sendNumNewerVersionsIfZero"></a>

```typescript
public readonly sendNumNewerVersionsIfZero: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `withState`<sup>Required</sup> <a name="withState" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.withState"></a>

```typescript
public readonly withState: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageBucketLifecycleRuleCondition;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a>

---


### StorageBucketLifecycleRuleList <a name="StorageBucketLifecycleRuleList" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

new storageBucket.StorageBucketLifecycleRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.get"></a>

```typescript
public get(index: number): StorageBucketLifecycleRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule">StorageBucketLifecycleRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageBucketLifecycleRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule">StorageBucketLifecycleRule</a>[]

---


### StorageBucketLifecycleRuleOutputReference <a name="StorageBucketLifecycleRuleOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

new storageBucket.StorageBucketLifecycleRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putCondition">putCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putAction"></a>

```typescript
public putAction(value: StorageBucketLifecycleRuleAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a>

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putCondition"></a>

```typescript
public putCondition(value: StorageBucketLifecycleRuleCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference">StorageBucketLifecycleRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference">StorageBucketLifecycleRuleConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule">StorageBucketLifecycleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.action"></a>

```typescript
public readonly action: StorageBucketLifecycleRuleActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleActionOutputReference">StorageBucketLifecycleRuleActionOutputReference</a>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.condition"></a>

```typescript
public readonly condition: StorageBucketLifecycleRuleConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleConditionOutputReference">StorageBucketLifecycleRuleConditionOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: StorageBucketLifecycleRuleAction;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleAction">StorageBucketLifecycleRuleAction</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: StorageBucketLifecycleRuleCondition;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleCondition">StorageBucketLifecycleRuleCondition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucket.StorageBucketLifecycleRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageBucketLifecycleRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.storageBucket.StorageBucketLifecycleRule">StorageBucketLifecycleRule</a>

---


### StorageBucketLoggingOutputReference <a name="StorageBucketLoggingOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

new storageBucket.StorageBucketLoggingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.resetLogObjectPrefix">resetLogObjectPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogObjectPrefix` <a name="resetLogObjectPrefix" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.resetLogObjectPrefix"></a>

```typescript
public resetLogObjectPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logBucketInput">logBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logObjectPrefixInput">logObjectPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logBucket">logBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logObjectPrefix">logObjectPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logBucketInput`<sup>Optional</sup> <a name="logBucketInput" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logBucketInput"></a>

```typescript
public readonly logBucketInput: string;
```

- *Type:* string

---

##### `logObjectPrefixInput`<sup>Optional</sup> <a name="logObjectPrefixInput" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logObjectPrefixInput"></a>

```typescript
public readonly logObjectPrefixInput: string;
```

- *Type:* string

---

##### `logBucket`<sup>Required</sup> <a name="logBucket" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logBucket"></a>

```typescript
public readonly logBucket: string;
```

- *Type:* string

---

##### `logObjectPrefix`<sup>Required</sup> <a name="logObjectPrefix" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.logObjectPrefix"></a>

```typescript
public readonly logObjectPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucket.StorageBucketLoggingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageBucketLogging;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketLogging">StorageBucketLogging</a>

---


### StorageBucketRetentionPolicyOutputReference <a name="StorageBucketRetentionPolicyOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

new storageBucket.StorageBucketRetentionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.resetIsLocked">resetIsLocked</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsLocked` <a name="resetIsLocked" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.resetIsLocked"></a>

```typescript
public resetIsLocked(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.isLockedInput">isLockedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.retentionPeriodInput">retentionPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.isLocked">isLocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.retentionPeriod">retentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isLockedInput`<sup>Optional</sup> <a name="isLockedInput" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.isLockedInput"></a>

```typescript
public readonly isLockedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionPeriodInput`<sup>Optional</sup> <a name="retentionPeriodInput" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.retentionPeriodInput"></a>

```typescript
public readonly retentionPeriodInput: number;
```

- *Type:* number

---

##### `isLocked`<sup>Required</sup> <a name="isLocked" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.isLocked"></a>

```typescript
public readonly isLocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageBucketRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketRetentionPolicy">StorageBucketRetentionPolicy</a>

---


### StorageBucketSoftDeletePolicyOutputReference <a name="StorageBucketSoftDeletePolicyOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

new storageBucket.StorageBucketSoftDeletePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.resetRetentionDurationSeconds">resetRetentionDurationSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRetentionDurationSeconds` <a name="resetRetentionDurationSeconds" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.resetRetentionDurationSeconds"></a>

```typescript
public resetRetentionDurationSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.effectiveTime">effectiveTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.retentionDurationSecondsInput">retentionDurationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.retentionDurationSeconds">retentionDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy">StorageBucketSoftDeletePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveTime`<sup>Required</sup> <a name="effectiveTime" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.effectiveTime"></a>

```typescript
public readonly effectiveTime: string;
```

- *Type:* string

---

##### `retentionDurationSecondsInput`<sup>Optional</sup> <a name="retentionDurationSecondsInput" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.retentionDurationSecondsInput"></a>

```typescript
public readonly retentionDurationSecondsInput: number;
```

- *Type:* number

---

##### `retentionDurationSeconds`<sup>Required</sup> <a name="retentionDurationSeconds" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.retentionDurationSeconds"></a>

```typescript
public readonly retentionDurationSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageBucketSoftDeletePolicy;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketSoftDeletePolicy">StorageBucketSoftDeletePolicy</a>

---


### StorageBucketTimeoutsOutputReference <a name="StorageBucketTimeoutsOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

new storageBucket.StorageBucketTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts">StorageBucketTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucket.StorageBucketTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageBucketTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.storageBucket.StorageBucketTimeouts">StorageBucketTimeouts</a>

---


### StorageBucketVersioningOutputReference <a name="StorageBucketVersioningOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

new storageBucket.StorageBucketVersioningOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucket.StorageBucketVersioningOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageBucketVersioning;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketVersioning">StorageBucketVersioning</a>

---


### StorageBucketWebsiteOutputReference <a name="StorageBucketWebsiteOutputReference" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-google'

new storageBucket.StorageBucketWebsiteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resetMainPageSuffix">resetMainPageSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resetNotFoundPage">resetNotFoundPage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMainPageSuffix` <a name="resetMainPageSuffix" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resetMainPageSuffix"></a>

```typescript
public resetMainPageSuffix(): void
```

##### `resetNotFoundPage` <a name="resetNotFoundPage" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.resetNotFoundPage"></a>

```typescript
public resetNotFoundPage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.mainPageSuffixInput">mainPageSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.notFoundPageInput">notFoundPageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.mainPageSuffix">mainPageSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.notFoundPage">notFoundPage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mainPageSuffixInput`<sup>Optional</sup> <a name="mainPageSuffixInput" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.mainPageSuffixInput"></a>

```typescript
public readonly mainPageSuffixInput: string;
```

- *Type:* string

---

##### `notFoundPageInput`<sup>Optional</sup> <a name="notFoundPageInput" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.notFoundPageInput"></a>

```typescript
public readonly notFoundPageInput: string;
```

- *Type:* string

---

##### `mainPageSuffix`<sup>Required</sup> <a name="mainPageSuffix" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.mainPageSuffix"></a>

```typescript
public readonly mainPageSuffix: string;
```

- *Type:* string

---

##### `notFoundPage`<sup>Required</sup> <a name="notFoundPage" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.notFoundPage"></a>

```typescript
public readonly notFoundPage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucket.StorageBucketWebsiteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageBucketWebsite;
```

- *Type:* <a href="#@cdktf/provider-google.storageBucket.StorageBucketWebsite">StorageBucketWebsite</a>

---



