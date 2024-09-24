# `privatecaCertificateAuthority` Submodule <a name="`privatecaCertificateAuthority` Submodule" id="@cdktf/provider-google.privatecaCertificateAuthority"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivatecaCertificateAuthority <a name="PrivatecaCertificateAuthority" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority google_privateca_certificate_authority}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

new privatecaCertificateAuthority.PrivatecaCertificateAuthority(scope: Construct, id: string, config: PrivatecaCertificateAuthorityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig">PrivatecaCertificateAuthorityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig">PrivatecaCertificateAuthorityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.putKeySpec">putKeySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.putSubordinateConfig">putSubordinateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetDesiredState">resetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetGcsBucket">resetGcsBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetIgnoreActiveCertificatesOnDeletion">resetIgnoreActiveCertificatesOnDeletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetLifetime">resetLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetPemCaCertificate">resetPemCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetSkipGracePeriod">resetSkipGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetSubordinateConfig">resetSubordinateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.putConfig"></a>

```typescript
public putConfig(value: PrivatecaCertificateAuthorityConfigA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigA">PrivatecaCertificateAuthorityConfigA</a>

---

##### `putKeySpec` <a name="putKeySpec" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.putKeySpec"></a>

```typescript
public putKeySpec(value: PrivatecaCertificateAuthorityKeySpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.putKeySpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpec">PrivatecaCertificateAuthorityKeySpec</a>

---

##### `putSubordinateConfig` <a name="putSubordinateConfig" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.putSubordinateConfig"></a>

```typescript
public putSubordinateConfig(value: PrivatecaCertificateAuthoritySubordinateConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.putSubordinateConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfig">PrivatecaCertificateAuthoritySubordinateConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.putTimeouts"></a>

```typescript
public putTimeouts(value: PrivatecaCertificateAuthorityTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeouts">PrivatecaCertificateAuthorityTimeouts</a>

---

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetDesiredState` <a name="resetDesiredState" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetDesiredState"></a>

```typescript
public resetDesiredState(): void
```

##### `resetGcsBucket` <a name="resetGcsBucket" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetGcsBucket"></a>

```typescript
public resetGcsBucket(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoreActiveCertificatesOnDeletion` <a name="resetIgnoreActiveCertificatesOnDeletion" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetIgnoreActiveCertificatesOnDeletion"></a>

```typescript
public resetIgnoreActiveCertificatesOnDeletion(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLifetime` <a name="resetLifetime" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetLifetime"></a>

```typescript
public resetLifetime(): void
```

##### `resetPemCaCertificate` <a name="resetPemCaCertificate" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetPemCaCertificate"></a>

```typescript
public resetPemCaCertificate(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSkipGracePeriod` <a name="resetSkipGracePeriod" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetSkipGracePeriod"></a>

```typescript
public resetSkipGracePeriod(): void
```

##### `resetSubordinateConfig` <a name="resetSubordinateConfig" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetSubordinateConfig"></a>

```typescript
public resetSubordinateConfig(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PrivatecaCertificateAuthority resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.isConstruct"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

privatecaCertificateAuthority.PrivatecaCertificateAuthority.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.isTerraformElement"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

privatecaCertificateAuthority.PrivatecaCertificateAuthority.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.isTerraformResource"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

privatecaCertificateAuthority.PrivatecaCertificateAuthority.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.generateConfigForImport"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

privatecaCertificateAuthority.PrivatecaCertificateAuthority.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PrivatecaCertificateAuthority resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrivatecaCertificateAuthority to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrivatecaCertificateAuthority that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PrivatecaCertificateAuthority to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.accessUrls">accessUrls</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList">PrivatecaCertificateAuthorityAccessUrlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference">PrivatecaCertificateAuthorityConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.keySpec">keySpec</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference">PrivatecaCertificateAuthorityKeySpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.pemCaCertificates">pemCaCertificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.subordinateConfig">subordinateConfig</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference">PrivatecaCertificateAuthoritySubordinateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference">PrivatecaCertificateAuthorityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.certificateAuthorityIdInput">certificateAuthorityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigA">PrivatecaCertificateAuthorityConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.desiredStateInput">desiredStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.gcsBucketInput">gcsBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.ignoreActiveCertificatesOnDeletionInput">ignoreActiveCertificatesOnDeletionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.keySpecInput">keySpecInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpec">PrivatecaCertificateAuthorityKeySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.lifetimeInput">lifetimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.pemCaCertificateInput">pemCaCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.poolInput">poolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.skipGracePeriodInput">skipGracePeriodInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.subordinateConfigInput">subordinateConfigInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfig">PrivatecaCertificateAuthoritySubordinateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeouts">PrivatecaCertificateAuthorityTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.certificateAuthorityId">certificateAuthorityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.desiredState">desiredState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.gcsBucket">gcsBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.ignoreActiveCertificatesOnDeletion">ignoreActiveCertificatesOnDeletion</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.lifetime">lifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.pemCaCertificate">pemCaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.pool">pool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.skipGracePeriod">skipGracePeriod</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessUrls`<sup>Required</sup> <a name="accessUrls" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.accessUrls"></a>

```typescript
public readonly accessUrls: PrivatecaCertificateAuthorityAccessUrlsList;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList">PrivatecaCertificateAuthorityAccessUrlsList</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.config"></a>

```typescript
public readonly config: PrivatecaCertificateAuthorityConfigAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference">PrivatecaCertificateAuthorityConfigAOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `keySpec`<sup>Required</sup> <a name="keySpec" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.keySpec"></a>

```typescript
public readonly keySpec: PrivatecaCertificateAuthorityKeySpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference">PrivatecaCertificateAuthorityKeySpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pemCaCertificates`<sup>Required</sup> <a name="pemCaCertificates" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.pemCaCertificates"></a>

```typescript
public readonly pemCaCertificates: string[];
```

- *Type:* string[]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subordinateConfig`<sup>Required</sup> <a name="subordinateConfig" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.subordinateConfig"></a>

```typescript
public readonly subordinateConfig: PrivatecaCertificateAuthoritySubordinateConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference">PrivatecaCertificateAuthoritySubordinateConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.timeouts"></a>

```typescript
public readonly timeouts: PrivatecaCertificateAuthorityTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference">PrivatecaCertificateAuthorityTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `certificateAuthorityIdInput`<sup>Optional</sup> <a name="certificateAuthorityIdInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.certificateAuthorityIdInput"></a>

```typescript
public readonly certificateAuthorityIdInput: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.configInput"></a>

```typescript
public readonly configInput: PrivatecaCertificateAuthorityConfigA;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigA">PrivatecaCertificateAuthorityConfigA</a>

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `desiredStateInput`<sup>Optional</sup> <a name="desiredStateInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.desiredStateInput"></a>

```typescript
public readonly desiredStateInput: string;
```

- *Type:* string

---

##### `gcsBucketInput`<sup>Optional</sup> <a name="gcsBucketInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.gcsBucketInput"></a>

```typescript
public readonly gcsBucketInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoreActiveCertificatesOnDeletionInput`<sup>Optional</sup> <a name="ignoreActiveCertificatesOnDeletionInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.ignoreActiveCertificatesOnDeletionInput"></a>

```typescript
public readonly ignoreActiveCertificatesOnDeletionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keySpecInput`<sup>Optional</sup> <a name="keySpecInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.keySpecInput"></a>

```typescript
public readonly keySpecInput: PrivatecaCertificateAuthorityKeySpec;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpec">PrivatecaCertificateAuthorityKeySpec</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `lifetimeInput`<sup>Optional</sup> <a name="lifetimeInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.lifetimeInput"></a>

```typescript
public readonly lifetimeInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `pemCaCertificateInput`<sup>Optional</sup> <a name="pemCaCertificateInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.pemCaCertificateInput"></a>

```typescript
public readonly pemCaCertificateInput: string;
```

- *Type:* string

---

##### `poolInput`<sup>Optional</sup> <a name="poolInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.poolInput"></a>

```typescript
public readonly poolInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `skipGracePeriodInput`<sup>Optional</sup> <a name="skipGracePeriodInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.skipGracePeriodInput"></a>

```typescript
public readonly skipGracePeriodInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subordinateConfigInput`<sup>Optional</sup> <a name="subordinateConfigInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.subordinateConfigInput"></a>

```typescript
public readonly subordinateConfigInput: PrivatecaCertificateAuthoritySubordinateConfig;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfig">PrivatecaCertificateAuthoritySubordinateConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PrivatecaCertificateAuthorityTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeouts">PrivatecaCertificateAuthorityTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `certificateAuthorityId`<sup>Required</sup> <a name="certificateAuthorityId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.certificateAuthorityId"></a>

```typescript
public readonly certificateAuthorityId: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

---

##### `gcsBucket`<sup>Required</sup> <a name="gcsBucket" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.gcsBucket"></a>

```typescript
public readonly gcsBucket: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreActiveCertificatesOnDeletion`<sup>Required</sup> <a name="ignoreActiveCertificatesOnDeletion" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.ignoreActiveCertificatesOnDeletion"></a>

```typescript
public readonly ignoreActiveCertificatesOnDeletion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.lifetime"></a>

```typescript
public readonly lifetime: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `pemCaCertificate`<sup>Required</sup> <a name="pemCaCertificate" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.pemCaCertificate"></a>

```typescript
public readonly pemCaCertificate: string;
```

- *Type:* string

---

##### `pool`<sup>Required</sup> <a name="pool" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.pool"></a>

```typescript
public readonly pool: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `skipGracePeriod`<sup>Required</sup> <a name="skipGracePeriod" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.skipGracePeriod"></a>

```typescript
public readonly skipGracePeriod: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivatecaCertificateAuthorityAccessUrls <a name="PrivatecaCertificateAuthorityAccessUrls" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrls.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

const privatecaCertificateAuthorityAccessUrls: privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrls = { ... }
```


### PrivatecaCertificateAuthorityConfig <a name="PrivatecaCertificateAuthorityConfig" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

const privatecaCertificateAuthorityConfig: privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.certificateAuthorityId">certificateAuthorityId</a></code> | <code>string</code> | The user provided Resource ID for this Certificate Authority. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigA">PrivatecaCertificateAuthorityConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.keySpec">keySpec</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpec">PrivatecaCertificateAuthorityKeySpec</a></code> | key_spec block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.location">location</a></code> | <code>string</code> | Location of the CertificateAuthority. A full list of valid locations can be found by running 'gcloud privateca locations list'. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.pool">pool</a></code> | <code>string</code> | The name of the CaPool this Certificate Authority belongs to. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether Terraform will be prevented from destroying the CertificateAuthority. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.desiredState">desiredState</a></code> | <code>string</code> | Desired state of the CertificateAuthority. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.gcsBucket">gcsBucket</a></code> | <code>string</code> | The name of a Cloud Storage bucket where this CertificateAuthority will publish content, such as the CA certificate and CRLs. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#id PrivatecaCertificateAuthority#id}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.ignoreActiveCertificatesOnDeletion">ignoreActiveCertificatesOnDeletion</a></code> | <code>boolean \| cdktf.IResolvable</code> | This field allows the CA to be deleted even if the CA has active certs. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels with user-defined metadata. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.lifetime">lifetime</a></code> | <code>string</code> | The desired lifetime of the CA certificate. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.pemCaCertificate">pemCaCertificate</a></code> | <code>string</code> | The signed CA certificate issued from the subordinated CA's CSR. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#project PrivatecaCertificateAuthority#project}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.skipGracePeriod">skipGracePeriod</a></code> | <code>boolean \| cdktf.IResolvable</code> | If this flag is set, the Certificate Authority will be deleted as soon as possible without a 30-day grace period where undeletion would have been allowed. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.subordinateConfig">subordinateConfig</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfig">PrivatecaCertificateAuthoritySubordinateConfig</a></code> | subordinate_config block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeouts">PrivatecaCertificateAuthorityTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.type">type</a></code> | <code>string</code> | The Type of this CertificateAuthority. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificateAuthorityId`<sup>Required</sup> <a name="certificateAuthorityId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.certificateAuthorityId"></a>

```typescript
public readonly certificateAuthorityId: string;
```

- *Type:* string

The user provided Resource ID for this Certificate Authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#certificate_authority_id PrivatecaCertificateAuthority#certificate_authority_id}

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.config"></a>

```typescript
public readonly config: PrivatecaCertificateAuthorityConfigA;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigA">PrivatecaCertificateAuthorityConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#config PrivatecaCertificateAuthority#config}

---

##### `keySpec`<sup>Required</sup> <a name="keySpec" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.keySpec"></a>

```typescript
public readonly keySpec: PrivatecaCertificateAuthorityKeySpec;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpec">PrivatecaCertificateAuthorityKeySpec</a>

key_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#key_spec PrivatecaCertificateAuthority#key_spec}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location of the CertificateAuthority. A full list of valid locations can be found by running 'gcloud privateca locations list'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#location PrivatecaCertificateAuthority#location}

---

##### `pool`<sup>Required</sup> <a name="pool" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.pool"></a>

```typescript
public readonly pool: string;
```

- *Type:* string

The name of the CaPool this Certificate Authority belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#pool PrivatecaCertificateAuthority#pool}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether Terraform will be prevented from destroying the CertificateAuthority.

When the field is set to true or unset in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the CertificateAuthority will fail.
When the field is set to false, deleting the CertificateAuthority is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#deletion_protection PrivatecaCertificateAuthority#deletion_protection}

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

Desired state of the CertificateAuthority.

Set this field to 'STAGED' to create a 'STAGED' root CA.
Possible values: ENABLED, DISABLED, STAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#desired_state PrivatecaCertificateAuthority#desired_state}

---

##### `gcsBucket`<sup>Optional</sup> <a name="gcsBucket" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.gcsBucket"></a>

```typescript
public readonly gcsBucket: string;
```

- *Type:* string

The name of a Cloud Storage bucket where this CertificateAuthority will publish content, such as the CA certificate and CRLs.

This must be a bucket name, without any prefixes
(such as 'gs://') or suffixes (such as '.googleapis.com'). For example, to use a bucket named
my-bucket, you would simply specify 'my-bucket'. If not specified, a managed bucket will be
created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#gcs_bucket PrivatecaCertificateAuthority#gcs_bucket}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#id PrivatecaCertificateAuthority#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreActiveCertificatesOnDeletion`<sup>Optional</sup> <a name="ignoreActiveCertificatesOnDeletion" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.ignoreActiveCertificatesOnDeletion"></a>

```typescript
public readonly ignoreActiveCertificatesOnDeletion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

This field allows the CA to be deleted even if the CA has active certs.

Active certs include both unrevoked and unexpired certs.
Use with care. Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#ignore_active_certificates_on_deletion PrivatecaCertificateAuthority#ignore_active_certificates_on_deletion}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels with user-defined metadata.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass":
"1.3kg", "count": "3" }.


**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#labels PrivatecaCertificateAuthority#labels}

---

##### `lifetime`<sup>Optional</sup> <a name="lifetime" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.lifetime"></a>

```typescript
public readonly lifetime: string;
```

- *Type:* string

The desired lifetime of the CA certificate.

Used to create the "notBeforeTime" and
"notAfterTime" fields inside an X.509 certificate. A duration in seconds with up to nine
fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#lifetime PrivatecaCertificateAuthority#lifetime}

---

##### `pemCaCertificate`<sup>Optional</sup> <a name="pemCaCertificate" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.pemCaCertificate"></a>

```typescript
public readonly pemCaCertificate: string;
```

- *Type:* string

The signed CA certificate issued from the subordinated CA's CSR.

This is needed when activating the subordiante CA with a third party issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#pem_ca_certificate PrivatecaCertificateAuthority#pem_ca_certificate}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#project PrivatecaCertificateAuthority#project}.

---

##### `skipGracePeriod`<sup>Optional</sup> <a name="skipGracePeriod" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.skipGracePeriod"></a>

```typescript
public readonly skipGracePeriod: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If this flag is set, the Certificate Authority will be deleted as soon as possible without a 30-day grace period where undeletion would have been allowed.

If you proceed, there will be no way to recover this CA.
Use with care. Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#skip_grace_period PrivatecaCertificateAuthority#skip_grace_period}

---

##### `subordinateConfig`<sup>Optional</sup> <a name="subordinateConfig" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.subordinateConfig"></a>

```typescript
public readonly subordinateConfig: PrivatecaCertificateAuthoritySubordinateConfig;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfig">PrivatecaCertificateAuthoritySubordinateConfig</a>

subordinate_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#subordinate_config PrivatecaCertificateAuthority#subordinate_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PrivatecaCertificateAuthorityTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeouts">PrivatecaCertificateAuthorityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#timeouts PrivatecaCertificateAuthority#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The Type of this CertificateAuthority.

~> **Note:** For 'SUBORDINATE' Certificate Authorities, they need to
be activated before they can issue certificates. Default value: "SELF_SIGNED" Possible values: ["SELF_SIGNED", "SUBORDINATE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#type PrivatecaCertificateAuthority#type}

---

### PrivatecaCertificateAuthorityConfigA <a name="PrivatecaCertificateAuthorityConfigA" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigA.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

const privatecaCertificateAuthorityConfigA: privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigA.property.subjectConfig">subjectConfig</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfig">PrivatecaCertificateAuthorityConfigSubjectConfig</a></code> | subject_config block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigA.property.x509Config">x509Config</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config">PrivatecaCertificateAuthorityConfigX509Config</a></code> | x509_config block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigA.property.subjectKeyId">subjectKeyId</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyId">PrivatecaCertificateAuthorityConfigSubjectKeyId</a></code> | subject_key_id block. |

---

##### `subjectConfig`<sup>Required</sup> <a name="subjectConfig" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigA.property.subjectConfig"></a>

```typescript
public readonly subjectConfig: PrivatecaCertificateAuthorityConfigSubjectConfig;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfig">PrivatecaCertificateAuthorityConfigSubjectConfig</a>

subject_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#subject_config PrivatecaCertificateAuthority#subject_config}

---

##### `x509Config`<sup>Required</sup> <a name="x509Config" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigA.property.x509Config"></a>

```typescript
public readonly x509Config: PrivatecaCertificateAuthorityConfigX509Config;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config">PrivatecaCertificateAuthorityConfigX509Config</a>

x509_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#x509_config PrivatecaCertificateAuthority#x509_config}

---

##### `subjectKeyId`<sup>Optional</sup> <a name="subjectKeyId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigA.property.subjectKeyId"></a>

```typescript
public readonly subjectKeyId: PrivatecaCertificateAuthorityConfigSubjectKeyId;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyId">PrivatecaCertificateAuthorityConfigSubjectKeyId</a>

subject_key_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#subject_key_id PrivatecaCertificateAuthority#subject_key_id}

---

### PrivatecaCertificateAuthorityConfigSubjectConfig <a name="PrivatecaCertificateAuthorityConfigSubjectConfig" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfig.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

const privatecaCertificateAuthorityConfigSubjectConfig: privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfig.property.subject">subject</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject">PrivatecaCertificateAuthorityConfigSubjectConfigSubject</a></code> | subject block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfig.property.subjectAltName">subjectAltName</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName">PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName</a></code> | subject_alt_name block. |

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfig.property.subject"></a>

```typescript
public readonly subject: PrivatecaCertificateAuthorityConfigSubjectConfigSubject;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject">PrivatecaCertificateAuthorityConfigSubjectConfigSubject</a>

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#subject PrivatecaCertificateAuthority#subject}

---

##### `subjectAltName`<sup>Optional</sup> <a name="subjectAltName" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfig.property.subjectAltName"></a>

```typescript
public readonly subjectAltName: PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName">PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName</a>

subject_alt_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#subject_alt_name PrivatecaCertificateAuthority#subject_alt_name}

---

### PrivatecaCertificateAuthorityConfigSubjectConfigSubject <a name="PrivatecaCertificateAuthorityConfigSubjectConfigSubject" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

const privatecaCertificateAuthorityConfigSubjectConfigSubject: privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.property.commonName">commonName</a></code> | <code>string</code> | The common name of the distinguished name. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.property.organization">organization</a></code> | <code>string</code> | The organization of the subject. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.property.countryCode">countryCode</a></code> | <code>string</code> | The country code of the subject. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.property.locality">locality</a></code> | <code>string</code> | The locality or city of the subject. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.property.organizationalUnit">organizationalUnit</a></code> | <code>string</code> | The organizational unit of the subject. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.property.postalCode">postalCode</a></code> | <code>string</code> | The postal code of the subject. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.property.province">province</a></code> | <code>string</code> | The province, territory, or regional state of the subject. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.property.streetAddress">streetAddress</a></code> | <code>string</code> | The street address of the subject. |

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* string

The common name of the distinguished name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#common_name PrivatecaCertificateAuthority#common_name}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

The organization of the subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#organization PrivatecaCertificateAuthority#organization}

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

The country code of the subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#country_code PrivatecaCertificateAuthority#country_code}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.property.locality"></a>

```typescript
public readonly locality: string;
```

- *Type:* string

The locality or city of the subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#locality PrivatecaCertificateAuthority#locality}

---

##### `organizationalUnit`<sup>Optional</sup> <a name="organizationalUnit" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.property.organizationalUnit"></a>

```typescript
public readonly organizationalUnit: string;
```

- *Type:* string

The organizational unit of the subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#organizational_unit PrivatecaCertificateAuthority#organizational_unit}

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

The postal code of the subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#postal_code PrivatecaCertificateAuthority#postal_code}

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.property.province"></a>

```typescript
public readonly province: string;
```

- *Type:* string

The province, territory, or regional state of the subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#province PrivatecaCertificateAuthority#province}

---

##### `streetAddress`<sup>Optional</sup> <a name="streetAddress" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.property.streetAddress"></a>

```typescript
public readonly streetAddress: string;
```

- *Type:* string

The street address of the subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#street_address PrivatecaCertificateAuthority#street_address}

---

### PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName <a name="PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

const privatecaCertificateAuthorityConfigSubjectConfigSubjectAltName: privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName.property.dnsNames">dnsNames</a></code> | <code>string[]</code> | Contains only valid, fully-qualified host names. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName.property.emailAddresses">emailAddresses</a></code> | <code>string[]</code> | Contains only valid RFC 2822 E-mail addresses. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName.property.ipAddresses">ipAddresses</a></code> | <code>string[]</code> | Contains only valid 32-bit IPv4 addresses or RFC 4291 IPv6 addresses. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName.property.uris">uris</a></code> | <code>string[]</code> | Contains only valid RFC 3986 URIs. |

---

##### `dnsNames`<sup>Optional</sup> <a name="dnsNames" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName.property.dnsNames"></a>

```typescript
public readonly dnsNames: string[];
```

- *Type:* string[]

Contains only valid, fully-qualified host names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#dns_names PrivatecaCertificateAuthority#dns_names}

---

##### `emailAddresses`<sup>Optional</sup> <a name="emailAddresses" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName.property.emailAddresses"></a>

```typescript
public readonly emailAddresses: string[];
```

- *Type:* string[]

Contains only valid RFC 2822 E-mail addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#email_addresses PrivatecaCertificateAuthority#email_addresses}

---

##### `ipAddresses`<sup>Optional</sup> <a name="ipAddresses" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: string[];
```

- *Type:* string[]

Contains only valid 32-bit IPv4 addresses or RFC 4291 IPv6 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#ip_addresses PrivatecaCertificateAuthority#ip_addresses}

---

##### `uris`<sup>Optional</sup> <a name="uris" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName.property.uris"></a>

```typescript
public readonly uris: string[];
```

- *Type:* string[]

Contains only valid RFC 3986 URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#uris PrivatecaCertificateAuthority#uris}

---

### PrivatecaCertificateAuthorityConfigSubjectKeyId <a name="PrivatecaCertificateAuthorityConfigSubjectKeyId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyId.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

const privatecaCertificateAuthorityConfigSubjectKeyId: privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyId = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyId.property.keyId">keyId</a></code> | <code>string</code> | The value of the KeyId in lowercase hexidecimal. |

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyId.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

The value of the KeyId in lowercase hexidecimal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#key_id PrivatecaCertificateAuthority#key_id}

---

### PrivatecaCertificateAuthorityConfigX509Config <a name="PrivatecaCertificateAuthorityConfigX509Config" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

const privatecaCertificateAuthorityConfigX509Config: privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config.property.caOptions">caOptions</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions">PrivatecaCertificateAuthorityConfigX509ConfigCaOptions</a></code> | ca_options block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config.property.keyUsage">keyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage</a></code> | key_usage block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config.property.additionalExtensions">additionalExtensions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions</a>[]</code> | additional_extensions block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config.property.aiaOcspServers">aiaOcspServers</a></code> | <code>string[]</code> | Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config.property.nameConstraints">nameConstraints</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints">PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints</a></code> | name_constraints block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config.property.policyIds">policyIds</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds">PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds</a>[]</code> | policy_ids block. |

---

##### `caOptions`<sup>Required</sup> <a name="caOptions" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config.property.caOptions"></a>

```typescript
public readonly caOptions: PrivatecaCertificateAuthorityConfigX509ConfigCaOptions;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions">PrivatecaCertificateAuthorityConfigX509ConfigCaOptions</a>

ca_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#ca_options PrivatecaCertificateAuthority#ca_options}

---

##### `keyUsage`<sup>Required</sup> <a name="keyUsage" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config.property.keyUsage"></a>

```typescript
public readonly keyUsage: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage</a>

key_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#key_usage PrivatecaCertificateAuthority#key_usage}

---

##### `additionalExtensions`<sup>Optional</sup> <a name="additionalExtensions" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config.property.additionalExtensions"></a>

```typescript
public readonly additionalExtensions: IResolvable | PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions</a>[]

additional_extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#additional_extensions PrivatecaCertificateAuthority#additional_extensions}

---

##### `aiaOcspServers`<sup>Optional</sup> <a name="aiaOcspServers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config.property.aiaOcspServers"></a>

```typescript
public readonly aiaOcspServers: string[];
```

- *Type:* string[]

Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#aia_ocsp_servers PrivatecaCertificateAuthority#aia_ocsp_servers}

---

##### `nameConstraints`<sup>Optional</sup> <a name="nameConstraints" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config.property.nameConstraints"></a>

```typescript
public readonly nameConstraints: PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints">PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints</a>

name_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#name_constraints PrivatecaCertificateAuthority#name_constraints}

---

##### `policyIds`<sup>Optional</sup> <a name="policyIds" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config.property.policyIds"></a>

```typescript
public readonly policyIds: IResolvable | PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds">PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds</a>[]

policy_ids block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#policy_ids PrivatecaCertificateAuthority#policy_ids}

---

### PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions <a name="PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

const privatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions: privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions.property.critical">critical</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error). |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions.property.objectId">objectId</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId</a></code> | object_id block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions.property.value">value</a></code> | <code>string</code> | The value of this X.509 extension. A base64-encoded string. |

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions.property.critical"></a>

```typescript
public readonly critical: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#critical PrivatecaCertificateAuthority#critical}

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions.property.objectId"></a>

```typescript
public readonly objectId: PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId</a>

object_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#object_id PrivatecaCertificateAuthority#object_id}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of this X.509 extension. A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#value PrivatecaCertificateAuthority#value}

---

### PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId <a name="PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

const privatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId: privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId.property.objectIdPath">objectIdPath</a></code> | <code>number[]</code> | An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages. |

---

##### `objectIdPath`<sup>Required</sup> <a name="objectIdPath" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId.property.objectIdPath"></a>

```typescript
public readonly objectIdPath: number[];
```

- *Type:* number[]

An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#object_id_path PrivatecaCertificateAuthority#object_id_path}

---

### PrivatecaCertificateAuthorityConfigX509ConfigCaOptions <a name="PrivatecaCertificateAuthorityConfigX509ConfigCaOptions" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

const privatecaCertificateAuthorityConfigX509ConfigCaOptions: privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions.property.isCa">isCa</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, the "CA" in Basic Constraints extension will be set to true. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions.property.maxIssuerPathLength">maxIssuerPathLength</a></code> | <code>number</code> | Refers to the "path length constraint" in Basic Constraints extension. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions.property.nonCa">nonCa</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, the "CA" in Basic Constraints extension will be set to false. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions.property.zeroMaxIssuerPathLength">zeroMaxIssuerPathLength</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, the "path length constraint" in Basic Constraints extension will be set to 0. |

---

##### `isCa`<sup>Required</sup> <a name="isCa" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions.property.isCa"></a>

```typescript
public readonly isCa: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, the "CA" in Basic Constraints extension will be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#is_ca PrivatecaCertificateAuthority#is_ca}

---

##### `maxIssuerPathLength`<sup>Optional</sup> <a name="maxIssuerPathLength" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions.property.maxIssuerPathLength"></a>

```typescript
public readonly maxIssuerPathLength: number;
```

- *Type:* number

Refers to the "path length constraint" in Basic Constraints extension.

For a CA certificate, this value describes the depth of
subordinate CA certificates that are allowed. If this value is less than 0, the request will fail. Setting the value to 0
requires setting 'zero_max_issuer_path_length = true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#max_issuer_path_length PrivatecaCertificateAuthority#max_issuer_path_length}

---

##### `nonCa`<sup>Optional</sup> <a name="nonCa" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions.property.nonCa"></a>

```typescript
public readonly nonCa: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, the "CA" in Basic Constraints extension will be set to false.

If both 'is_ca' and 'non_ca' are unset, the extension will be omitted from the CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#non_ca PrivatecaCertificateAuthority#non_ca}

---

##### `zeroMaxIssuerPathLength`<sup>Optional</sup> <a name="zeroMaxIssuerPathLength" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions.property.zeroMaxIssuerPathLength"></a>

```typescript
public readonly zeroMaxIssuerPathLength: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, the "path length constraint" in Basic Constraints extension will be set to 0.

If both 'max_issuer_path_length' and 'zero_max_issuer_path_length' are unset,
the max path length will be omitted from the CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#zero_max_issuer_path_length PrivatecaCertificateAuthority#zero_max_issuer_path_length}

---

### PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage <a name="PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

const privatecaCertificateAuthorityConfigX509ConfigKeyUsage: privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage.property.baseKeyUsage">baseKeyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage</a></code> | base_key_usage block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage.property.extendedKeyUsage">extendedKeyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage</a></code> | extended_key_usage block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage.property.unknownExtendedKeyUsages">unknownExtendedKeyUsages</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages</a>[]</code> | unknown_extended_key_usages block. |

---

##### `baseKeyUsage`<sup>Required</sup> <a name="baseKeyUsage" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage.property.baseKeyUsage"></a>

```typescript
public readonly baseKeyUsage: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage</a>

base_key_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#base_key_usage PrivatecaCertificateAuthority#base_key_usage}

---

##### `extendedKeyUsage`<sup>Required</sup> <a name="extendedKeyUsage" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage.property.extendedKeyUsage"></a>

```typescript
public readonly extendedKeyUsage: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage</a>

extended_key_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#extended_key_usage PrivatecaCertificateAuthority#extended_key_usage}

---

##### `unknownExtendedKeyUsages`<sup>Optional</sup> <a name="unknownExtendedKeyUsages" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage.property.unknownExtendedKeyUsages"></a>

```typescript
public readonly unknownExtendedKeyUsages: IResolvable | PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages</a>[]

unknown_extended_key_usages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#unknown_extended_key_usages PrivatecaCertificateAuthority#unknown_extended_key_usages}

---

### PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage <a name="PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

const privatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage: privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.certSign">certSign</a></code> | <code>boolean \| cdktf.IResolvable</code> | The key may be used to sign certificates. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.contentCommitment">contentCommitment</a></code> | <code>boolean \| cdktf.IResolvable</code> | The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation". |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.crlSign">crlSign</a></code> | <code>boolean \| cdktf.IResolvable</code> | The key may be used sign certificate revocation lists. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.dataEncipherment">dataEncipherment</a></code> | <code>boolean \| cdktf.IResolvable</code> | The key may be used to encipher data. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.decipherOnly">decipherOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | The key may be used to decipher only. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.digitalSignature">digitalSignature</a></code> | <code>boolean \| cdktf.IResolvable</code> | The key may be used for digital signatures. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.encipherOnly">encipherOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | The key may be used to encipher only. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.keyAgreement">keyAgreement</a></code> | <code>boolean \| cdktf.IResolvable</code> | The key may be used in a key agreement protocol. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.keyEncipherment">keyEncipherment</a></code> | <code>boolean \| cdktf.IResolvable</code> | The key may be used to encipher other keys. |

---

##### `certSign`<sup>Optional</sup> <a name="certSign" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.certSign"></a>

```typescript
public readonly certSign: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The key may be used to sign certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#cert_sign PrivatecaCertificateAuthority#cert_sign}

---

##### `contentCommitment`<sup>Optional</sup> <a name="contentCommitment" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.contentCommitment"></a>

```typescript
public readonly contentCommitment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#content_commitment PrivatecaCertificateAuthority#content_commitment}

---

##### `crlSign`<sup>Optional</sup> <a name="crlSign" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.crlSign"></a>

```typescript
public readonly crlSign: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The key may be used sign certificate revocation lists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#crl_sign PrivatecaCertificateAuthority#crl_sign}

---

##### `dataEncipherment`<sup>Optional</sup> <a name="dataEncipherment" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.dataEncipherment"></a>

```typescript
public readonly dataEncipherment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The key may be used to encipher data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#data_encipherment PrivatecaCertificateAuthority#data_encipherment}

---

##### `decipherOnly`<sup>Optional</sup> <a name="decipherOnly" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.decipherOnly"></a>

```typescript
public readonly decipherOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The key may be used to decipher only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#decipher_only PrivatecaCertificateAuthority#decipher_only}

---

##### `digitalSignature`<sup>Optional</sup> <a name="digitalSignature" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.digitalSignature"></a>

```typescript
public readonly digitalSignature: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The key may be used for digital signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#digital_signature PrivatecaCertificateAuthority#digital_signature}

---

##### `encipherOnly`<sup>Optional</sup> <a name="encipherOnly" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.encipherOnly"></a>

```typescript
public readonly encipherOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The key may be used to encipher only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#encipher_only PrivatecaCertificateAuthority#encipher_only}

---

##### `keyAgreement`<sup>Optional</sup> <a name="keyAgreement" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.keyAgreement"></a>

```typescript
public readonly keyAgreement: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The key may be used in a key agreement protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#key_agreement PrivatecaCertificateAuthority#key_agreement}

---

##### `keyEncipherment`<sup>Optional</sup> <a name="keyEncipherment" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.keyEncipherment"></a>

```typescript
public readonly keyEncipherment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The key may be used to encipher other keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#key_encipherment PrivatecaCertificateAuthority#key_encipherment}

---

### PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage <a name="PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

const privatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage: privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage.property.clientAuth">clientAuth</a></code> | <code>boolean \| cdktf.IResolvable</code> | Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage.property.codeSigning">codeSigning</a></code> | <code>boolean \| cdktf.IResolvable</code> | Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication". |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage.property.emailProtection">emailProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection". |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage.property.ocspSigning">ocspSigning</a></code> | <code>boolean \| cdktf.IResolvable</code> | Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses". |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage.property.serverAuth">serverAuth</a></code> | <code>boolean \| cdktf.IResolvable</code> | Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage.property.timeStamping">timeStamping</a></code> | <code>boolean \| cdktf.IResolvable</code> | Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time". |

---

##### `clientAuth`<sup>Optional</sup> <a name="clientAuth" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage.property.clientAuth"></a>

```typescript
public readonly clientAuth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#client_auth PrivatecaCertificateAuthority#client_auth}

---

##### `codeSigning`<sup>Optional</sup> <a name="codeSigning" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage.property.codeSigning"></a>

```typescript
public readonly codeSigning: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#code_signing PrivatecaCertificateAuthority#code_signing}

---

##### `emailProtection`<sup>Optional</sup> <a name="emailProtection" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage.property.emailProtection"></a>

```typescript
public readonly emailProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#email_protection PrivatecaCertificateAuthority#email_protection}

---

##### `ocspSigning`<sup>Optional</sup> <a name="ocspSigning" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage.property.ocspSigning"></a>

```typescript
public readonly ocspSigning: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#ocsp_signing PrivatecaCertificateAuthority#ocsp_signing}

---

##### `serverAuth`<sup>Optional</sup> <a name="serverAuth" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage.property.serverAuth"></a>

```typescript
public readonly serverAuth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#server_auth PrivatecaCertificateAuthority#server_auth}

---

##### `timeStamping`<sup>Optional</sup> <a name="timeStamping" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage.property.timeStamping"></a>

```typescript
public readonly timeStamping: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#time_stamping PrivatecaCertificateAuthority#time_stamping}

---

### PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages <a name="PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

const privatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages: privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages.property.objectIdPath">objectIdPath</a></code> | <code>number[]</code> | An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages. |

---

##### `objectIdPath`<sup>Required</sup> <a name="objectIdPath" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages.property.objectIdPath"></a>

```typescript
public readonly objectIdPath: number[];
```

- *Type:* number[]

An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#object_id_path PrivatecaCertificateAuthority#object_id_path}

---

### PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints <a name="PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

const privatecaCertificateAuthorityConfigX509ConfigNameConstraints: privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.critical">critical</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether or not the name constraints are marked critical. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.excludedDnsNames">excludedDnsNames</a></code> | <code>string[]</code> | Contains excluded DNS names. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.excludedEmailAddresses">excludedEmailAddresses</a></code> | <code>string[]</code> | Contains the excluded email addresses. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.excludedIpRanges">excludedIpRanges</a></code> | <code>string[]</code> | Contains the excluded IP ranges. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.excludedUris">excludedUris</a></code> | <code>string[]</code> | Contains the excluded URIs that apply to the host part of the name. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.permittedDnsNames">permittedDnsNames</a></code> | <code>string[]</code> | Contains permitted DNS names. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.permittedEmailAddresses">permittedEmailAddresses</a></code> | <code>string[]</code> | Contains the permitted email addresses. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.permittedIpRanges">permittedIpRanges</a></code> | <code>string[]</code> | Contains the permitted IP ranges. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.permittedUris">permittedUris</a></code> | <code>string[]</code> | Contains the permitted URIs that apply to the host part of the name. |

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.critical"></a>

```typescript
public readonly critical: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether or not the name constraints are marked critical.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#critical PrivatecaCertificateAuthority#critical}

---

##### `excludedDnsNames`<sup>Optional</sup> <a name="excludedDnsNames" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.excludedDnsNames"></a>

```typescript
public readonly excludedDnsNames: string[];
```

- *Type:* string[]

Contains excluded DNS names.

Any DNS name that can be
constructed by simply adding zero or more labels to
the left-hand side of the name satisfies the name constraint.
For example, 'example.com', 'www.example.com', 'www.sub.example.com'
would satisfy 'example.com' while 'example1.com' does not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#excluded_dns_names PrivatecaCertificateAuthority#excluded_dns_names}

---

##### `excludedEmailAddresses`<sup>Optional</sup> <a name="excludedEmailAddresses" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.excludedEmailAddresses"></a>

```typescript
public readonly excludedEmailAddresses: string[];
```

- *Type:* string[]

Contains the excluded email addresses.

The value can be a particular
email address, a hostname to indicate all email addresses on that host or
a domain with a leading period (e.g. '.example.com') to indicate
all email addresses in that domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#excluded_email_addresses PrivatecaCertificateAuthority#excluded_email_addresses}

---

##### `excludedIpRanges`<sup>Optional</sup> <a name="excludedIpRanges" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.excludedIpRanges"></a>

```typescript
public readonly excludedIpRanges: string[];
```

- *Type:* string[]

Contains the excluded IP ranges.

For IPv4 addresses, the ranges
are expressed using CIDR notation as specified in RFC 4632.
For IPv6 addresses, the ranges are expressed in similar encoding as IPv4
addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#excluded_ip_ranges PrivatecaCertificateAuthority#excluded_ip_ranges}

---

##### `excludedUris`<sup>Optional</sup> <a name="excludedUris" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.excludedUris"></a>

```typescript
public readonly excludedUris: string[];
```

- *Type:* string[]

Contains the excluded URIs that apply to the host part of the name.

The value can be a hostname or a domain with a
leading period (like '.example.com')

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#excluded_uris PrivatecaCertificateAuthority#excluded_uris}

---

##### `permittedDnsNames`<sup>Optional</sup> <a name="permittedDnsNames" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.permittedDnsNames"></a>

```typescript
public readonly permittedDnsNames: string[];
```

- *Type:* string[]

Contains permitted DNS names.

Any DNS name that can be
constructed by simply adding zero or more labels to
the left-hand side of the name satisfies the name constraint.
For example, 'example.com', 'www.example.com', 'www.sub.example.com'
would satisfy 'example.com' while 'example1.com' does not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#permitted_dns_names PrivatecaCertificateAuthority#permitted_dns_names}

---

##### `permittedEmailAddresses`<sup>Optional</sup> <a name="permittedEmailAddresses" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.permittedEmailAddresses"></a>

```typescript
public readonly permittedEmailAddresses: string[];
```

- *Type:* string[]

Contains the permitted email addresses.

The value can be a particular
email address, a hostname to indicate all email addresses on that host or
a domain with a leading period (e.g. '.example.com') to indicate
all email addresses in that domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#permitted_email_addresses PrivatecaCertificateAuthority#permitted_email_addresses}

---

##### `permittedIpRanges`<sup>Optional</sup> <a name="permittedIpRanges" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.permittedIpRanges"></a>

```typescript
public readonly permittedIpRanges: string[];
```

- *Type:* string[]

Contains the permitted IP ranges.

For IPv4 addresses, the ranges
are expressed using CIDR notation as specified in RFC 4632.
For IPv6 addresses, the ranges are expressed in similar encoding as IPv4
addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#permitted_ip_ranges PrivatecaCertificateAuthority#permitted_ip_ranges}

---

##### `permittedUris`<sup>Optional</sup> <a name="permittedUris" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.permittedUris"></a>

```typescript
public readonly permittedUris: string[];
```

- *Type:* string[]

Contains the permitted URIs that apply to the host part of the name.

The value can be a hostname or a domain with a
leading period (like '.example.com')

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#permitted_uris PrivatecaCertificateAuthority#permitted_uris}

---

### PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds <a name="PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

const privatecaCertificateAuthorityConfigX509ConfigPolicyIds: privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds.property.objectIdPath">objectIdPath</a></code> | <code>number[]</code> | An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages. |

---

##### `objectIdPath`<sup>Required</sup> <a name="objectIdPath" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds.property.objectIdPath"></a>

```typescript
public readonly objectIdPath: number[];
```

- *Type:* number[]

An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#object_id_path PrivatecaCertificateAuthority#object_id_path}

---

### PrivatecaCertificateAuthorityKeySpec <a name="PrivatecaCertificateAuthorityKeySpec" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpec.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

const privatecaCertificateAuthorityKeySpec: privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpec.property.algorithm">algorithm</a></code> | <code>string</code> | The algorithm to use for creating a managed Cloud KMS key for a for a simplified experience. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpec.property.cloudKmsKeyVersion">cloudKmsKeyVersion</a></code> | <code>string</code> | The resource name for an existing Cloud KMS CryptoKeyVersion in the format 'projects/* /locations/* /keyRings/* /cryptoKeys/* /cryptoKeyVersions/*'. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpec.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

The algorithm to use for creating a managed Cloud KMS key for a for a simplified experience.

All managed keys will be have their ProtectionLevel as HSM. Possible values: ["SIGN_HASH_ALGORITHM_UNSPECIFIED", "RSA_PSS_2048_SHA256", "RSA_PSS_3072_SHA256", "RSA_PSS_4096_SHA256", "RSA_PKCS1_2048_SHA256", "RSA_PKCS1_3072_SHA256", "RSA_PKCS1_4096_SHA256", "EC_P256_SHA256", "EC_P384_SHA384"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#algorithm PrivatecaCertificateAuthority#algorithm}

---

##### `cloudKmsKeyVersion`<sup>Optional</sup> <a name="cloudKmsKeyVersion" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpec.property.cloudKmsKeyVersion"></a>

```typescript
public readonly cloudKmsKeyVersion: string;
```

- *Type:* string

The resource name for an existing Cloud KMS CryptoKeyVersion in the format 'projects/* /locations/* /keyRings/* /cryptoKeys/* /cryptoKeyVersions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#cloud_kms_key_version PrivatecaCertificateAuthority#cloud_kms_key_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### PrivatecaCertificateAuthoritySubordinateConfig <a name="PrivatecaCertificateAuthoritySubordinateConfig" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfig.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

const privatecaCertificateAuthoritySubordinateConfig: privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfig.property.certificateAuthority">certificateAuthority</a></code> | <code>string</code> | This can refer to a CertificateAuthority that was used to create a subordinate CertificateAuthority. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfig.property.pemIssuerChain">pemIssuerChain</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain">PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain</a></code> | pem_issuer_chain block. |

---

##### `certificateAuthority`<sup>Optional</sup> <a name="certificateAuthority" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfig.property.certificateAuthority"></a>

```typescript
public readonly certificateAuthority: string;
```

- *Type:* string

This can refer to a CertificateAuthority that was used to create a subordinate CertificateAuthority.

This field is used for information
and usability purposes only. The resource name is in the format
'projects/* /locations/* /caPools/* /certificateAuthorities/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#certificate_authority PrivatecaCertificateAuthority#certificate_authority}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `pemIssuerChain`<sup>Optional</sup> <a name="pemIssuerChain" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfig.property.pemIssuerChain"></a>

```typescript
public readonly pemIssuerChain: PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain">PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain</a>

pem_issuer_chain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#pem_issuer_chain PrivatecaCertificateAuthority#pem_issuer_chain}

---

### PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain <a name="PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

const privatecaCertificateAuthoritySubordinateConfigPemIssuerChain: privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain.property.pemCertificates">pemCertificates</a></code> | <code>string[]</code> | Expected to be in leaf-to-root order according to RFC 5246. |

---

##### `pemCertificates`<sup>Optional</sup> <a name="pemCertificates" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain.property.pemCertificates"></a>

```typescript
public readonly pemCertificates: string[];
```

- *Type:* string[]

Expected to be in leaf-to-root order according to RFC 5246.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#pem_certificates PrivatecaCertificateAuthority#pem_certificates}

---

### PrivatecaCertificateAuthorityTimeouts <a name="PrivatecaCertificateAuthorityTimeouts" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeouts.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

const privatecaCertificateAuthorityTimeouts: privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#create PrivatecaCertificateAuthority#create}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#delete PrivatecaCertificateAuthority#delete}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#update PrivatecaCertificateAuthority#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#create PrivatecaCertificateAuthority#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#delete PrivatecaCertificateAuthority#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/privateca_certificate_authority#update PrivatecaCertificateAuthority#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivatecaCertificateAuthorityAccessUrlsList <a name="PrivatecaCertificateAuthorityAccessUrlsList" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

new privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.get"></a>

```typescript
public get(index: number): PrivatecaCertificateAuthorityAccessUrlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### PrivatecaCertificateAuthorityAccessUrlsOutputReference <a name="PrivatecaCertificateAuthorityAccessUrlsOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

new privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.property.caCertificateAccessUrl">caCertificateAccessUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.property.crlAccessUrls">crlAccessUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrls">PrivatecaCertificateAuthorityAccessUrls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caCertificateAccessUrl`<sup>Required</sup> <a name="caCertificateAccessUrl" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.property.caCertificateAccessUrl"></a>

```typescript
public readonly caCertificateAccessUrl: string;
```

- *Type:* string

---

##### `crlAccessUrls`<sup>Required</sup> <a name="crlAccessUrls" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.property.crlAccessUrls"></a>

```typescript
public readonly crlAccessUrls: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivatecaCertificateAuthorityAccessUrls;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrls">PrivatecaCertificateAuthorityAccessUrls</a>

---


### PrivatecaCertificateAuthorityConfigAOutputReference <a name="PrivatecaCertificateAuthorityConfigAOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

new privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.putSubjectConfig">putSubjectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.putSubjectKeyId">putSubjectKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.putX509Config">putX509Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.resetSubjectKeyId">resetSubjectKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSubjectConfig` <a name="putSubjectConfig" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.putSubjectConfig"></a>

```typescript
public putSubjectConfig(value: PrivatecaCertificateAuthorityConfigSubjectConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.putSubjectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfig">PrivatecaCertificateAuthorityConfigSubjectConfig</a>

---

##### `putSubjectKeyId` <a name="putSubjectKeyId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.putSubjectKeyId"></a>

```typescript
public putSubjectKeyId(value: PrivatecaCertificateAuthorityConfigSubjectKeyId): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.putSubjectKeyId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyId">PrivatecaCertificateAuthorityConfigSubjectKeyId</a>

---

##### `putX509Config` <a name="putX509Config" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.putX509Config"></a>

```typescript
public putX509Config(value: PrivatecaCertificateAuthorityConfigX509Config): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.putX509Config.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config">PrivatecaCertificateAuthorityConfigX509Config</a>

---

##### `resetSubjectKeyId` <a name="resetSubjectKeyId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.resetSubjectKeyId"></a>

```typescript
public resetSubjectKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.property.subjectConfig">subjectConfig</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference">PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.property.subjectKeyId">subjectKeyId</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference">PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.property.x509Config">x509Config</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference">PrivatecaCertificateAuthorityConfigX509ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.property.subjectConfigInput">subjectConfigInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfig">PrivatecaCertificateAuthorityConfigSubjectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.property.subjectKeyIdInput">subjectKeyIdInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyId">PrivatecaCertificateAuthorityConfigSubjectKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.property.x509ConfigInput">x509ConfigInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config">PrivatecaCertificateAuthorityConfigX509Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigA">PrivatecaCertificateAuthorityConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subjectConfig`<sup>Required</sup> <a name="subjectConfig" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.property.subjectConfig"></a>

```typescript
public readonly subjectConfig: PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference">PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference</a>

---

##### `subjectKeyId`<sup>Required</sup> <a name="subjectKeyId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.property.subjectKeyId"></a>

```typescript
public readonly subjectKeyId: PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference">PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference</a>

---

##### `x509Config`<sup>Required</sup> <a name="x509Config" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.property.x509Config"></a>

```typescript
public readonly x509Config: PrivatecaCertificateAuthorityConfigX509ConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference">PrivatecaCertificateAuthorityConfigX509ConfigOutputReference</a>

---

##### `subjectConfigInput`<sup>Optional</sup> <a name="subjectConfigInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.property.subjectConfigInput"></a>

```typescript
public readonly subjectConfigInput: PrivatecaCertificateAuthorityConfigSubjectConfig;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfig">PrivatecaCertificateAuthorityConfigSubjectConfig</a>

---

##### `subjectKeyIdInput`<sup>Optional</sup> <a name="subjectKeyIdInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.property.subjectKeyIdInput"></a>

```typescript
public readonly subjectKeyIdInput: PrivatecaCertificateAuthorityConfigSubjectKeyId;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyId">PrivatecaCertificateAuthorityConfigSubjectKeyId</a>

---

##### `x509ConfigInput`<sup>Optional</sup> <a name="x509ConfigInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.property.x509ConfigInput"></a>

```typescript
public readonly x509ConfigInput: PrivatecaCertificateAuthorityConfigX509Config;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config">PrivatecaCertificateAuthorityConfigX509Config</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivatecaCertificateAuthorityConfigA;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigA">PrivatecaCertificateAuthorityConfigA</a>

---


### PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference <a name="PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

new privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.putSubject">putSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.putSubjectAltName">putSubjectAltName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.resetSubjectAltName">resetSubjectAltName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSubject` <a name="putSubject" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.putSubject"></a>

```typescript
public putSubject(value: PrivatecaCertificateAuthorityConfigSubjectConfigSubject): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.putSubject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject">PrivatecaCertificateAuthorityConfigSubjectConfigSubject</a>

---

##### `putSubjectAltName` <a name="putSubjectAltName" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.putSubjectAltName"></a>

```typescript
public putSubjectAltName(value: PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.putSubjectAltName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName">PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName</a>

---

##### `resetSubjectAltName` <a name="resetSubjectAltName" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.resetSubjectAltName"></a>

```typescript
public resetSubjectAltName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.subject">subject</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference">PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.subjectAltName">subjectAltName</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference">PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.subjectAltNameInput">subjectAltNameInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName">PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.subjectInput">subjectInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject">PrivatecaCertificateAuthorityConfigSubjectConfigSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfig">PrivatecaCertificateAuthorityConfigSubjectConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.subject"></a>

```typescript
public readonly subject: PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference">PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference</a>

---

##### `subjectAltName`<sup>Required</sup> <a name="subjectAltName" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.subjectAltName"></a>

```typescript
public readonly subjectAltName: PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference">PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference</a>

---

##### `subjectAltNameInput`<sup>Optional</sup> <a name="subjectAltNameInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.subjectAltNameInput"></a>

```typescript
public readonly subjectAltNameInput: PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName">PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName</a>

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.subjectInput"></a>

```typescript
public readonly subjectInput: PrivatecaCertificateAuthorityConfigSubjectConfigSubject;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject">PrivatecaCertificateAuthorityConfigSubjectConfigSubject</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivatecaCertificateAuthorityConfigSubjectConfig;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfig">PrivatecaCertificateAuthorityConfigSubjectConfig</a>

---


### PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference <a name="PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

new privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.resetDnsNames">resetDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.resetEmailAddresses">resetEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.resetIpAddresses">resetIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.resetUris">resetUris</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDnsNames` <a name="resetDnsNames" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.resetDnsNames"></a>

```typescript
public resetDnsNames(): void
```

##### `resetEmailAddresses` <a name="resetEmailAddresses" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.resetEmailAddresses"></a>

```typescript
public resetEmailAddresses(): void
```

##### `resetIpAddresses` <a name="resetIpAddresses" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.resetIpAddresses"></a>

```typescript
public resetIpAddresses(): void
```

##### `resetUris` <a name="resetUris" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.resetUris"></a>

```typescript
public resetUris(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.dnsNamesInput">dnsNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.emailAddressesInput">emailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.ipAddressesInput">ipAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.urisInput">urisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.dnsNames">dnsNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.emailAddresses">emailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.ipAddresses">ipAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.uris">uris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName">PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsNamesInput`<sup>Optional</sup> <a name="dnsNamesInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.dnsNamesInput"></a>

```typescript
public readonly dnsNamesInput: string[];
```

- *Type:* string[]

---

##### `emailAddressesInput`<sup>Optional</sup> <a name="emailAddressesInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.emailAddressesInput"></a>

```typescript
public readonly emailAddressesInput: string[];
```

- *Type:* string[]

---

##### `ipAddressesInput`<sup>Optional</sup> <a name="ipAddressesInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.ipAddressesInput"></a>

```typescript
public readonly ipAddressesInput: string[];
```

- *Type:* string[]

---

##### `urisInput`<sup>Optional</sup> <a name="urisInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.urisInput"></a>

```typescript
public readonly urisInput: string[];
```

- *Type:* string[]

---

##### `dnsNames`<sup>Required</sup> <a name="dnsNames" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.dnsNames"></a>

```typescript
public readonly dnsNames: string[];
```

- *Type:* string[]

---

##### `emailAddresses`<sup>Required</sup> <a name="emailAddresses" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.emailAddresses"></a>

```typescript
public readonly emailAddresses: string[];
```

- *Type:* string[]

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: string[];
```

- *Type:* string[]

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.uris"></a>

```typescript
public readonly uris: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName">PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName</a>

---


### PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference <a name="PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

new privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.resetLocality">resetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.resetOrganizationalUnit">resetOrganizationalUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.resetProvince">resetProvince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.resetStreetAddress">resetStreetAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.resetCountryCode"></a>

```typescript
public resetCountryCode(): void
```

##### `resetLocality` <a name="resetLocality" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.resetLocality"></a>

```typescript
public resetLocality(): void
```

##### `resetOrganizationalUnit` <a name="resetOrganizationalUnit" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.resetOrganizationalUnit"></a>

```typescript
public resetOrganizationalUnit(): void
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.resetPostalCode"></a>

```typescript
public resetPostalCode(): void
```

##### `resetProvince` <a name="resetProvince" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.resetProvince"></a>

```typescript
public resetProvince(): void
```

##### `resetStreetAddress` <a name="resetStreetAddress" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.resetStreetAddress"></a>

```typescript
public resetStreetAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.commonNameInput">commonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.localityInput">localityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.organizationalUnitInput">organizationalUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.postalCodeInput">postalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.provinceInput">provinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.streetAddressInput">streetAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.commonName">commonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.locality">locality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.organizationalUnit">organizationalUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.province">province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.streetAddress">streetAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject">PrivatecaCertificateAuthorityConfigSubjectConfigSubject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.commonNameInput"></a>

```typescript
public readonly commonNameInput: string;
```

- *Type:* string

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.countryCodeInput"></a>

```typescript
public readonly countryCodeInput: string;
```

- *Type:* string

---

##### `localityInput`<sup>Optional</sup> <a name="localityInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.localityInput"></a>

```typescript
public readonly localityInput: string;
```

- *Type:* string

---

##### `organizationalUnitInput`<sup>Optional</sup> <a name="organizationalUnitInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.organizationalUnitInput"></a>

```typescript
public readonly organizationalUnitInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.postalCodeInput"></a>

```typescript
public readonly postalCodeInput: string;
```

- *Type:* string

---

##### `provinceInput`<sup>Optional</sup> <a name="provinceInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.provinceInput"></a>

```typescript
public readonly provinceInput: string;
```

- *Type:* string

---

##### `streetAddressInput`<sup>Optional</sup> <a name="streetAddressInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.streetAddressInput"></a>

```typescript
public readonly streetAddressInput: string;
```

- *Type:* string

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* string

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.locality"></a>

```typescript
public readonly locality: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `organizationalUnit`<sup>Required</sup> <a name="organizationalUnit" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.organizationalUnit"></a>

```typescript
public readonly organizationalUnit: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `province`<sup>Required</sup> <a name="province" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.province"></a>

```typescript
public readonly province: string;
```

- *Type:* string

---

##### `streetAddress`<sup>Required</sup> <a name="streetAddress" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.streetAddress"></a>

```typescript
public readonly streetAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivatecaCertificateAuthorityConfigSubjectConfigSubject;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject">PrivatecaCertificateAuthorityConfigSubjectConfigSubject</a>

---


### PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference <a name="PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

new privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.resetKeyId">resetKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyId` <a name="resetKeyId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.resetKeyId"></a>

```typescript
public resetKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyId">PrivatecaCertificateAuthorityConfigSubjectKeyId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivatecaCertificateAuthorityConfigSubjectKeyId;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectKeyId">PrivatecaCertificateAuthorityConfigSubjectKeyId</a>

---


### PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList <a name="PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

new privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.get"></a>

```typescript
public get(index: number): PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions</a>[]

---


### PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference <a name="PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

new privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.property.objectIdPathInput">objectIdPathInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.property.objectIdPath">objectIdPath</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectIdPathInput`<sup>Optional</sup> <a name="objectIdPathInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.property.objectIdPathInput"></a>

```typescript
public readonly objectIdPathInput: number[];
```

- *Type:* number[]

---

##### `objectIdPath`<sup>Required</sup> <a name="objectIdPath" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.property.objectIdPath"></a>

```typescript
public readonly objectIdPath: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId</a>

---


### PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference <a name="PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

new privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.putObjectId">putObjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putObjectId` <a name="putObjectId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.putObjectId"></a>

```typescript
public putObjectId(value: PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.putObjectId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.objectId">objectId</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.criticalInput">criticalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.objectIdInput">objectIdInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.critical">critical</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.objectId"></a>

```typescript
public readonly objectId: PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference</a>

---

##### `criticalInput`<sup>Optional</sup> <a name="criticalInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.criticalInput"></a>

```typescript
public readonly criticalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.critical"></a>

```typescript
public readonly critical: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions</a>

---


### PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference <a name="PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

new privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.resetMaxIssuerPathLength">resetMaxIssuerPathLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.resetNonCa">resetNonCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.resetZeroMaxIssuerPathLength">resetZeroMaxIssuerPathLength</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxIssuerPathLength` <a name="resetMaxIssuerPathLength" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.resetMaxIssuerPathLength"></a>

```typescript
public resetMaxIssuerPathLength(): void
```

##### `resetNonCa` <a name="resetNonCa" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.resetNonCa"></a>

```typescript
public resetNonCa(): void
```

##### `resetZeroMaxIssuerPathLength` <a name="resetZeroMaxIssuerPathLength" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.resetZeroMaxIssuerPathLength"></a>

```typescript
public resetZeroMaxIssuerPathLength(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.isCaInput">isCaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.maxIssuerPathLengthInput">maxIssuerPathLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.nonCaInput">nonCaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.zeroMaxIssuerPathLengthInput">zeroMaxIssuerPathLengthInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.isCa">isCa</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.maxIssuerPathLength">maxIssuerPathLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.nonCa">nonCa</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.zeroMaxIssuerPathLength">zeroMaxIssuerPathLength</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions">PrivatecaCertificateAuthorityConfigX509ConfigCaOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isCaInput`<sup>Optional</sup> <a name="isCaInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.isCaInput"></a>

```typescript
public readonly isCaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxIssuerPathLengthInput`<sup>Optional</sup> <a name="maxIssuerPathLengthInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.maxIssuerPathLengthInput"></a>

```typescript
public readonly maxIssuerPathLengthInput: number;
```

- *Type:* number

---

##### `nonCaInput`<sup>Optional</sup> <a name="nonCaInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.nonCaInput"></a>

```typescript
public readonly nonCaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `zeroMaxIssuerPathLengthInput`<sup>Optional</sup> <a name="zeroMaxIssuerPathLengthInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.zeroMaxIssuerPathLengthInput"></a>

```typescript
public readonly zeroMaxIssuerPathLengthInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isCa`<sup>Required</sup> <a name="isCa" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.isCa"></a>

```typescript
public readonly isCa: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxIssuerPathLength`<sup>Required</sup> <a name="maxIssuerPathLength" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.maxIssuerPathLength"></a>

```typescript
public readonly maxIssuerPathLength: number;
```

- *Type:* number

---

##### `nonCa`<sup>Required</sup> <a name="nonCa" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.nonCa"></a>

```typescript
public readonly nonCa: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `zeroMaxIssuerPathLength`<sup>Required</sup> <a name="zeroMaxIssuerPathLength" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.zeroMaxIssuerPathLength"></a>

```typescript
public readonly zeroMaxIssuerPathLength: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivatecaCertificateAuthorityConfigX509ConfigCaOptions;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions">PrivatecaCertificateAuthorityConfigX509ConfigCaOptions</a>

---


### PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference <a name="PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

new privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetCertSign">resetCertSign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetContentCommitment">resetContentCommitment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetCrlSign">resetCrlSign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetDataEncipherment">resetDataEncipherment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetDecipherOnly">resetDecipherOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetDigitalSignature">resetDigitalSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetEncipherOnly">resetEncipherOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetKeyAgreement">resetKeyAgreement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetKeyEncipherment">resetKeyEncipherment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertSign` <a name="resetCertSign" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetCertSign"></a>

```typescript
public resetCertSign(): void
```

##### `resetContentCommitment` <a name="resetContentCommitment" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetContentCommitment"></a>

```typescript
public resetContentCommitment(): void
```

##### `resetCrlSign` <a name="resetCrlSign" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetCrlSign"></a>

```typescript
public resetCrlSign(): void
```

##### `resetDataEncipherment` <a name="resetDataEncipherment" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetDataEncipherment"></a>

```typescript
public resetDataEncipherment(): void
```

##### `resetDecipherOnly` <a name="resetDecipherOnly" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetDecipherOnly"></a>

```typescript
public resetDecipherOnly(): void
```

##### `resetDigitalSignature` <a name="resetDigitalSignature" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetDigitalSignature"></a>

```typescript
public resetDigitalSignature(): void
```

##### `resetEncipherOnly` <a name="resetEncipherOnly" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetEncipherOnly"></a>

```typescript
public resetEncipherOnly(): void
```

##### `resetKeyAgreement` <a name="resetKeyAgreement" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetKeyAgreement"></a>

```typescript
public resetKeyAgreement(): void
```

##### `resetKeyEncipherment` <a name="resetKeyEncipherment" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetKeyEncipherment"></a>

```typescript
public resetKeyEncipherment(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.certSignInput">certSignInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.contentCommitmentInput">contentCommitmentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.crlSignInput">crlSignInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.dataEnciphermentInput">dataEnciphermentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.decipherOnlyInput">decipherOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.digitalSignatureInput">digitalSignatureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.encipherOnlyInput">encipherOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.keyAgreementInput">keyAgreementInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.keyEnciphermentInput">keyEnciphermentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.certSign">certSign</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.contentCommitment">contentCommitment</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.crlSign">crlSign</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.dataEncipherment">dataEncipherment</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.decipherOnly">decipherOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.digitalSignature">digitalSignature</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.encipherOnly">encipherOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.keyAgreement">keyAgreement</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.keyEncipherment">keyEncipherment</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certSignInput`<sup>Optional</sup> <a name="certSignInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.certSignInput"></a>

```typescript
public readonly certSignInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `contentCommitmentInput`<sup>Optional</sup> <a name="contentCommitmentInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.contentCommitmentInput"></a>

```typescript
public readonly contentCommitmentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crlSignInput`<sup>Optional</sup> <a name="crlSignInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.crlSignInput"></a>

```typescript
public readonly crlSignInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dataEnciphermentInput`<sup>Optional</sup> <a name="dataEnciphermentInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.dataEnciphermentInput"></a>

```typescript
public readonly dataEnciphermentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `decipherOnlyInput`<sup>Optional</sup> <a name="decipherOnlyInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.decipherOnlyInput"></a>

```typescript
public readonly decipherOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `digitalSignatureInput`<sup>Optional</sup> <a name="digitalSignatureInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.digitalSignatureInput"></a>

```typescript
public readonly digitalSignatureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encipherOnlyInput`<sup>Optional</sup> <a name="encipherOnlyInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.encipherOnlyInput"></a>

```typescript
public readonly encipherOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyAgreementInput`<sup>Optional</sup> <a name="keyAgreementInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.keyAgreementInput"></a>

```typescript
public readonly keyAgreementInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyEnciphermentInput`<sup>Optional</sup> <a name="keyEnciphermentInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.keyEnciphermentInput"></a>

```typescript
public readonly keyEnciphermentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `certSign`<sup>Required</sup> <a name="certSign" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.certSign"></a>

```typescript
public readonly certSign: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `contentCommitment`<sup>Required</sup> <a name="contentCommitment" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.contentCommitment"></a>

```typescript
public readonly contentCommitment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crlSign`<sup>Required</sup> <a name="crlSign" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.crlSign"></a>

```typescript
public readonly crlSign: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dataEncipherment`<sup>Required</sup> <a name="dataEncipherment" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.dataEncipherment"></a>

```typescript
public readonly dataEncipherment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `decipherOnly`<sup>Required</sup> <a name="decipherOnly" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.decipherOnly"></a>

```typescript
public readonly decipherOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `digitalSignature`<sup>Required</sup> <a name="digitalSignature" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.digitalSignature"></a>

```typescript
public readonly digitalSignature: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encipherOnly`<sup>Required</sup> <a name="encipherOnly" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.encipherOnly"></a>

```typescript
public readonly encipherOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyAgreement`<sup>Required</sup> <a name="keyAgreement" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.keyAgreement"></a>

```typescript
public readonly keyAgreement: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyEncipherment`<sup>Required</sup> <a name="keyEncipherment" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.keyEncipherment"></a>

```typescript
public readonly keyEncipherment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage</a>

---


### PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference <a name="PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

new privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.resetClientAuth">resetClientAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.resetCodeSigning">resetCodeSigning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.resetEmailProtection">resetEmailProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.resetOcspSigning">resetOcspSigning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.resetServerAuth">resetServerAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.resetTimeStamping">resetTimeStamping</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientAuth` <a name="resetClientAuth" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.resetClientAuth"></a>

```typescript
public resetClientAuth(): void
```

##### `resetCodeSigning` <a name="resetCodeSigning" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.resetCodeSigning"></a>

```typescript
public resetCodeSigning(): void
```

##### `resetEmailProtection` <a name="resetEmailProtection" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.resetEmailProtection"></a>

```typescript
public resetEmailProtection(): void
```

##### `resetOcspSigning` <a name="resetOcspSigning" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.resetOcspSigning"></a>

```typescript
public resetOcspSigning(): void
```

##### `resetServerAuth` <a name="resetServerAuth" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.resetServerAuth"></a>

```typescript
public resetServerAuth(): void
```

##### `resetTimeStamping` <a name="resetTimeStamping" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.resetTimeStamping"></a>

```typescript
public resetTimeStamping(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.clientAuthInput">clientAuthInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.codeSigningInput">codeSigningInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.emailProtectionInput">emailProtectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.ocspSigningInput">ocspSigningInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.serverAuthInput">serverAuthInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.timeStampingInput">timeStampingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.clientAuth">clientAuth</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.codeSigning">codeSigning</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.emailProtection">emailProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.ocspSigning">ocspSigning</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.serverAuth">serverAuth</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.timeStamping">timeStamping</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientAuthInput`<sup>Optional</sup> <a name="clientAuthInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.clientAuthInput"></a>

```typescript
public readonly clientAuthInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `codeSigningInput`<sup>Optional</sup> <a name="codeSigningInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.codeSigningInput"></a>

```typescript
public readonly codeSigningInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `emailProtectionInput`<sup>Optional</sup> <a name="emailProtectionInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.emailProtectionInput"></a>

```typescript
public readonly emailProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ocspSigningInput`<sup>Optional</sup> <a name="ocspSigningInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.ocspSigningInput"></a>

```typescript
public readonly ocspSigningInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serverAuthInput`<sup>Optional</sup> <a name="serverAuthInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.serverAuthInput"></a>

```typescript
public readonly serverAuthInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeStampingInput`<sup>Optional</sup> <a name="timeStampingInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.timeStampingInput"></a>

```typescript
public readonly timeStampingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientAuth`<sup>Required</sup> <a name="clientAuth" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.clientAuth"></a>

```typescript
public readonly clientAuth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `codeSigning`<sup>Required</sup> <a name="codeSigning" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.codeSigning"></a>

```typescript
public readonly codeSigning: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `emailProtection`<sup>Required</sup> <a name="emailProtection" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.emailProtection"></a>

```typescript
public readonly emailProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ocspSigning`<sup>Required</sup> <a name="ocspSigning" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.ocspSigning"></a>

```typescript
public readonly ocspSigning: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serverAuth`<sup>Required</sup> <a name="serverAuth" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.serverAuth"></a>

```typescript
public readonly serverAuth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeStamping`<sup>Required</sup> <a name="timeStamping" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.timeStamping"></a>

```typescript
public readonly timeStamping: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage</a>

---


### PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference <a name="PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

new privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.putBaseKeyUsage">putBaseKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.putExtendedKeyUsage">putExtendedKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.putUnknownExtendedKeyUsages">putUnknownExtendedKeyUsages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.resetUnknownExtendedKeyUsages">resetUnknownExtendedKeyUsages</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBaseKeyUsage` <a name="putBaseKeyUsage" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.putBaseKeyUsage"></a>

```typescript
public putBaseKeyUsage(value: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.putBaseKeyUsage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage</a>

---

##### `putExtendedKeyUsage` <a name="putExtendedKeyUsage" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.putExtendedKeyUsage"></a>

```typescript
public putExtendedKeyUsage(value: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.putExtendedKeyUsage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage</a>

---

##### `putUnknownExtendedKeyUsages` <a name="putUnknownExtendedKeyUsages" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.putUnknownExtendedKeyUsages"></a>

```typescript
public putUnknownExtendedKeyUsages(value: IResolvable | PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.putUnknownExtendedKeyUsages.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages</a>[]

---

##### `resetUnknownExtendedKeyUsages` <a name="resetUnknownExtendedKeyUsages" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.resetUnknownExtendedKeyUsages"></a>

```typescript
public resetUnknownExtendedKeyUsages(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.baseKeyUsage">baseKeyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.extendedKeyUsage">extendedKeyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.unknownExtendedKeyUsages">unknownExtendedKeyUsages</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.baseKeyUsageInput">baseKeyUsageInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.extendedKeyUsageInput">extendedKeyUsageInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.unknownExtendedKeyUsagesInput">unknownExtendedKeyUsagesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseKeyUsage`<sup>Required</sup> <a name="baseKeyUsage" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.baseKeyUsage"></a>

```typescript
public readonly baseKeyUsage: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference</a>

---

##### `extendedKeyUsage`<sup>Required</sup> <a name="extendedKeyUsage" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.extendedKeyUsage"></a>

```typescript
public readonly extendedKeyUsage: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference</a>

---

##### `unknownExtendedKeyUsages`<sup>Required</sup> <a name="unknownExtendedKeyUsages" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.unknownExtendedKeyUsages"></a>

```typescript
public readonly unknownExtendedKeyUsages: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList</a>

---

##### `baseKeyUsageInput`<sup>Optional</sup> <a name="baseKeyUsageInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.baseKeyUsageInput"></a>

```typescript
public readonly baseKeyUsageInput: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage</a>

---

##### `extendedKeyUsageInput`<sup>Optional</sup> <a name="extendedKeyUsageInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.extendedKeyUsageInput"></a>

```typescript
public readonly extendedKeyUsageInput: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage</a>

---

##### `unknownExtendedKeyUsagesInput`<sup>Optional</sup> <a name="unknownExtendedKeyUsagesInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.unknownExtendedKeyUsagesInput"></a>

```typescript
public readonly unknownExtendedKeyUsagesInput: IResolvable | PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage</a>

---


### PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList <a name="PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

new privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.get"></a>

```typescript
public get(index: number): PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages</a>[]

---


### PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference <a name="PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

new privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPathInput">objectIdPathInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPath">objectIdPath</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectIdPathInput`<sup>Optional</sup> <a name="objectIdPathInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPathInput"></a>

```typescript
public readonly objectIdPathInput: number[];
```

- *Type:* number[]

---

##### `objectIdPath`<sup>Required</sup> <a name="objectIdPath" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPath"></a>

```typescript
public readonly objectIdPath: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages</a>

---


### PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference <a name="PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

new privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resetExcludedDnsNames">resetExcludedDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resetExcludedEmailAddresses">resetExcludedEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resetExcludedIpRanges">resetExcludedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resetExcludedUris">resetExcludedUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resetPermittedDnsNames">resetPermittedDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resetPermittedEmailAddresses">resetPermittedEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resetPermittedIpRanges">resetPermittedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resetPermittedUris">resetPermittedUris</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludedDnsNames` <a name="resetExcludedDnsNames" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resetExcludedDnsNames"></a>

```typescript
public resetExcludedDnsNames(): void
```

##### `resetExcludedEmailAddresses` <a name="resetExcludedEmailAddresses" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resetExcludedEmailAddresses"></a>

```typescript
public resetExcludedEmailAddresses(): void
```

##### `resetExcludedIpRanges` <a name="resetExcludedIpRanges" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resetExcludedIpRanges"></a>

```typescript
public resetExcludedIpRanges(): void
```

##### `resetExcludedUris` <a name="resetExcludedUris" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resetExcludedUris"></a>

```typescript
public resetExcludedUris(): void
```

##### `resetPermittedDnsNames` <a name="resetPermittedDnsNames" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resetPermittedDnsNames"></a>

```typescript
public resetPermittedDnsNames(): void
```

##### `resetPermittedEmailAddresses` <a name="resetPermittedEmailAddresses" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resetPermittedEmailAddresses"></a>

```typescript
public resetPermittedEmailAddresses(): void
```

##### `resetPermittedIpRanges` <a name="resetPermittedIpRanges" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resetPermittedIpRanges"></a>

```typescript
public resetPermittedIpRanges(): void
```

##### `resetPermittedUris` <a name="resetPermittedUris" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resetPermittedUris"></a>

```typescript
public resetPermittedUris(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.criticalInput">criticalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedDnsNamesInput">excludedDnsNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedEmailAddressesInput">excludedEmailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedIpRangesInput">excludedIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedUrisInput">excludedUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedDnsNamesInput">permittedDnsNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedEmailAddressesInput">permittedEmailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedIpRangesInput">permittedIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedUrisInput">permittedUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.critical">critical</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedDnsNames">excludedDnsNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedEmailAddresses">excludedEmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedIpRanges">excludedIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedUris">excludedUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedDnsNames">permittedDnsNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedEmailAddresses">permittedEmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedIpRanges">permittedIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedUris">permittedUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints">PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `criticalInput`<sup>Optional</sup> <a name="criticalInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.criticalInput"></a>

```typescript
public readonly criticalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludedDnsNamesInput`<sup>Optional</sup> <a name="excludedDnsNamesInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedDnsNamesInput"></a>

```typescript
public readonly excludedDnsNamesInput: string[];
```

- *Type:* string[]

---

##### `excludedEmailAddressesInput`<sup>Optional</sup> <a name="excludedEmailAddressesInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedEmailAddressesInput"></a>

```typescript
public readonly excludedEmailAddressesInput: string[];
```

- *Type:* string[]

---

##### `excludedIpRangesInput`<sup>Optional</sup> <a name="excludedIpRangesInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedIpRangesInput"></a>

```typescript
public readonly excludedIpRangesInput: string[];
```

- *Type:* string[]

---

##### `excludedUrisInput`<sup>Optional</sup> <a name="excludedUrisInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedUrisInput"></a>

```typescript
public readonly excludedUrisInput: string[];
```

- *Type:* string[]

---

##### `permittedDnsNamesInput`<sup>Optional</sup> <a name="permittedDnsNamesInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedDnsNamesInput"></a>

```typescript
public readonly permittedDnsNamesInput: string[];
```

- *Type:* string[]

---

##### `permittedEmailAddressesInput`<sup>Optional</sup> <a name="permittedEmailAddressesInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedEmailAddressesInput"></a>

```typescript
public readonly permittedEmailAddressesInput: string[];
```

- *Type:* string[]

---

##### `permittedIpRangesInput`<sup>Optional</sup> <a name="permittedIpRangesInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedIpRangesInput"></a>

```typescript
public readonly permittedIpRangesInput: string[];
```

- *Type:* string[]

---

##### `permittedUrisInput`<sup>Optional</sup> <a name="permittedUrisInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedUrisInput"></a>

```typescript
public readonly permittedUrisInput: string[];
```

- *Type:* string[]

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.critical"></a>

```typescript
public readonly critical: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludedDnsNames`<sup>Required</sup> <a name="excludedDnsNames" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedDnsNames"></a>

```typescript
public readonly excludedDnsNames: string[];
```

- *Type:* string[]

---

##### `excludedEmailAddresses`<sup>Required</sup> <a name="excludedEmailAddresses" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedEmailAddresses"></a>

```typescript
public readonly excludedEmailAddresses: string[];
```

- *Type:* string[]

---

##### `excludedIpRanges`<sup>Required</sup> <a name="excludedIpRanges" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedIpRanges"></a>

```typescript
public readonly excludedIpRanges: string[];
```

- *Type:* string[]

---

##### `excludedUris`<sup>Required</sup> <a name="excludedUris" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedUris"></a>

```typescript
public readonly excludedUris: string[];
```

- *Type:* string[]

---

##### `permittedDnsNames`<sup>Required</sup> <a name="permittedDnsNames" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedDnsNames"></a>

```typescript
public readonly permittedDnsNames: string[];
```

- *Type:* string[]

---

##### `permittedEmailAddresses`<sup>Required</sup> <a name="permittedEmailAddresses" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedEmailAddresses"></a>

```typescript
public readonly permittedEmailAddresses: string[];
```

- *Type:* string[]

---

##### `permittedIpRanges`<sup>Required</sup> <a name="permittedIpRanges" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedIpRanges"></a>

```typescript
public readonly permittedIpRanges: string[];
```

- *Type:* string[]

---

##### `permittedUris`<sup>Required</sup> <a name="permittedUris" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedUris"></a>

```typescript
public readonly permittedUris: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints">PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints</a>

---


### PrivatecaCertificateAuthorityConfigX509ConfigOutputReference <a name="PrivatecaCertificateAuthorityConfigX509ConfigOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

new privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.putAdditionalExtensions">putAdditionalExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.putCaOptions">putCaOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.putKeyUsage">putKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.putNameConstraints">putNameConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.putPolicyIds">putPolicyIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.resetAdditionalExtensions">resetAdditionalExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.resetAiaOcspServers">resetAiaOcspServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.resetNameConstraints">resetNameConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.resetPolicyIds">resetPolicyIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdditionalExtensions` <a name="putAdditionalExtensions" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.putAdditionalExtensions"></a>

```typescript
public putAdditionalExtensions(value: IResolvable | PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.putAdditionalExtensions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions</a>[]

---

##### `putCaOptions` <a name="putCaOptions" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.putCaOptions"></a>

```typescript
public putCaOptions(value: PrivatecaCertificateAuthorityConfigX509ConfigCaOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.putCaOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions">PrivatecaCertificateAuthorityConfigX509ConfigCaOptions</a>

---

##### `putKeyUsage` <a name="putKeyUsage" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.putKeyUsage"></a>

```typescript
public putKeyUsage(value: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.putKeyUsage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage</a>

---

##### `putNameConstraints` <a name="putNameConstraints" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.putNameConstraints"></a>

```typescript
public putNameConstraints(value: PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.putNameConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints">PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints</a>

---

##### `putPolicyIds` <a name="putPolicyIds" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.putPolicyIds"></a>

```typescript
public putPolicyIds(value: IResolvable | PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.putPolicyIds.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds">PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds</a>[]

---

##### `resetAdditionalExtensions` <a name="resetAdditionalExtensions" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.resetAdditionalExtensions"></a>

```typescript
public resetAdditionalExtensions(): void
```

##### `resetAiaOcspServers` <a name="resetAiaOcspServers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.resetAiaOcspServers"></a>

```typescript
public resetAiaOcspServers(): void
```

##### `resetNameConstraints` <a name="resetNameConstraints" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.resetNameConstraints"></a>

```typescript
public resetNameConstraints(): void
```

##### `resetPolicyIds` <a name="resetPolicyIds" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.resetPolicyIds"></a>

```typescript
public resetPolicyIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.additionalExtensions">additionalExtensions</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.caOptions">caOptions</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference">PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.keyUsage">keyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.nameConstraints">nameConstraints</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference">PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.policyIds">policyIds</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList">PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.additionalExtensionsInput">additionalExtensionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.aiaOcspServersInput">aiaOcspServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.caOptionsInput">caOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions">PrivatecaCertificateAuthorityConfigX509ConfigCaOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.keyUsageInput">keyUsageInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.nameConstraintsInput">nameConstraintsInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints">PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.policyIdsInput">policyIdsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds">PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.aiaOcspServers">aiaOcspServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config">PrivatecaCertificateAuthorityConfigX509Config</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalExtensions`<sup>Required</sup> <a name="additionalExtensions" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.additionalExtensions"></a>

```typescript
public readonly additionalExtensions: PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList</a>

---

##### `caOptions`<sup>Required</sup> <a name="caOptions" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.caOptions"></a>

```typescript
public readonly caOptions: PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference">PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference</a>

---

##### `keyUsage`<sup>Required</sup> <a name="keyUsage" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.keyUsage"></a>

```typescript
public readonly keyUsage: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference</a>

---

##### `nameConstraints`<sup>Required</sup> <a name="nameConstraints" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.nameConstraints"></a>

```typescript
public readonly nameConstraints: PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference">PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference</a>

---

##### `policyIds`<sup>Required</sup> <a name="policyIds" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.policyIds"></a>

```typescript
public readonly policyIds: PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList">PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList</a>

---

##### `additionalExtensionsInput`<sup>Optional</sup> <a name="additionalExtensionsInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.additionalExtensionsInput"></a>

```typescript
public readonly additionalExtensionsInput: IResolvable | PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions</a>[]

---

##### `aiaOcspServersInput`<sup>Optional</sup> <a name="aiaOcspServersInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.aiaOcspServersInput"></a>

```typescript
public readonly aiaOcspServersInput: string[];
```

- *Type:* string[]

---

##### `caOptionsInput`<sup>Optional</sup> <a name="caOptionsInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.caOptionsInput"></a>

```typescript
public readonly caOptionsInput: PrivatecaCertificateAuthorityConfigX509ConfigCaOptions;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions">PrivatecaCertificateAuthorityConfigX509ConfigCaOptions</a>

---

##### `keyUsageInput`<sup>Optional</sup> <a name="keyUsageInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.keyUsageInput"></a>

```typescript
public readonly keyUsageInput: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage</a>

---

##### `nameConstraintsInput`<sup>Optional</sup> <a name="nameConstraintsInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.nameConstraintsInput"></a>

```typescript
public readonly nameConstraintsInput: PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints">PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints</a>

---

##### `policyIdsInput`<sup>Optional</sup> <a name="policyIdsInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.policyIdsInput"></a>

```typescript
public readonly policyIdsInput: IResolvable | PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds">PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds</a>[]

---

##### `aiaOcspServers`<sup>Required</sup> <a name="aiaOcspServers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.aiaOcspServers"></a>

```typescript
public readonly aiaOcspServers: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivatecaCertificateAuthorityConfigX509Config;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config">PrivatecaCertificateAuthorityConfigX509Config</a>

---


### PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList <a name="PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

new privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.get"></a>

```typescript
public get(index: number): PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds">PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds">PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds</a>[]

---


### PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference <a name="PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

new privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.property.objectIdPathInput">objectIdPathInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.property.objectIdPath">objectIdPath</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds">PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectIdPathInput`<sup>Optional</sup> <a name="objectIdPathInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.property.objectIdPathInput"></a>

```typescript
public readonly objectIdPathInput: number[];
```

- *Type:* number[]

---

##### `objectIdPath`<sup>Required</sup> <a name="objectIdPath" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.property.objectIdPath"></a>

```typescript
public readonly objectIdPath: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds">PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds</a>

---


### PrivatecaCertificateAuthorityKeySpecOutputReference <a name="PrivatecaCertificateAuthorityKeySpecOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

new privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.resetCloudKmsKeyVersion">resetCloudKmsKeyVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlgorithm` <a name="resetAlgorithm" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.resetAlgorithm"></a>

```typescript
public resetAlgorithm(): void
```

##### `resetCloudKmsKeyVersion` <a name="resetCloudKmsKeyVersion" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.resetCloudKmsKeyVersion"></a>

```typescript
public resetCloudKmsKeyVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.property.cloudKmsKeyVersionInput">cloudKmsKeyVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.property.cloudKmsKeyVersion">cloudKmsKeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpec">PrivatecaCertificateAuthorityKeySpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.property.algorithmInput"></a>

```typescript
public readonly algorithmInput: string;
```

- *Type:* string

---

##### `cloudKmsKeyVersionInput`<sup>Optional</sup> <a name="cloudKmsKeyVersionInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.property.cloudKmsKeyVersionInput"></a>

```typescript
public readonly cloudKmsKeyVersionInput: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `cloudKmsKeyVersion`<sup>Required</sup> <a name="cloudKmsKeyVersion" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.property.cloudKmsKeyVersion"></a>

```typescript
public readonly cloudKmsKeyVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivatecaCertificateAuthorityKeySpec;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpec">PrivatecaCertificateAuthorityKeySpec</a>

---


### PrivatecaCertificateAuthoritySubordinateConfigOutputReference <a name="PrivatecaCertificateAuthoritySubordinateConfigOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

new privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.putPemIssuerChain">putPemIssuerChain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.resetCertificateAuthority">resetCertificateAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.resetPemIssuerChain">resetPemIssuerChain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPemIssuerChain` <a name="putPemIssuerChain" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.putPemIssuerChain"></a>

```typescript
public putPemIssuerChain(value: PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.putPemIssuerChain.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain">PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain</a>

---

##### `resetCertificateAuthority` <a name="resetCertificateAuthority" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.resetCertificateAuthority"></a>

```typescript
public resetCertificateAuthority(): void
```

##### `resetPemIssuerChain` <a name="resetPemIssuerChain" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.resetPemIssuerChain"></a>

```typescript
public resetPemIssuerChain(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.pemIssuerChain">pemIssuerChain</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference">PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.certificateAuthorityInput">certificateAuthorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.pemIssuerChainInput">pemIssuerChainInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain">PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.certificateAuthority">certificateAuthority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfig">PrivatecaCertificateAuthoritySubordinateConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pemIssuerChain`<sup>Required</sup> <a name="pemIssuerChain" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.pemIssuerChain"></a>

```typescript
public readonly pemIssuerChain: PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference">PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference</a>

---

##### `certificateAuthorityInput`<sup>Optional</sup> <a name="certificateAuthorityInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.certificateAuthorityInput"></a>

```typescript
public readonly certificateAuthorityInput: string;
```

- *Type:* string

---

##### `pemIssuerChainInput`<sup>Optional</sup> <a name="pemIssuerChainInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.pemIssuerChainInput"></a>

```typescript
public readonly pemIssuerChainInput: PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain">PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain</a>

---

##### `certificateAuthority`<sup>Required</sup> <a name="certificateAuthority" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.certificateAuthority"></a>

```typescript
public readonly certificateAuthority: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivatecaCertificateAuthoritySubordinateConfig;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfig">PrivatecaCertificateAuthoritySubordinateConfig</a>

---


### PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference <a name="PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

new privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.resetPemCertificates">resetPemCertificates</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPemCertificates` <a name="resetPemCertificates" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.resetPemCertificates"></a>

```typescript
public resetPemCertificates(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.property.pemCertificatesInput">pemCertificatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.property.pemCertificates">pemCertificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain">PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pemCertificatesInput`<sup>Optional</sup> <a name="pemCertificatesInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.property.pemCertificatesInput"></a>

```typescript
public readonly pemCertificatesInput: string[];
```

- *Type:* string[]

---

##### `pemCertificates`<sup>Required</sup> <a name="pemCertificates" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.property.pemCertificates"></a>

```typescript
public readonly pemCertificates: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain">PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain</a>

---


### PrivatecaCertificateAuthorityTimeoutsOutputReference <a name="PrivatecaCertificateAuthorityTimeoutsOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.Initializer"></a>

```typescript
import { privatecaCertificateAuthority } from '@cdktf/provider-google'

new privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeouts">PrivatecaCertificateAuthorityTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivatecaCertificateAuthorityTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeouts">PrivatecaCertificateAuthorityTimeouts</a>

---



