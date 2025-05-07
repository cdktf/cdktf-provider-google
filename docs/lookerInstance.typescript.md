# `lookerInstance` Submodule <a name="`lookerInstance` Submodule" id="@cdktf/provider-google.lookerInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LookerInstance <a name="LookerInstance" id="@cdktf/provider-google.lookerInstance.LookerInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance google_looker_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

new lookerInstance.LookerInstance(scope: Construct, id: string, config: LookerInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig">LookerInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.lookerInstance.LookerInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig">LookerInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.putAdminSettings">putAdminSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.putCustomDomain">putCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.putDenyMaintenancePeriod">putDenyMaintenancePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.putEncryptionConfig">putEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.putOauthConfig">putOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.putPscConfig">putPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.putUserMetadata">putUserMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetAdminSettings">resetAdminSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetConsumerNetwork">resetConsumerNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetCustomDomain">resetCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetDenyMaintenancePeriod">resetDenyMaintenancePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetEncryptionConfig">resetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetFipsEnabled">resetFipsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetPlatformEdition">resetPlatformEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetPrivateIpEnabled">resetPrivateIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetPscConfig">resetPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetPscEnabled">resetPscEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetPublicIpEnabled">resetPublicIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetReservedRange">resetReservedRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.resetUserMetadata">resetUserMetadata</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.lookerInstance.LookerInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.lookerInstance.LookerInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.lookerInstance.LookerInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.lookerInstance.LookerInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.lookerInstance.LookerInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.lookerInstance.LookerInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.lookerInstance.LookerInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.lookerInstance.LookerInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.lookerInstance.LookerInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.lookerInstance.LookerInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.lookerInstance.LookerInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.lookerInstance.LookerInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.lookerInstance.LookerInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.lookerInstance.LookerInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.lookerInstance.LookerInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.lookerInstance.LookerInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.lookerInstance.LookerInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.lookerInstance.LookerInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.lookerInstance.LookerInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.lookerInstance.LookerInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.lookerInstance.LookerInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.lookerInstance.LookerInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdminSettings` <a name="putAdminSettings" id="@cdktf/provider-google.lookerInstance.LookerInstance.putAdminSettings"></a>

```typescript
public putAdminSettings(value: LookerInstanceAdminSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.lookerInstance.LookerInstance.putAdminSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings">LookerInstanceAdminSettings</a>

---

##### `putCustomDomain` <a name="putCustomDomain" id="@cdktf/provider-google.lookerInstance.LookerInstance.putCustomDomain"></a>

```typescript
public putCustomDomain(value: LookerInstanceCustomDomain): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.lookerInstance.LookerInstance.putCustomDomain.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain">LookerInstanceCustomDomain</a>

---

##### `putDenyMaintenancePeriod` <a name="putDenyMaintenancePeriod" id="@cdktf/provider-google.lookerInstance.LookerInstance.putDenyMaintenancePeriod"></a>

```typescript
public putDenyMaintenancePeriod(value: LookerInstanceDenyMaintenancePeriod): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.lookerInstance.LookerInstance.putDenyMaintenancePeriod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod">LookerInstanceDenyMaintenancePeriod</a>

---

##### `putEncryptionConfig` <a name="putEncryptionConfig" id="@cdktf/provider-google.lookerInstance.LookerInstance.putEncryptionConfig"></a>

```typescript
public putEncryptionConfig(value: LookerInstanceEncryptionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.lookerInstance.LookerInstance.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig">LookerInstanceEncryptionConfig</a>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktf/provider-google.lookerInstance.LookerInstance.putMaintenanceWindow"></a>

```typescript
public putMaintenanceWindow(value: LookerInstanceMaintenanceWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.lookerInstance.LookerInstance.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow">LookerInstanceMaintenanceWindow</a>

---

##### `putOauthConfig` <a name="putOauthConfig" id="@cdktf/provider-google.lookerInstance.LookerInstance.putOauthConfig"></a>

```typescript
public putOauthConfig(value: LookerInstanceOauthConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.lookerInstance.LookerInstance.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig">LookerInstanceOauthConfig</a>

---

##### `putPscConfig` <a name="putPscConfig" id="@cdktf/provider-google.lookerInstance.LookerInstance.putPscConfig"></a>

```typescript
public putPscConfig(value: LookerInstancePscConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.lookerInstance.LookerInstance.putPscConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfig">LookerInstancePscConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.lookerInstance.LookerInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: LookerInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.lookerInstance.LookerInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts">LookerInstanceTimeouts</a>

---

##### `putUserMetadata` <a name="putUserMetadata" id="@cdktf/provider-google.lookerInstance.LookerInstance.putUserMetadata"></a>

```typescript
public putUserMetadata(value: LookerInstanceUserMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.lookerInstance.LookerInstance.putUserMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata">LookerInstanceUserMetadata</a>

---

##### `resetAdminSettings` <a name="resetAdminSettings" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetAdminSettings"></a>

```typescript
public resetAdminSettings(): void
```

##### `resetConsumerNetwork` <a name="resetConsumerNetwork" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetConsumerNetwork"></a>

```typescript
public resetConsumerNetwork(): void
```

##### `resetCustomDomain` <a name="resetCustomDomain" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetCustomDomain"></a>

```typescript
public resetCustomDomain(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDenyMaintenancePeriod` <a name="resetDenyMaintenancePeriod" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetDenyMaintenancePeriod"></a>

```typescript
public resetDenyMaintenancePeriod(): void
```

##### `resetEncryptionConfig` <a name="resetEncryptionConfig" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetEncryptionConfig"></a>

```typescript
public resetEncryptionConfig(): void
```

##### `resetFipsEnabled` <a name="resetFipsEnabled" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetFipsEnabled"></a>

```typescript
public resetFipsEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetMaintenanceWindow"></a>

```typescript
public resetMaintenanceWindow(): void
```

##### `resetPlatformEdition` <a name="resetPlatformEdition" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetPlatformEdition"></a>

```typescript
public resetPlatformEdition(): void
```

##### `resetPrivateIpEnabled` <a name="resetPrivateIpEnabled" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetPrivateIpEnabled"></a>

```typescript
public resetPrivateIpEnabled(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetPscConfig` <a name="resetPscConfig" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetPscConfig"></a>

```typescript
public resetPscConfig(): void
```

##### `resetPscEnabled` <a name="resetPscEnabled" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetPscEnabled"></a>

```typescript
public resetPscEnabled(): void
```

##### `resetPublicIpEnabled` <a name="resetPublicIpEnabled" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetPublicIpEnabled"></a>

```typescript
public resetPublicIpEnabled(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetReservedRange` <a name="resetReservedRange" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetReservedRange"></a>

```typescript
public resetReservedRange(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserMetadata` <a name="resetUserMetadata" id="@cdktf/provider-google.lookerInstance.LookerInstance.resetUserMetadata"></a>

```typescript
public resetUserMetadata(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LookerInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.lookerInstance.LookerInstance.isConstruct"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

lookerInstance.LookerInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.lookerInstance.LookerInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.lookerInstance.LookerInstance.isTerraformElement"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

lookerInstance.LookerInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.lookerInstance.LookerInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.lookerInstance.LookerInstance.isTerraformResource"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

lookerInstance.LookerInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.lookerInstance.LookerInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.lookerInstance.LookerInstance.generateConfigForImport"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

lookerInstance.LookerInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LookerInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.lookerInstance.LookerInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.lookerInstance.LookerInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LookerInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.lookerInstance.LookerInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LookerInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.lookerInstance.LookerInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LookerInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.adminSettings">adminSettings</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference">LookerInstanceAdminSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.customDomain">customDomain</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference">LookerInstanceCustomDomainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.denyMaintenancePeriod">denyMaintenancePeriod</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference">LookerInstanceDenyMaintenancePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.egressPublicIp">egressPublicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference">LookerInstanceEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.ingressPrivateIp">ingressPrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.ingressPublicIp">ingressPublicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.lookerUri">lookerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.lookerVersion">lookerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference">LookerInstanceMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference">LookerInstanceOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.pscConfig">pscConfig</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference">LookerInstancePscConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference">LookerInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.userMetadata">userMetadata</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference">LookerInstanceUserMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.adminSettingsInput">adminSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings">LookerInstanceAdminSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.consumerNetworkInput">consumerNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.customDomainInput">customDomainInput</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain">LookerInstanceCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.denyMaintenancePeriodInput">denyMaintenancePeriodInput</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod">LookerInstanceDenyMaintenancePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.encryptionConfigInput">encryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig">LookerInstanceEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.fipsEnabledInput">fipsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow">LookerInstanceMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.oauthConfigInput">oauthConfigInput</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig">LookerInstanceOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.platformEditionInput">platformEditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.privateIpEnabledInput">privateIpEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.pscConfigInput">pscConfigInput</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfig">LookerInstancePscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.pscEnabledInput">pscEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.publicIpEnabledInput">publicIpEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.reservedRangeInput">reservedRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts">LookerInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.userMetadataInput">userMetadataInput</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata">LookerInstanceUserMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.consumerNetwork">consumerNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.fipsEnabled">fipsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.platformEdition">platformEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.privateIpEnabled">privateIpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.pscEnabled">pscEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.publicIpEnabled">publicIpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.reservedRange">reservedRange</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `adminSettings`<sup>Required</sup> <a name="adminSettings" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.adminSettings"></a>

```typescript
public readonly adminSettings: LookerInstanceAdminSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference">LookerInstanceAdminSettingsOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `customDomain`<sup>Required</sup> <a name="customDomain" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.customDomain"></a>

```typescript
public readonly customDomain: LookerInstanceCustomDomainOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference">LookerInstanceCustomDomainOutputReference</a>

---

##### `denyMaintenancePeriod`<sup>Required</sup> <a name="denyMaintenancePeriod" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.denyMaintenancePeriod"></a>

```typescript
public readonly denyMaintenancePeriod: LookerInstanceDenyMaintenancePeriodOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference">LookerInstanceDenyMaintenancePeriodOutputReference</a>

---

##### `egressPublicIp`<sup>Required</sup> <a name="egressPublicIp" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.egressPublicIp"></a>

```typescript
public readonly egressPublicIp: string;
```

- *Type:* string

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: LookerInstanceEncryptionConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference">LookerInstanceEncryptionConfigOutputReference</a>

---

##### `ingressPrivateIp`<sup>Required</sup> <a name="ingressPrivateIp" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.ingressPrivateIp"></a>

```typescript
public readonly ingressPrivateIp: string;
```

- *Type:* string

---

##### `ingressPublicIp`<sup>Required</sup> <a name="ingressPublicIp" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.ingressPublicIp"></a>

```typescript
public readonly ingressPublicIp: string;
```

- *Type:* string

---

##### `lookerUri`<sup>Required</sup> <a name="lookerUri" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.lookerUri"></a>

```typescript
public readonly lookerUri: string;
```

- *Type:* string

---

##### `lookerVersion`<sup>Required</sup> <a name="lookerVersion" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.lookerVersion"></a>

```typescript
public readonly lookerVersion: string;
```

- *Type:* string

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: LookerInstanceMaintenanceWindowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference">LookerInstanceMaintenanceWindowOutputReference</a>

---

##### `oauthConfig`<sup>Required</sup> <a name="oauthConfig" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.oauthConfig"></a>

```typescript
public readonly oauthConfig: LookerInstanceOauthConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference">LookerInstanceOauthConfigOutputReference</a>

---

##### `pscConfig`<sup>Required</sup> <a name="pscConfig" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.pscConfig"></a>

```typescript
public readonly pscConfig: LookerInstancePscConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference">LookerInstancePscConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.timeouts"></a>

```typescript
public readonly timeouts: LookerInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference">LookerInstanceTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `userMetadata`<sup>Required</sup> <a name="userMetadata" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.userMetadata"></a>

```typescript
public readonly userMetadata: LookerInstanceUserMetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference">LookerInstanceUserMetadataOutputReference</a>

---

##### `adminSettingsInput`<sup>Optional</sup> <a name="adminSettingsInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.adminSettingsInput"></a>

```typescript
public readonly adminSettingsInput: LookerInstanceAdminSettings;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings">LookerInstanceAdminSettings</a>

---

##### `consumerNetworkInput`<sup>Optional</sup> <a name="consumerNetworkInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.consumerNetworkInput"></a>

```typescript
public readonly consumerNetworkInput: string;
```

- *Type:* string

---

##### `customDomainInput`<sup>Optional</sup> <a name="customDomainInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.customDomainInput"></a>

```typescript
public readonly customDomainInput: LookerInstanceCustomDomain;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain">LookerInstanceCustomDomain</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `denyMaintenancePeriodInput`<sup>Optional</sup> <a name="denyMaintenancePeriodInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.denyMaintenancePeriodInput"></a>

```typescript
public readonly denyMaintenancePeriodInput: LookerInstanceDenyMaintenancePeriod;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod">LookerInstanceDenyMaintenancePeriod</a>

---

##### `encryptionConfigInput`<sup>Optional</sup> <a name="encryptionConfigInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.encryptionConfigInput"></a>

```typescript
public readonly encryptionConfigInput: LookerInstanceEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig">LookerInstanceEncryptionConfig</a>

---

##### `fipsEnabledInput`<sup>Optional</sup> <a name="fipsEnabledInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.fipsEnabledInput"></a>

```typescript
public readonly fipsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.maintenanceWindowInput"></a>

```typescript
public readonly maintenanceWindowInput: LookerInstanceMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow">LookerInstanceMaintenanceWindow</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `oauthConfigInput`<sup>Optional</sup> <a name="oauthConfigInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.oauthConfigInput"></a>

```typescript
public readonly oauthConfigInput: LookerInstanceOauthConfig;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig">LookerInstanceOauthConfig</a>

---

##### `platformEditionInput`<sup>Optional</sup> <a name="platformEditionInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.platformEditionInput"></a>

```typescript
public readonly platformEditionInput: string;
```

- *Type:* string

---

##### `privateIpEnabledInput`<sup>Optional</sup> <a name="privateIpEnabledInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.privateIpEnabledInput"></a>

```typescript
public readonly privateIpEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `pscConfigInput`<sup>Optional</sup> <a name="pscConfigInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.pscConfigInput"></a>

```typescript
public readonly pscConfigInput: LookerInstancePscConfig;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfig">LookerInstancePscConfig</a>

---

##### `pscEnabledInput`<sup>Optional</sup> <a name="pscEnabledInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.pscEnabledInput"></a>

```typescript
public readonly pscEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publicIpEnabledInput`<sup>Optional</sup> <a name="publicIpEnabledInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.publicIpEnabledInput"></a>

```typescript
public readonly publicIpEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `reservedRangeInput`<sup>Optional</sup> <a name="reservedRangeInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.reservedRangeInput"></a>

```typescript
public readonly reservedRangeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LookerInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts">LookerInstanceTimeouts</a>

---

##### `userMetadataInput`<sup>Optional</sup> <a name="userMetadataInput" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.userMetadataInput"></a>

```typescript
public readonly userMetadataInput: LookerInstanceUserMetadata;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata">LookerInstanceUserMetadata</a>

---

##### `consumerNetwork`<sup>Required</sup> <a name="consumerNetwork" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.consumerNetwork"></a>

```typescript
public readonly consumerNetwork: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `fipsEnabled`<sup>Required</sup> <a name="fipsEnabled" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.fipsEnabled"></a>

```typescript
public readonly fipsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `platformEdition`<sup>Required</sup> <a name="platformEdition" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.platformEdition"></a>

```typescript
public readonly platformEdition: string;
```

- *Type:* string

---

##### `privateIpEnabled`<sup>Required</sup> <a name="privateIpEnabled" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.privateIpEnabled"></a>

```typescript
public readonly privateIpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `pscEnabled`<sup>Required</sup> <a name="pscEnabled" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.pscEnabled"></a>

```typescript
public readonly pscEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publicIpEnabled`<sup>Required</sup> <a name="publicIpEnabled" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.publicIpEnabled"></a>

```typescript
public readonly publicIpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `reservedRange`<sup>Required</sup> <a name="reservedRange" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.reservedRange"></a>

```typescript
public readonly reservedRange: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.lookerInstance.LookerInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LookerInstanceAdminSettings <a name="LookerInstanceAdminSettings" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings.Initializer"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

const lookerInstanceAdminSettings: lookerInstance.LookerInstanceAdminSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings.property.allowedEmailDomains">allowedEmailDomains</a></code> | <code>string[]</code> | Email domain allowlist for the instance. |

---

##### `allowedEmailDomains`<sup>Optional</sup> <a name="allowedEmailDomains" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings.property.allowedEmailDomains"></a>

```typescript
public readonly allowedEmailDomains: string[];
```

- *Type:* string[]

Email domain allowlist for the instance.

Define the email domains to which your users can deliver Looker (Google Cloud core) content.
Updating this list will restart the instance. Updating the allowed email domains from terraform
means the value provided will be considered as the entire list and not an amendment to the
existing list of allowed email domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#allowed_email_domains LookerInstance#allowed_email_domains}

---

### LookerInstanceConfig <a name="LookerInstanceConfig" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.Initializer"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

const lookerInstanceConfig: lookerInstance.LookerInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.name">name</a></code> | <code>string</code> | The ID of the instance or a fully qualified identifier for the instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig">LookerInstanceOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.adminSettings">adminSettings</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings">LookerInstanceAdminSettings</a></code> | admin_settings block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.consumerNetwork">consumerNetwork</a></code> | <code>string</code> | Network name in the consumer project in the format of: projects/{project}/global/networks/{network} Note that the consumer network may be in a different GCP project than the consumer project that is hosting the Looker Instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.customDomain">customDomain</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain">LookerInstanceCustomDomain</a></code> | custom_domain block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Policy to determine if the cluster should be deleted forcefully. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.denyMaintenancePeriod">denyMaintenancePeriod</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod">LookerInstanceDenyMaintenancePeriod</a></code> | deny_maintenance_period block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig">LookerInstanceEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.fipsEnabled">fipsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | FIPS 140-2 Encryption enablement for Looker (Google Cloud Core). |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#id LookerInstance#id}. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow">LookerInstanceMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.platformEdition">platformEdition</a></code> | <code>string</code> | Platform editions for a Looker instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.privateIpEnabled">privateIpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether private IP is enabled on the Looker instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#project LookerInstance#project}. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.pscConfig">pscConfig</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfig">LookerInstancePscConfig</a></code> | psc_config block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.pscEnabled">pscEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether Public Service Connect (PSC) is enabled on the Looker instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.publicIpEnabled">publicIpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether public IP is enabled on the Looker instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.region">region</a></code> | <code>string</code> | The name of the Looker region of the instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.reservedRange">reservedRange</a></code> | <code>string</code> | Name of a reserved IP address range within the consumer network, to be used for private service access connection. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts">LookerInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.userMetadata">userMetadata</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata">LookerInstanceUserMetadata</a></code> | user_metadata block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The ID of the instance or a fully qualified identifier for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#name LookerInstance#name}

---

##### `oauthConfig`<sup>Required</sup> <a name="oauthConfig" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.oauthConfig"></a>

```typescript
public readonly oauthConfig: LookerInstanceOauthConfig;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig">LookerInstanceOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#oauth_config LookerInstance#oauth_config}

---

##### `adminSettings`<sup>Optional</sup> <a name="adminSettings" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.adminSettings"></a>

```typescript
public readonly adminSettings: LookerInstanceAdminSettings;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings">LookerInstanceAdminSettings</a>

admin_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#admin_settings LookerInstance#admin_settings}

---

##### `consumerNetwork`<sup>Optional</sup> <a name="consumerNetwork" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.consumerNetwork"></a>

```typescript
public readonly consumerNetwork: string;
```

- *Type:* string

Network name in the consumer project in the format of: projects/{project}/global/networks/{network} Note that the consumer network may be in a different GCP project than the consumer project that is hosting the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#consumer_network LookerInstance#consumer_network}

---

##### `customDomain`<sup>Optional</sup> <a name="customDomain" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.customDomain"></a>

```typescript
public readonly customDomain: LookerInstanceCustomDomain;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain">LookerInstanceCustomDomain</a>

custom_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#custom_domain LookerInstance#custom_domain}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Policy to determine if the cluster should be deleted forcefully.

If setting deletion_policy = "FORCE", the Looker instance will be deleted regardless
of its nested resources. If set to "DEFAULT", Looker instances that still have
nested resources will return an error. Possible values: DEFAULT, FORCE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#deletion_policy LookerInstance#deletion_policy}

---

##### `denyMaintenancePeriod`<sup>Optional</sup> <a name="denyMaintenancePeriod" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.denyMaintenancePeriod"></a>

```typescript
public readonly denyMaintenancePeriod: LookerInstanceDenyMaintenancePeriod;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod">LookerInstanceDenyMaintenancePeriod</a>

deny_maintenance_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#deny_maintenance_period LookerInstance#deny_maintenance_period}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: LookerInstanceEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig">LookerInstanceEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#encryption_config LookerInstance#encryption_config}

---

##### `fipsEnabled`<sup>Optional</sup> <a name="fipsEnabled" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.fipsEnabled"></a>

```typescript
public readonly fipsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

FIPS 140-2 Encryption enablement for Looker (Google Cloud Core).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#fips_enabled LookerInstance#fips_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#id LookerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: LookerInstanceMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow">LookerInstanceMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#maintenance_window LookerInstance#maintenance_window}

---

##### `platformEdition`<sup>Optional</sup> <a name="platformEdition" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.platformEdition"></a>

```typescript
public readonly platformEdition: string;
```

- *Type:* string

Platform editions for a Looker instance.

Each edition maps to a set of instance features, like its size. Must be one of these values:
- LOOKER_CORE_TRIAL: trial instance (Currently Unavailable)
- LOOKER_CORE_STANDARD: pay as you go standard instance (Currently Unavailable)
- LOOKER_CORE_STANDARD_ANNUAL: subscription standard instance
- LOOKER_CORE_ENTERPRISE_ANNUAL: subscription enterprise instance
- LOOKER_CORE_EMBED_ANNUAL: subscription embed instance
- LOOKER_CORE_NONPROD_STANDARD_ANNUAL: nonprod subscription standard instance
- LOOKER_CORE_NONPROD_ENTERPRISE_ANNUAL: nonprod subscription enterprise instance
- LOOKER_CORE_NONPROD_EMBED_ANNUAL: nonprod subscription embed instance Default value: "LOOKER_CORE_TRIAL" Possible values: ["LOOKER_CORE_TRIAL", "LOOKER_CORE_STANDARD", "LOOKER_CORE_STANDARD_ANNUAL", "LOOKER_CORE_ENTERPRISE_ANNUAL", "LOOKER_CORE_EMBED_ANNUAL", "LOOKER_CORE_NONPROD_STANDARD_ANNUAL", "LOOKER_CORE_NONPROD_ENTERPRISE_ANNUAL", "LOOKER_CORE_NONPROD_EMBED_ANNUAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#platform_edition LookerInstance#platform_edition}

---

##### `privateIpEnabled`<sup>Optional</sup> <a name="privateIpEnabled" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.privateIpEnabled"></a>

```typescript
public readonly privateIpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether private IP is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#private_ip_enabled LookerInstance#private_ip_enabled}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#project LookerInstance#project}.

---

##### `pscConfig`<sup>Optional</sup> <a name="pscConfig" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.pscConfig"></a>

```typescript
public readonly pscConfig: LookerInstancePscConfig;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfig">LookerInstancePscConfig</a>

psc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#psc_config LookerInstance#psc_config}

---

##### `pscEnabled`<sup>Optional</sup> <a name="pscEnabled" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.pscEnabled"></a>

```typescript
public readonly pscEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether Public Service Connect (PSC) is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#psc_enabled LookerInstance#psc_enabled}

---

##### `publicIpEnabled`<sup>Optional</sup> <a name="publicIpEnabled" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.publicIpEnabled"></a>

```typescript
public readonly publicIpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether public IP is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#public_ip_enabled LookerInstance#public_ip_enabled}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The name of the Looker region of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#region LookerInstance#region}

---

##### `reservedRange`<sup>Optional</sup> <a name="reservedRange" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.reservedRange"></a>

```typescript
public readonly reservedRange: string;
```

- *Type:* string

Name of a reserved IP address range within the consumer network, to be used for private service access connection.

User may or may not specify this in a request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#reserved_range LookerInstance#reserved_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LookerInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts">LookerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#timeouts LookerInstance#timeouts}

---

##### `userMetadata`<sup>Optional</sup> <a name="userMetadata" id="@cdktf/provider-google.lookerInstance.LookerInstanceConfig.property.userMetadata"></a>

```typescript
public readonly userMetadata: LookerInstanceUserMetadata;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata">LookerInstanceUserMetadata</a>

user_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#user_metadata LookerInstance#user_metadata}

---

### LookerInstanceCustomDomain <a name="LookerInstanceCustomDomain" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain.Initializer"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

const lookerInstanceCustomDomain: lookerInstance.LookerInstanceCustomDomain = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain.property.domain">domain</a></code> | <code>string</code> | Domain name. |

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#domain LookerInstance#domain}

---

### LookerInstanceDenyMaintenancePeriod <a name="LookerInstanceDenyMaintenancePeriod" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod.Initializer"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

const lookerInstanceDenyMaintenancePeriod: lookerInstance.LookerInstanceDenyMaintenancePeriod = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod.property.endDate">endDate</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate">LookerInstanceDenyMaintenancePeriodEndDate</a></code> | end_date block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod.property.startDate">startDate</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate">LookerInstanceDenyMaintenancePeriodStartDate</a></code> | start_date block. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod.property.time">time</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime">LookerInstanceDenyMaintenancePeriodTime</a></code> | time block. |

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod.property.endDate"></a>

```typescript
public readonly endDate: LookerInstanceDenyMaintenancePeriodEndDate;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate">LookerInstanceDenyMaintenancePeriodEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#end_date LookerInstance#end_date}

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod.property.startDate"></a>

```typescript
public readonly startDate: LookerInstanceDenyMaintenancePeriodStartDate;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate">LookerInstanceDenyMaintenancePeriodStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#start_date LookerInstance#start_date}

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod.property.time"></a>

```typescript
public readonly time: LookerInstanceDenyMaintenancePeriodTime;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime">LookerInstanceDenyMaintenancePeriodTime</a>

time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#time LookerInstance#time}

---

### LookerInstanceDenyMaintenancePeriodEndDate <a name="LookerInstanceDenyMaintenancePeriodEndDate" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate.Initializer"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

const lookerInstanceDenyMaintenancePeriodEndDate: lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate.property.day">day</a></code> | <code>number</code> | Day of a month. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate.property.month">month</a></code> | <code>number</code> | Month of a year. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate.property.year">year</a></code> | <code>number</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0
to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#day LookerInstance#day}

---

##### `month`<sup>Optional</sup> <a name="month" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a
month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#month LookerInstance#month}

---

##### `year`<sup>Optional</sup> <a name="year" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#year LookerInstance#year}

---

### LookerInstanceDenyMaintenancePeriodStartDate <a name="LookerInstanceDenyMaintenancePeriodStartDate" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate.Initializer"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

const lookerInstanceDenyMaintenancePeriodStartDate: lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate.property.day">day</a></code> | <code>number</code> | Day of a month. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate.property.month">month</a></code> | <code>number</code> | Month of a year. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate.property.year">year</a></code> | <code>number</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0
to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#day LookerInstance#day}

---

##### `month`<sup>Optional</sup> <a name="month" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a
month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#month LookerInstance#month}

---

##### `year`<sup>Optional</sup> <a name="year" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#year LookerInstance#year}

---

### LookerInstanceDenyMaintenancePeriodTime <a name="LookerInstanceDenyMaintenancePeriodTime" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.Initializer"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

const lookerInstanceDenyMaintenancePeriodTime: lookerInstance.LookerInstanceDenyMaintenancePeriodTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.property.hours">hours</a></code> | <code>number</code> | Hours of day in 24 hour format. Should be from 0 to 23. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.property.minutes">minutes</a></code> | <code>number</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.property.nanos">nanos</a></code> | <code>number</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.property.seconds">seconds</a></code> | <code>number</code> | Seconds of minutes of the time. Must normally be from 0 to 59. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

Hours of day in 24 hour format. Should be from 0 to 23.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#hours LookerInstance#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#minutes LookerInstance#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#nanos LookerInstance#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

Seconds of minutes of the time. Must normally be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#seconds LookerInstance#seconds}

---

### LookerInstanceEncryptionConfig <a name="LookerInstanceEncryptionConfig" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig.Initializer"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

const lookerInstanceEncryptionConfig: lookerInstance.LookerInstanceEncryptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | Name of the customer managed encryption key (CMEK) in KMS. |

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

Name of the customer managed encryption key (CMEK) in KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#kms_key_name LookerInstance#kms_key_name}

---

### LookerInstanceMaintenanceWindow <a name="LookerInstanceMaintenanceWindow" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow.Initializer"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

const lookerInstanceMaintenanceWindow: lookerInstance.LookerInstanceMaintenanceWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | Required. Day of the week for this MaintenanceWindow (in UTC). |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime">LookerInstanceMaintenanceWindowStartTime</a></code> | start_time block. |

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

Required. Day of the week for this MaintenanceWindow (in UTC).

MONDAY: Monday
- TUESDAY: Tuesday
- WEDNESDAY: Wednesday
- THURSDAY: Thursday
- FRIDAY: Friday
- SATURDAY: Saturday
- SUNDAY: Sunday Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#day_of_week LookerInstance#day_of_week}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow.property.startTime"></a>

```typescript
public readonly startTime: LookerInstanceMaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime">LookerInstanceMaintenanceWindowStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#start_time LookerInstance#start_time}

---

### LookerInstanceMaintenanceWindowStartTime <a name="LookerInstanceMaintenanceWindowStartTime" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.Initializer"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

const lookerInstanceMaintenanceWindowStartTime: lookerInstance.LookerInstanceMaintenanceWindowStartTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.property.hours">hours</a></code> | <code>number</code> | Hours of day in 24 hour format. Should be from 0 to 23. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.property.minutes">minutes</a></code> | <code>number</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.property.nanos">nanos</a></code> | <code>number</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.property.seconds">seconds</a></code> | <code>number</code> | Seconds of minutes of the time. Must normally be from 0 to 59. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

Hours of day in 24 hour format. Should be from 0 to 23.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#hours LookerInstance#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#minutes LookerInstance#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#nanos LookerInstance#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

Seconds of minutes of the time. Must normally be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#seconds LookerInstance#seconds}

---

### LookerInstanceOauthConfig <a name="LookerInstanceOauthConfig" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig.Initializer"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

const lookerInstanceOauthConfig: lookerInstance.LookerInstanceOauthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig.property.clientId">clientId</a></code> | <code>string</code> | The client ID for the Oauth config. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | The client secret for the Oauth config. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The client ID for the Oauth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#client_id LookerInstance#client_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The client secret for the Oauth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#client_secret LookerInstance#client_secret}

---

### LookerInstancePscConfig <a name="LookerInstancePscConfig" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfig.Initializer"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

const lookerInstancePscConfig: lookerInstance.LookerInstancePscConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfig.property.allowedVpcs">allowedVpcs</a></code> | <code>string[]</code> | List of VPCs that are allowed ingress into the Looker instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfig.property.serviceAttachments">serviceAttachments</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments">LookerInstancePscConfigServiceAttachments</a>[]</code> | service_attachments block. |

---

##### `allowedVpcs`<sup>Optional</sup> <a name="allowedVpcs" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfig.property.allowedVpcs"></a>

```typescript
public readonly allowedVpcs: string[];
```

- *Type:* string[]

List of VPCs that are allowed ingress into the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#allowed_vpcs LookerInstance#allowed_vpcs}

---

##### `serviceAttachments`<sup>Optional</sup> <a name="serviceAttachments" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfig.property.serviceAttachments"></a>

```typescript
public readonly serviceAttachments: IResolvable | LookerInstancePscConfigServiceAttachments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments">LookerInstancePscConfigServiceAttachments</a>[]

service_attachments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#service_attachments LookerInstance#service_attachments}

---

### LookerInstancePscConfigServiceAttachments <a name="LookerInstancePscConfigServiceAttachments" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments.Initializer"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

const lookerInstancePscConfigServiceAttachments: lookerInstance.LookerInstancePscConfigServiceAttachments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments.property.localFqdn">localFqdn</a></code> | <code>string</code> | Fully qualified domain name that will be used in the private DNS record created for the service attachment. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments.property.targetServiceAttachmentUri">targetServiceAttachmentUri</a></code> | <code>string</code> | URI of the service attachment to connect to. |

---

##### `localFqdn`<sup>Optional</sup> <a name="localFqdn" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments.property.localFqdn"></a>

```typescript
public readonly localFqdn: string;
```

- *Type:* string

Fully qualified domain name that will be used in the private DNS record created for the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#local_fqdn LookerInstance#local_fqdn}

---

##### `targetServiceAttachmentUri`<sup>Optional</sup> <a name="targetServiceAttachmentUri" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments.property.targetServiceAttachmentUri"></a>

```typescript
public readonly targetServiceAttachmentUri: string;
```

- *Type:* string

URI of the service attachment to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#target_service_attachment_uri LookerInstance#target_service_attachment_uri}

---

### LookerInstanceTimeouts <a name="LookerInstanceTimeouts" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts.Initializer"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

const lookerInstanceTimeouts: lookerInstance.LookerInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#create LookerInstance#create}. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#delete LookerInstance#delete}. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#update LookerInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#create LookerInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#delete LookerInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#update LookerInstance#update}.

---

### LookerInstanceUserMetadata <a name="LookerInstanceUserMetadata" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata.Initializer"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

const lookerInstanceUserMetadata: lookerInstance.LookerInstanceUserMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata.property.additionalDeveloperUserCount">additionalDeveloperUserCount</a></code> | <code>number</code> | Number of additional Developer Users to allocate to the Looker Instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata.property.additionalStandardUserCount">additionalStandardUserCount</a></code> | <code>number</code> | Number of additional Standard Users to allocate to the Looker Instance. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata.property.additionalViewerUserCount">additionalViewerUserCount</a></code> | <code>number</code> | Number of additional Viewer Users to allocate to the Looker Instance. |

---

##### `additionalDeveloperUserCount`<sup>Optional</sup> <a name="additionalDeveloperUserCount" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata.property.additionalDeveloperUserCount"></a>

```typescript
public readonly additionalDeveloperUserCount: number;
```

- *Type:* number

Number of additional Developer Users to allocate to the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#additional_developer_user_count LookerInstance#additional_developer_user_count}

---

##### `additionalStandardUserCount`<sup>Optional</sup> <a name="additionalStandardUserCount" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata.property.additionalStandardUserCount"></a>

```typescript
public readonly additionalStandardUserCount: number;
```

- *Type:* number

Number of additional Standard Users to allocate to the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#additional_standard_user_count LookerInstance#additional_standard_user_count}

---

##### `additionalViewerUserCount`<sup>Optional</sup> <a name="additionalViewerUserCount" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata.property.additionalViewerUserCount"></a>

```typescript
public readonly additionalViewerUserCount: number;
```

- *Type:* number

Number of additional Viewer Users to allocate to the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/looker_instance#additional_viewer_user_count LookerInstance#additional_viewer_user_count}

---

## Classes <a name="Classes" id="Classes"></a>

### LookerInstanceAdminSettingsOutputReference <a name="LookerInstanceAdminSettingsOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.Initializer"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

new lookerInstance.LookerInstanceAdminSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.resetAllowedEmailDomains">resetAllowedEmailDomains</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedEmailDomains` <a name="resetAllowedEmailDomains" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.resetAllowedEmailDomains"></a>

```typescript
public resetAllowedEmailDomains(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.allowedEmailDomainsInput">allowedEmailDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.allowedEmailDomains">allowedEmailDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings">LookerInstanceAdminSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedEmailDomainsInput`<sup>Optional</sup> <a name="allowedEmailDomainsInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.allowedEmailDomainsInput"></a>

```typescript
public readonly allowedEmailDomainsInput: string[];
```

- *Type:* string[]

---

##### `allowedEmailDomains`<sup>Required</sup> <a name="allowedEmailDomains" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.allowedEmailDomains"></a>

```typescript
public readonly allowedEmailDomains: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LookerInstanceAdminSettings;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceAdminSettings">LookerInstanceAdminSettings</a>

---


### LookerInstanceCustomDomainOutputReference <a name="LookerInstanceCustomDomainOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.Initializer"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

new lookerInstance.LookerInstanceCustomDomainOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.resetDomain">resetDomain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.resetDomain"></a>

```typescript
public resetDomain(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain">LookerInstanceCustomDomain</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomainOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LookerInstanceCustomDomain;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceCustomDomain">LookerInstanceCustomDomain</a>

---


### LookerInstanceDenyMaintenancePeriodEndDateOutputReference <a name="LookerInstanceDenyMaintenancePeriodEndDateOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

new lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetMonth">resetMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetYear">resetYear</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDay` <a name="resetDay" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetDay"></a>

```typescript
public resetDay(): void
```

##### `resetMonth` <a name="resetMonth" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetMonth"></a>

```typescript
public resetMonth(): void
```

##### `resetYear` <a name="resetYear" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetYear"></a>

```typescript
public resetYear(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.dayInput">dayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.monthInput">monthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.yearInput">yearInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.day">day</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.month">month</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.year">year</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate">LookerInstanceDenyMaintenancePeriodEndDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: number;
```

- *Type:* number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.monthInput"></a>

```typescript
public readonly monthInput: number;
```

- *Type:* number

---

##### `yearInput`<sup>Optional</sup> <a name="yearInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.yearInput"></a>

```typescript
public readonly yearInput: number;
```

- *Type:* number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LookerInstanceDenyMaintenancePeriodEndDate;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate">LookerInstanceDenyMaintenancePeriodEndDate</a>

---


### LookerInstanceDenyMaintenancePeriodOutputReference <a name="LookerInstanceDenyMaintenancePeriodOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.Initializer"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

new lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putEndDate">putEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putStartDate">putStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putTime">putTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEndDate` <a name="putEndDate" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putEndDate"></a>

```typescript
public putEndDate(value: LookerInstanceDenyMaintenancePeriodEndDate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putEndDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate">LookerInstanceDenyMaintenancePeriodEndDate</a>

---

##### `putStartDate` <a name="putStartDate" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putStartDate"></a>

```typescript
public putStartDate(value: LookerInstanceDenyMaintenancePeriodStartDate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putStartDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate">LookerInstanceDenyMaintenancePeriodStartDate</a>

---

##### `putTime` <a name="putTime" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putTime"></a>

```typescript
public putTime(value: LookerInstanceDenyMaintenancePeriodTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.putTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime">LookerInstanceDenyMaintenancePeriodTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.endDate">endDate</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference">LookerInstanceDenyMaintenancePeriodEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.startDate">startDate</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference">LookerInstanceDenyMaintenancePeriodStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.time">time</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference">LookerInstanceDenyMaintenancePeriodTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.endDateInput">endDateInput</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate">LookerInstanceDenyMaintenancePeriodEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.startDateInput">startDateInput</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate">LookerInstanceDenyMaintenancePeriodStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.timeInput">timeInput</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime">LookerInstanceDenyMaintenancePeriodTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod">LookerInstanceDenyMaintenancePeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.endDate"></a>

```typescript
public readonly endDate: LookerInstanceDenyMaintenancePeriodEndDateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDateOutputReference">LookerInstanceDenyMaintenancePeriodEndDateOutputReference</a>

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.startDate"></a>

```typescript
public readonly startDate: LookerInstanceDenyMaintenancePeriodStartDateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference">LookerInstanceDenyMaintenancePeriodStartDateOutputReference</a>

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.time"></a>

```typescript
public readonly time: LookerInstanceDenyMaintenancePeriodTimeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference">LookerInstanceDenyMaintenancePeriodTimeOutputReference</a>

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.endDateInput"></a>

```typescript
public readonly endDateInput: LookerInstanceDenyMaintenancePeriodEndDate;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodEndDate">LookerInstanceDenyMaintenancePeriodEndDate</a>

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.startDateInput"></a>

```typescript
public readonly startDateInput: LookerInstanceDenyMaintenancePeriodStartDate;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate">LookerInstanceDenyMaintenancePeriodStartDate</a>

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.timeInput"></a>

```typescript
public readonly timeInput: LookerInstanceDenyMaintenancePeriodTime;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime">LookerInstanceDenyMaintenancePeriodTime</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LookerInstanceDenyMaintenancePeriod;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriod">LookerInstanceDenyMaintenancePeriod</a>

---


### LookerInstanceDenyMaintenancePeriodStartDateOutputReference <a name="LookerInstanceDenyMaintenancePeriodStartDateOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

new lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetMonth">resetMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetYear">resetYear</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDay` <a name="resetDay" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetDay"></a>

```typescript
public resetDay(): void
```

##### `resetMonth` <a name="resetMonth" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetMonth"></a>

```typescript
public resetMonth(): void
```

##### `resetYear` <a name="resetYear" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetYear"></a>

```typescript
public resetYear(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.dayInput">dayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.monthInput">monthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.yearInput">yearInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.day">day</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.month">month</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.year">year</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate">LookerInstanceDenyMaintenancePeriodStartDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: number;
```

- *Type:* number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.monthInput"></a>

```typescript
public readonly monthInput: number;
```

- *Type:* number

---

##### `yearInput`<sup>Optional</sup> <a name="yearInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.yearInput"></a>

```typescript
public readonly yearInput: number;
```

- *Type:* number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LookerInstanceDenyMaintenancePeriodStartDate;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodStartDate">LookerInstanceDenyMaintenancePeriodStartDate</a>

---


### LookerInstanceDenyMaintenancePeriodTimeOutputReference <a name="LookerInstanceDenyMaintenancePeriodTimeOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

new lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resetHours"></a>

```typescript
public resetHours(): void
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resetMinutes"></a>

```typescript
public resetMinutes(): void
```

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.resetSeconds"></a>

```typescript
public resetSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime">LookerInstanceDenyMaintenancePeriodTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.hoursInput"></a>

```typescript
public readonly hoursInput: number;
```

- *Type:* number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.minutesInput"></a>

```typescript
public readonly minutesInput: number;
```

- *Type:* number

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: number;
```

- *Type:* number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LookerInstanceDenyMaintenancePeriodTime;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceDenyMaintenancePeriodTime">LookerInstanceDenyMaintenancePeriodTime</a>

---


### LookerInstanceEncryptionConfigOutputReference <a name="LookerInstanceEncryptionConfigOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.Initializer"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

new lookerInstance.LookerInstanceEncryptionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.kmsKeyNameVersion">kmsKeyNameVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.kmsKeyState">kmsKeyState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig">LookerInstanceEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyNameVersion`<sup>Required</sup> <a name="kmsKeyNameVersion" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.kmsKeyNameVersion"></a>

```typescript
public readonly kmsKeyNameVersion: string;
```

- *Type:* string

---

##### `kmsKeyState`<sup>Required</sup> <a name="kmsKeyState" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.kmsKeyState"></a>

```typescript
public readonly kmsKeyState: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LookerInstanceEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceEncryptionConfig">LookerInstanceEncryptionConfig</a>

---


### LookerInstanceMaintenanceWindowOutputReference <a name="LookerInstanceMaintenanceWindowOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

new lookerInstance.LookerInstanceMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.putStartTime">putStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStartTime` <a name="putStartTime" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.putStartTime"></a>

```typescript
public putStartTime(value: LookerInstanceMaintenanceWindowStartTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime">LookerInstanceMaintenanceWindowStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference">LookerInstanceMaintenanceWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.startTimeInput">startTimeInput</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime">LookerInstanceMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow">LookerInstanceMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.startTime"></a>

```typescript
public readonly startTime: LookerInstanceMaintenanceWindowStartTimeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference">LookerInstanceMaintenanceWindowStartTimeOutputReference</a>

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.dayOfWeekInput"></a>

```typescript
public readonly dayOfWeekInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: LookerInstanceMaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime">LookerInstanceMaintenanceWindowStartTime</a>

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LookerInstanceMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindow">LookerInstanceMaintenanceWindow</a>

---


### LookerInstanceMaintenanceWindowStartTimeOutputReference <a name="LookerInstanceMaintenanceWindowStartTimeOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

new lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resetHours"></a>

```typescript
public resetHours(): void
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resetMinutes"></a>

```typescript
public resetMinutes(): void
```

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.resetSeconds"></a>

```typescript
public resetSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime">LookerInstanceMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.hoursInput"></a>

```typescript
public readonly hoursInput: number;
```

- *Type:* number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.minutesInput"></a>

```typescript
public readonly minutesInput: number;
```

- *Type:* number

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: number;
```

- *Type:* number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LookerInstanceMaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceMaintenanceWindowStartTime">LookerInstanceMaintenanceWindowStartTime</a>

---


### LookerInstanceOauthConfigOutputReference <a name="LookerInstanceOauthConfigOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.Initializer"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

new lookerInstance.LookerInstanceOauthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig">LookerInstanceOauthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LookerInstanceOauthConfig;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceOauthConfig">LookerInstanceOauthConfig</a>

---


### LookerInstancePscConfigOutputReference <a name="LookerInstancePscConfigOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.Initializer"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

new lookerInstance.LookerInstancePscConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.putServiceAttachments">putServiceAttachments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.resetAllowedVpcs">resetAllowedVpcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.resetServiceAttachments">resetServiceAttachments</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServiceAttachments` <a name="putServiceAttachments" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.putServiceAttachments"></a>

```typescript
public putServiceAttachments(value: IResolvable | LookerInstancePscConfigServiceAttachments[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.putServiceAttachments.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments">LookerInstancePscConfigServiceAttachments</a>[]

---

##### `resetAllowedVpcs` <a name="resetAllowedVpcs" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.resetAllowedVpcs"></a>

```typescript
public resetAllowedVpcs(): void
```

##### `resetServiceAttachments` <a name="resetServiceAttachments" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.resetServiceAttachments"></a>

```typescript
public resetServiceAttachments(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.lookerServiceAttachmentUri">lookerServiceAttachmentUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.serviceAttachments">serviceAttachments</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList">LookerInstancePscConfigServiceAttachmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.allowedVpcsInput">allowedVpcsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.serviceAttachmentsInput">serviceAttachmentsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments">LookerInstancePscConfigServiceAttachments</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.allowedVpcs">allowedVpcs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfig">LookerInstancePscConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lookerServiceAttachmentUri`<sup>Required</sup> <a name="lookerServiceAttachmentUri" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.lookerServiceAttachmentUri"></a>

```typescript
public readonly lookerServiceAttachmentUri: string;
```

- *Type:* string

---

##### `serviceAttachments`<sup>Required</sup> <a name="serviceAttachments" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.serviceAttachments"></a>

```typescript
public readonly serviceAttachments: LookerInstancePscConfigServiceAttachmentsList;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList">LookerInstancePscConfigServiceAttachmentsList</a>

---

##### `allowedVpcsInput`<sup>Optional</sup> <a name="allowedVpcsInput" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.allowedVpcsInput"></a>

```typescript
public readonly allowedVpcsInput: string[];
```

- *Type:* string[]

---

##### `serviceAttachmentsInput`<sup>Optional</sup> <a name="serviceAttachmentsInput" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.serviceAttachmentsInput"></a>

```typescript
public readonly serviceAttachmentsInput: IResolvable | LookerInstancePscConfigServiceAttachments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments">LookerInstancePscConfigServiceAttachments</a>[]

---

##### `allowedVpcs`<sup>Required</sup> <a name="allowedVpcs" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.allowedVpcs"></a>

```typescript
public readonly allowedVpcs: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LookerInstancePscConfig;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfig">LookerInstancePscConfig</a>

---


### LookerInstancePscConfigServiceAttachmentsList <a name="LookerInstancePscConfigServiceAttachmentsList" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.Initializer"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

new lookerInstance.LookerInstancePscConfigServiceAttachmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.get"></a>

```typescript
public get(index: number): LookerInstancePscConfigServiceAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments">LookerInstancePscConfigServiceAttachments</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LookerInstancePscConfigServiceAttachments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments">LookerInstancePscConfigServiceAttachments</a>[]

---


### LookerInstancePscConfigServiceAttachmentsOutputReference <a name="LookerInstancePscConfigServiceAttachmentsOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.Initializer"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

new lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.resetLocalFqdn">resetLocalFqdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.resetTargetServiceAttachmentUri">resetTargetServiceAttachmentUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLocalFqdn` <a name="resetLocalFqdn" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.resetLocalFqdn"></a>

```typescript
public resetLocalFqdn(): void
```

##### `resetTargetServiceAttachmentUri` <a name="resetTargetServiceAttachmentUri" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.resetTargetServiceAttachmentUri"></a>

```typescript
public resetTargetServiceAttachmentUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.connectionStatus">connectionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.localFqdnInput">localFqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.targetServiceAttachmentUriInput">targetServiceAttachmentUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.localFqdn">localFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.targetServiceAttachmentUri">targetServiceAttachmentUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments">LookerInstancePscConfigServiceAttachments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionStatus`<sup>Required</sup> <a name="connectionStatus" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.connectionStatus"></a>

```typescript
public readonly connectionStatus: string;
```

- *Type:* string

---

##### `localFqdnInput`<sup>Optional</sup> <a name="localFqdnInput" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.localFqdnInput"></a>

```typescript
public readonly localFqdnInput: string;
```

- *Type:* string

---

##### `targetServiceAttachmentUriInput`<sup>Optional</sup> <a name="targetServiceAttachmentUriInput" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.targetServiceAttachmentUriInput"></a>

```typescript
public readonly targetServiceAttachmentUriInput: string;
```

- *Type:* string

---

##### `localFqdn`<sup>Required</sup> <a name="localFqdn" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.localFqdn"></a>

```typescript
public readonly localFqdn: string;
```

- *Type:* string

---

##### `targetServiceAttachmentUri`<sup>Required</sup> <a name="targetServiceAttachmentUri" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.targetServiceAttachmentUri"></a>

```typescript
public readonly targetServiceAttachmentUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LookerInstancePscConfigServiceAttachments;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.lookerInstance.LookerInstancePscConfigServiceAttachments">LookerInstancePscConfigServiceAttachments</a>

---


### LookerInstanceTimeoutsOutputReference <a name="LookerInstanceTimeoutsOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

new lookerInstance.LookerInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts">LookerInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.lookerInstance.LookerInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LookerInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceTimeouts">LookerInstanceTimeouts</a>

---


### LookerInstanceUserMetadataOutputReference <a name="LookerInstanceUserMetadataOutputReference" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.Initializer"></a>

```typescript
import { lookerInstance } from '@cdktf/provider-google'

new lookerInstance.LookerInstanceUserMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resetAdditionalDeveloperUserCount">resetAdditionalDeveloperUserCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resetAdditionalStandardUserCount">resetAdditionalStandardUserCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resetAdditionalViewerUserCount">resetAdditionalViewerUserCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalDeveloperUserCount` <a name="resetAdditionalDeveloperUserCount" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resetAdditionalDeveloperUserCount"></a>

```typescript
public resetAdditionalDeveloperUserCount(): void
```

##### `resetAdditionalStandardUserCount` <a name="resetAdditionalStandardUserCount" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resetAdditionalStandardUserCount"></a>

```typescript
public resetAdditionalStandardUserCount(): void
```

##### `resetAdditionalViewerUserCount` <a name="resetAdditionalViewerUserCount" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.resetAdditionalViewerUserCount"></a>

```typescript
public resetAdditionalViewerUserCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalDeveloperUserCountInput">additionalDeveloperUserCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalStandardUserCountInput">additionalStandardUserCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalViewerUserCountInput">additionalViewerUserCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalDeveloperUserCount">additionalDeveloperUserCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalStandardUserCount">additionalStandardUserCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalViewerUserCount">additionalViewerUserCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata">LookerInstanceUserMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalDeveloperUserCountInput`<sup>Optional</sup> <a name="additionalDeveloperUserCountInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalDeveloperUserCountInput"></a>

```typescript
public readonly additionalDeveloperUserCountInput: number;
```

- *Type:* number

---

##### `additionalStandardUserCountInput`<sup>Optional</sup> <a name="additionalStandardUserCountInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalStandardUserCountInput"></a>

```typescript
public readonly additionalStandardUserCountInput: number;
```

- *Type:* number

---

##### `additionalViewerUserCountInput`<sup>Optional</sup> <a name="additionalViewerUserCountInput" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalViewerUserCountInput"></a>

```typescript
public readonly additionalViewerUserCountInput: number;
```

- *Type:* number

---

##### `additionalDeveloperUserCount`<sup>Required</sup> <a name="additionalDeveloperUserCount" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalDeveloperUserCount"></a>

```typescript
public readonly additionalDeveloperUserCount: number;
```

- *Type:* number

---

##### `additionalStandardUserCount`<sup>Required</sup> <a name="additionalStandardUserCount" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalStandardUserCount"></a>

```typescript
public readonly additionalStandardUserCount: number;
```

- *Type:* number

---

##### `additionalViewerUserCount`<sup>Required</sup> <a name="additionalViewerUserCount" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.additionalViewerUserCount"></a>

```typescript
public readonly additionalViewerUserCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LookerInstanceUserMetadata;
```

- *Type:* <a href="#@cdktf/provider-google.lookerInstance.LookerInstanceUserMetadata">LookerInstanceUserMetadata</a>

---



