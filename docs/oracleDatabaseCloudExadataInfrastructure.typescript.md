# `oracleDatabaseCloudExadataInfrastructure` Submodule <a name="`oracleDatabaseCloudExadataInfrastructure` Submodule" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleDatabaseCloudExadataInfrastructure <a name="OracleDatabaseCloudExadataInfrastructure" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure google_oracle_database_cloud_exadata_infrastructure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer"></a>

```typescript
import { oracleDatabaseCloudExadataInfrastructure } from '@cdktf/provider-google'

new oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure(scope: Construct, id: string, config: OracleDatabaseCloudExadataInfrastructureConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig">OracleDatabaseCloudExadataInfrastructureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig">OracleDatabaseCloudExadataInfrastructureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetGcpOracleZone">resetGcpOracleZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProperties` <a name="putProperties" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.putProperties"></a>

```typescript
public putProperties(value: OracleDatabaseCloudExadataInfrastructureProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties">OracleDatabaseCloudExadataInfrastructureProperties</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.putTimeouts"></a>

```typescript
public putTimeouts(value: OracleDatabaseCloudExadataInfrastructureTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts">OracleDatabaseCloudExadataInfrastructureTimeouts</a>

---

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetGcpOracleZone` <a name="resetGcpOracleZone" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetGcpOracleZone"></a>

```typescript
public resetGcpOracleZone(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OracleDatabaseCloudExadataInfrastructure resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.isConstruct"></a>

```typescript
import { oracleDatabaseCloudExadataInfrastructure } from '@cdktf/provider-google'

oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.isTerraformElement"></a>

```typescript
import { oracleDatabaseCloudExadataInfrastructure } from '@cdktf/provider-google'

oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.isTerraformResource"></a>

```typescript
import { oracleDatabaseCloudExadataInfrastructure } from '@cdktf/provider-google'

oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.generateConfigForImport"></a>

```typescript
import { oracleDatabaseCloudExadataInfrastructure } from '@cdktf/provider-google'

oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OracleDatabaseCloudExadataInfrastructure resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OracleDatabaseCloudExadataInfrastructure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OracleDatabaseCloudExadataInfrastructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OracleDatabaseCloudExadataInfrastructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.entitlementId">entitlementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference">OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference">OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.cloudExadataInfrastructureIdInput">cloudExadataInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.gcpOracleZoneInput">gcpOracleZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.propertiesInput">propertiesInput</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties">OracleDatabaseCloudExadataInfrastructureProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts">OracleDatabaseCloudExadataInfrastructureTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.gcpOracleZone">gcpOracleZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `entitlementId`<sup>Required</sup> <a name="entitlementId" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.entitlementId"></a>

```typescript
public readonly entitlementId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.properties"></a>

```typescript
public readonly properties: OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference">OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.timeouts"></a>

```typescript
public readonly timeouts: OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference">OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference</a>

---

##### `cloudExadataInfrastructureIdInput`<sup>Optional</sup> <a name="cloudExadataInfrastructureIdInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.cloudExadataInfrastructureIdInput"></a>

```typescript
public readonly cloudExadataInfrastructureIdInput: string;
```

- *Type:* string

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `gcpOracleZoneInput`<sup>Optional</sup> <a name="gcpOracleZoneInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.gcpOracleZoneInput"></a>

```typescript
public readonly gcpOracleZoneInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: OracleDatabaseCloudExadataInfrastructureProperties;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties">OracleDatabaseCloudExadataInfrastructureProperties</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OracleDatabaseCloudExadataInfrastructureTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts">OracleDatabaseCloudExadataInfrastructureTimeouts</a>

---

##### `cloudExadataInfrastructureId`<sup>Required</sup> <a name="cloudExadataInfrastructureId" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.cloudExadataInfrastructureId"></a>

```typescript
public readonly cloudExadataInfrastructureId: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `gcpOracleZone`<sup>Required</sup> <a name="gcpOracleZone" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.gcpOracleZone"></a>

```typescript
public readonly gcpOracleZone: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OracleDatabaseCloudExadataInfrastructureConfig <a name="OracleDatabaseCloudExadataInfrastructureConfig" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.Initializer"></a>

```typescript
import { oracleDatabaseCloudExadataInfrastructure } from '@cdktf/provider-google'

const oracleDatabaseCloudExadataInfrastructureConfig: oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>string</code> | The ID of the Exadata Infrastructure to create. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbServer'. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.displayName">displayName</a></code> | <code>string</code> | User friendly name for this resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.gcpOracleZone">gcpOracleZone</a></code> | <code>string</code> | GCP location where Oracle Exadata is hosted. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#id OracleDatabaseCloudExadataInfrastructure#id}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels or tags associated with the resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#project OracleDatabaseCloudExadataInfrastructure#project}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties">OracleDatabaseCloudExadataInfrastructureProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts">OracleDatabaseCloudExadataInfrastructureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cloudExadataInfrastructureId`<sup>Required</sup> <a name="cloudExadataInfrastructureId" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.cloudExadataInfrastructureId"></a>

```typescript
public readonly cloudExadataInfrastructureId: string;
```

- *Type:* string

The ID of the Exadata Infrastructure to create.

This value is restricted
to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#cloud_exadata_infrastructure_id OracleDatabaseCloudExadataInfrastructure#cloud_exadata_infrastructure_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbServer'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#location OracleDatabaseCloudExadataInfrastructure#location}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#deletion_protection OracleDatabaseCloudExadataInfrastructure#deletion_protection}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User friendly name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#display_name OracleDatabaseCloudExadataInfrastructure#display_name}

---

##### `gcpOracleZone`<sup>Optional</sup> <a name="gcpOracleZone" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.gcpOracleZone"></a>

```typescript
public readonly gcpOracleZone: string;
```

- *Type:* string

GCP location where Oracle Exadata is hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#gcp_oracle_zone OracleDatabaseCloudExadataInfrastructure#gcp_oracle_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#id OracleDatabaseCloudExadataInfrastructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels or tags associated with the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#labels OracleDatabaseCloudExadataInfrastructure#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#project OracleDatabaseCloudExadataInfrastructure#project}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.properties"></a>

```typescript
public readonly properties: OracleDatabaseCloudExadataInfrastructureProperties;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties">OracleDatabaseCloudExadataInfrastructureProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#properties OracleDatabaseCloudExadataInfrastructure#properties}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OracleDatabaseCloudExadataInfrastructureTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts">OracleDatabaseCloudExadataInfrastructureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#timeouts OracleDatabaseCloudExadataInfrastructure#timeouts}

---

### OracleDatabaseCloudExadataInfrastructureProperties <a name="OracleDatabaseCloudExadataInfrastructureProperties" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.Initializer"></a>

```typescript
import { oracleDatabaseCloudExadataInfrastructure } from '@cdktf/provider-google'

const oracleDatabaseCloudExadataInfrastructureProperties: oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.shape">shape</a></code> | <code>string</code> | The shape of the Exadata Infrastructure. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.computeCount">computeCount</a></code> | <code>number</code> | The number of compute servers for the Exadata Infrastructure. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.customerContacts">customerContacts</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>[]</code> | customer_contacts block. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.storageCount">storageCount</a></code> | <code>number</code> | The number of Cloud Exadata storage servers for the Exadata Infrastructure. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.totalStorageSizeGb">totalStorageSizeGb</a></code> | <code>number</code> | The total storage allocated to the Exadata Infrastructure resource, in gigabytes (GB). |

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

The shape of the Exadata Infrastructure.

The shape determines the
amount of CPU, storage, and memory resources allocated to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#shape OracleDatabaseCloudExadataInfrastructure#shape}

---

##### `computeCount`<sup>Optional</sup> <a name="computeCount" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

The number of compute servers for the Exadata Infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#compute_count OracleDatabaseCloudExadataInfrastructure#compute_count}

---

##### `customerContacts`<sup>Optional</sup> <a name="customerContacts" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.customerContacts"></a>

```typescript
public readonly customerContacts: IResolvable | OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>[]

customer_contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#customer_contacts OracleDatabaseCloudExadataInfrastructure#customer_contacts}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#maintenance_window OracleDatabaseCloudExadataInfrastructure#maintenance_window}

---

##### `storageCount`<sup>Optional</sup> <a name="storageCount" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.storageCount"></a>

```typescript
public readonly storageCount: number;
```

- *Type:* number

The number of Cloud Exadata storage servers for the Exadata Infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#storage_count OracleDatabaseCloudExadataInfrastructure#storage_count}

---

##### `totalStorageSizeGb`<sup>Optional</sup> <a name="totalStorageSizeGb" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.totalStorageSizeGb"></a>

```typescript
public readonly totalStorageSizeGb: number;
```

- *Type:* number

The total storage allocated to the Exadata Infrastructure resource, in gigabytes (GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#total_storage_size_gb OracleDatabaseCloudExadataInfrastructure#total_storage_size_gb}

---

### OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts <a name="OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts.Initializer"></a>

```typescript
import { oracleDatabaseCloudExadataInfrastructure } from '@cdktf/provider-google'

const oracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts: oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts.property.email">email</a></code> | <code>string</code> | The email address used by Oracle to send notifications regarding databases and infrastructure. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

The email address used by Oracle to send notifications regarding databases and infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#email OracleDatabaseCloudExadataInfrastructure#email}

---

### OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow <a name="OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.Initializer"></a>

```typescript
import { oracleDatabaseCloudExadataInfrastructure } from '@cdktf/provider-google'

const oracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow: oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.customActionTimeoutMins">customActionTimeoutMins</a></code> | <code>number</code> | Determines the amount of time the system will wait before the start of each database server patching operation. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | Days during the week when maintenance should be performed. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.hoursOfDay">hoursOfDay</a></code> | <code>number[]</code> | The window of hours during the day when maintenance should be performed. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, enables the configuration of a custom action timeout (waiting period) between database server patching operations. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.leadTimeWeek">leadTimeWeek</a></code> | <code>number</code> | Lead time window allows user to set a lead time to prepare for a down time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.months">months</a></code> | <code>string[]</code> | Months during the year when maintenance should be performed. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.patchingMode">patchingMode</a></code> | <code>string</code> | Cloud CloudExadataInfrastructure node patching method, either "ROLLING"  or "NONROLLING". Default value is ROLLING.   Possible values:  PATCHING_MODE_UNSPECIFIED ROLLING NON_ROLLING. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.preference">preference</a></code> | <code>string</code> | The maintenance window scheduling preference.   Possible values:  MAINTENANCE_WINDOW_PREFERENCE_UNSPECIFIED CUSTOM_PREFERENCE NO_PREFERENCE. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.weeksOfMonth">weeksOfMonth</a></code> | <code>number[]</code> | Weeks during the month when maintenance should be performed. |

---

##### `customActionTimeoutMins`<sup>Optional</sup> <a name="customActionTimeoutMins" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.customActionTimeoutMins"></a>

```typescript
public readonly customActionTimeoutMins: number;
```

- *Type:* number

Determines the amount of time the system will wait before the start of each database server patching operation.

Custom action timeout is in minutes and
valid value is between 15 to 120 (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#custom_action_timeout_mins OracleDatabaseCloudExadataInfrastructure#custom_action_timeout_mins}

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

Days during the week when maintenance should be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#days_of_week OracleDatabaseCloudExadataInfrastructure#days_of_week}

---

##### `hoursOfDay`<sup>Optional</sup> <a name="hoursOfDay" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.hoursOfDay"></a>

```typescript
public readonly hoursOfDay: number[];
```

- *Type:* number[]

The window of hours during the day when maintenance should be performed.

The window is a 4 hour slot. Valid values are:
  0 - represents time slot 0:00 - 3:59 UTC
  4 - represents time slot 4:00 - 7:59 UTC
  8 - represents time slot 8:00 - 11:59 UTC
  12 - represents time slot 12:00 - 15:59 UTC
  16 - represents time slot 16:00 - 19:59 UTC
  20 - represents time slot 20:00 - 23:59 UTC

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#hours_of_day OracleDatabaseCloudExadataInfrastructure#hours_of_day}

---

##### `isCustomActionTimeoutEnabled`<sup>Optional</sup> <a name="isCustomActionTimeoutEnabled" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.isCustomActionTimeoutEnabled"></a>

```typescript
public readonly isCustomActionTimeoutEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, enables the configuration of a custom action timeout (waiting period) between database server patching operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#is_custom_action_timeout_enabled OracleDatabaseCloudExadataInfrastructure#is_custom_action_timeout_enabled}

---

##### `leadTimeWeek`<sup>Optional</sup> <a name="leadTimeWeek" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.leadTimeWeek"></a>

```typescript
public readonly leadTimeWeek: number;
```

- *Type:* number

Lead time window allows user to set a lead time to prepare for a down time.

The lead time is in weeks and valid value is between 1 to 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#lead_time_week OracleDatabaseCloudExadataInfrastructure#lead_time_week}

---

##### `months`<sup>Optional</sup> <a name="months" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.months"></a>

```typescript
public readonly months: string[];
```

- *Type:* string[]

Months during the year when maintenance should be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#months OracleDatabaseCloudExadataInfrastructure#months}

---

##### `patchingMode`<sup>Optional</sup> <a name="patchingMode" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.patchingMode"></a>

```typescript
public readonly patchingMode: string;
```

- *Type:* string

Cloud CloudExadataInfrastructure node patching method, either "ROLLING"  or "NONROLLING". Default value is ROLLING.   Possible values:  PATCHING_MODE_UNSPECIFIED ROLLING NON_ROLLING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#patching_mode OracleDatabaseCloudExadataInfrastructure#patching_mode}

---

##### `preference`<sup>Optional</sup> <a name="preference" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.preference"></a>

```typescript
public readonly preference: string;
```

- *Type:* string

The maintenance window scheduling preference.   Possible values:  MAINTENANCE_WINDOW_PREFERENCE_UNSPECIFIED CUSTOM_PREFERENCE NO_PREFERENCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#preference OracleDatabaseCloudExadataInfrastructure#preference}

---

##### `weeksOfMonth`<sup>Optional</sup> <a name="weeksOfMonth" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.weeksOfMonth"></a>

```typescript
public readonly weeksOfMonth: number[];
```

- *Type:* number[]

Weeks during the month when maintenance should be performed.

Weeks start on
the 1st, 8th, 15th, and 22nd days of the month, and have a duration of 7
days. Weeks start and end based on calendar dates, not days of the week.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#weeks_of_month OracleDatabaseCloudExadataInfrastructure#weeks_of_month}

---

### OracleDatabaseCloudExadataInfrastructureTimeouts <a name="OracleDatabaseCloudExadataInfrastructureTimeouts" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts.Initializer"></a>

```typescript
import { oracleDatabaseCloudExadataInfrastructure } from '@cdktf/provider-google'

const oracleDatabaseCloudExadataInfrastructureTimeouts: oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#create OracleDatabaseCloudExadataInfrastructure#create}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#delete OracleDatabaseCloudExadataInfrastructure#delete}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#update OracleDatabaseCloudExadataInfrastructure#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#create OracleDatabaseCloudExadataInfrastructure#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#delete OracleDatabaseCloudExadataInfrastructure#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/oracle_database_cloud_exadata_infrastructure#update OracleDatabaseCloudExadataInfrastructure#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList <a name="OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer"></a>

```typescript
import { oracleDatabaseCloudExadataInfrastructure } from '@cdktf/provider-google'

new oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.get"></a>

```typescript
public get(index: number): OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>[]

---


### OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference <a name="OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseCloudExadataInfrastructure } from '@cdktf/provider-google'

new oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>

---


### OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference <a name="OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseCloudExadataInfrastructure } from '@cdktf/provider-google'

new oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetCustomActionTimeoutMins">resetCustomActionTimeoutMins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetHoursOfDay">resetHoursOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetIsCustomActionTimeoutEnabled">resetIsCustomActionTimeoutEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetLeadTimeWeek">resetLeadTimeWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetMonths">resetMonths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetPatchingMode">resetPatchingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetPreference">resetPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetWeeksOfMonth">resetWeeksOfMonth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomActionTimeoutMins` <a name="resetCustomActionTimeoutMins" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetCustomActionTimeoutMins"></a>

```typescript
public resetCustomActionTimeoutMins(): void
```

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetDaysOfWeek"></a>

```typescript
public resetDaysOfWeek(): void
```

##### `resetHoursOfDay` <a name="resetHoursOfDay" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetHoursOfDay"></a>

```typescript
public resetHoursOfDay(): void
```

##### `resetIsCustomActionTimeoutEnabled` <a name="resetIsCustomActionTimeoutEnabled" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetIsCustomActionTimeoutEnabled"></a>

```typescript
public resetIsCustomActionTimeoutEnabled(): void
```

##### `resetLeadTimeWeek` <a name="resetLeadTimeWeek" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetLeadTimeWeek"></a>

```typescript
public resetLeadTimeWeek(): void
```

##### `resetMonths` <a name="resetMonths" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetMonths"></a>

```typescript
public resetMonths(): void
```

##### `resetPatchingMode` <a name="resetPatchingMode" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetPatchingMode"></a>

```typescript
public resetPatchingMode(): void
```

##### `resetPreference` <a name="resetPreference" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetPreference"></a>

```typescript
public resetPreference(): void
```

##### `resetWeeksOfMonth` <a name="resetWeeksOfMonth" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetWeeksOfMonth"></a>

```typescript
public resetWeeksOfMonth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.customActionTimeoutMinsInput">customActionTimeoutMinsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.hoursOfDayInput">hoursOfDayInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabledInput">isCustomActionTimeoutEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.leadTimeWeekInput">leadTimeWeekInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.monthsInput">monthsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.patchingModeInput">patchingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.preferenceInput">preferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.weeksOfMonthInput">weeksOfMonthInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.customActionTimeoutMins">customActionTimeoutMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.hoursOfDay">hoursOfDay</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.leadTimeWeek">leadTimeWeek</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.months">months</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.patchingMode">patchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customActionTimeoutMinsInput`<sup>Optional</sup> <a name="customActionTimeoutMinsInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.customActionTimeoutMinsInput"></a>

```typescript
public readonly customActionTimeoutMinsInput: number;
```

- *Type:* number

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.daysOfWeekInput"></a>

```typescript
public readonly daysOfWeekInput: string[];
```

- *Type:* string[]

---

##### `hoursOfDayInput`<sup>Optional</sup> <a name="hoursOfDayInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.hoursOfDayInput"></a>

```typescript
public readonly hoursOfDayInput: number[];
```

- *Type:* number[]

---

##### `isCustomActionTimeoutEnabledInput`<sup>Optional</sup> <a name="isCustomActionTimeoutEnabledInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabledInput"></a>

```typescript
public readonly isCustomActionTimeoutEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `leadTimeWeekInput`<sup>Optional</sup> <a name="leadTimeWeekInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.leadTimeWeekInput"></a>

```typescript
public readonly leadTimeWeekInput: number;
```

- *Type:* number

---

##### `monthsInput`<sup>Optional</sup> <a name="monthsInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.monthsInput"></a>

```typescript
public readonly monthsInput: string[];
```

- *Type:* string[]

---

##### `patchingModeInput`<sup>Optional</sup> <a name="patchingModeInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.patchingModeInput"></a>

```typescript
public readonly patchingModeInput: string;
```

- *Type:* string

---

##### `preferenceInput`<sup>Optional</sup> <a name="preferenceInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.preferenceInput"></a>

```typescript
public readonly preferenceInput: string;
```

- *Type:* string

---

##### `weeksOfMonthInput`<sup>Optional</sup> <a name="weeksOfMonthInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.weeksOfMonthInput"></a>

```typescript
public readonly weeksOfMonthInput: number[];
```

- *Type:* number[]

---

##### `customActionTimeoutMins`<sup>Required</sup> <a name="customActionTimeoutMins" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.customActionTimeoutMins"></a>

```typescript
public readonly customActionTimeoutMins: number;
```

- *Type:* number

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

---

##### `hoursOfDay`<sup>Required</sup> <a name="hoursOfDay" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```typescript
public readonly hoursOfDay: number[];
```

- *Type:* number[]

---

##### `isCustomActionTimeoutEnabled`<sup>Required</sup> <a name="isCustomActionTimeoutEnabled" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```typescript
public readonly isCustomActionTimeoutEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `leadTimeWeek`<sup>Required</sup> <a name="leadTimeWeek" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.leadTimeWeek"></a>

```typescript
public readonly leadTimeWeek: number;
```

- *Type:* number

---

##### `months`<sup>Required</sup> <a name="months" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.months"></a>

```typescript
public readonly months: string[];
```

- *Type:* string[]

---

##### `patchingMode`<sup>Required</sup> <a name="patchingMode" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.patchingMode"></a>

```typescript
public readonly patchingMode: string;
```

- *Type:* string

---

##### `preference`<sup>Required</sup> <a name="preference" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.preference"></a>

```typescript
public readonly preference: string;
```

- *Type:* string

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```typescript
public readonly weeksOfMonth: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a>

---


### OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference <a name="OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseCloudExadataInfrastructure } from '@cdktf/provider-google'

new oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putCustomerContacts">putCustomerContacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetComputeCount">resetComputeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetCustomerContacts">resetCustomerContacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetStorageCount">resetStorageCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetTotalStorageSizeGb">resetTotalStorageSizeGb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomerContacts` <a name="putCustomerContacts" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putCustomerContacts"></a>

```typescript
public putCustomerContacts(value: IResolvable | OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putCustomerContacts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>[]

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow"></a>

```typescript
public putMaintenanceWindow(value: OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a>

---

##### `resetComputeCount` <a name="resetComputeCount" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetComputeCount"></a>

```typescript
public resetComputeCount(): void
```

##### `resetCustomerContacts` <a name="resetCustomerContacts" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetCustomerContacts"></a>

```typescript
public resetCustomerContacts(): void
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetMaintenanceWindow"></a>

```typescript
public resetMaintenanceWindow(): void
```

##### `resetStorageCount` <a name="resetStorageCount" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetStorageCount"></a>

```typescript
public resetStorageCount(): void
```

##### `resetTotalStorageSizeGb` <a name="resetTotalStorageSizeGb" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetTotalStorageSizeGb"></a>

```typescript
public resetTotalStorageSizeGb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.activatedStorageCount">activatedStorageCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.additionalStorageCount">additionalStorageCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.availableStorageSizeGb">availableStorageSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.cpuCount">cpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.customerContacts">customerContacts</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList">OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dataStorageSizeTb">dataStorageSizeTb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dbNodeStorageSizeGb">dbNodeStorageSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dbServerVersion">dbServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference">OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxCpuCount">maxCpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxDataStorageTb">maxDataStorageTb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxDbNodeStorageSizeGb">maxDbNodeStorageSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxMemoryGb">maxMemoryGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.memorySizeGb">memorySizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.monthlyDbServerVersion">monthlyDbServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.monthlyStorageServerVersion">monthlyStorageServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextMaintenanceRunId">nextMaintenanceRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextMaintenanceRunTime">nextMaintenanceRunTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextSecurityMaintenanceRunTime">nextSecurityMaintenanceRunTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.ociUrl">ociUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageServerVersion">storageServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.computeCountInput">computeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.customerContactsInput">customerContactsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.shapeInput">shapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageCountInput">storageCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.totalStorageSizeGbInput">totalStorageSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.computeCount">computeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageCount">storageCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.totalStorageSizeGb">totalStorageSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties">OracleDatabaseCloudExadataInfrastructureProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activatedStorageCount`<sup>Required</sup> <a name="activatedStorageCount" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.activatedStorageCount"></a>

```typescript
public readonly activatedStorageCount: number;
```

- *Type:* number

---

##### `additionalStorageCount`<sup>Required</sup> <a name="additionalStorageCount" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.additionalStorageCount"></a>

```typescript
public readonly additionalStorageCount: number;
```

- *Type:* number

---

##### `availableStorageSizeGb`<sup>Required</sup> <a name="availableStorageSizeGb" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.availableStorageSizeGb"></a>

```typescript
public readonly availableStorageSizeGb: number;
```

- *Type:* number

---

##### `cpuCount`<sup>Required</sup> <a name="cpuCount" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.cpuCount"></a>

```typescript
public readonly cpuCount: number;
```

- *Type:* number

---

##### `customerContacts`<sup>Required</sup> <a name="customerContacts" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.customerContacts"></a>

```typescript
public readonly customerContacts: OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList">OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList</a>

---

##### `dataStorageSizeTb`<sup>Required</sup> <a name="dataStorageSizeTb" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dataStorageSizeTb"></a>

```typescript
public readonly dataStorageSizeTb: number;
```

- *Type:* number

---

##### `dbNodeStorageSizeGb`<sup>Required</sup> <a name="dbNodeStorageSizeGb" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dbNodeStorageSizeGb"></a>

```typescript
public readonly dbNodeStorageSizeGb: number;
```

- *Type:* number

---

##### `dbServerVersion`<sup>Required</sup> <a name="dbServerVersion" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dbServerVersion"></a>

```typescript
public readonly dbServerVersion: string;
```

- *Type:* string

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference">OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference</a>

---

##### `maxCpuCount`<sup>Required</sup> <a name="maxCpuCount" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxCpuCount"></a>

```typescript
public readonly maxCpuCount: number;
```

- *Type:* number

---

##### `maxDataStorageTb`<sup>Required</sup> <a name="maxDataStorageTb" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxDataStorageTb"></a>

```typescript
public readonly maxDataStorageTb: number;
```

- *Type:* number

---

##### `maxDbNodeStorageSizeGb`<sup>Required</sup> <a name="maxDbNodeStorageSizeGb" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxDbNodeStorageSizeGb"></a>

```typescript
public readonly maxDbNodeStorageSizeGb: number;
```

- *Type:* number

---

##### `maxMemoryGb`<sup>Required</sup> <a name="maxMemoryGb" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxMemoryGb"></a>

```typescript
public readonly maxMemoryGb: number;
```

- *Type:* number

---

##### `memorySizeGb`<sup>Required</sup> <a name="memorySizeGb" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.memorySizeGb"></a>

```typescript
public readonly memorySizeGb: number;
```

- *Type:* number

---

##### `monthlyDbServerVersion`<sup>Required</sup> <a name="monthlyDbServerVersion" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.monthlyDbServerVersion"></a>

```typescript
public readonly monthlyDbServerVersion: string;
```

- *Type:* string

---

##### `monthlyStorageServerVersion`<sup>Required</sup> <a name="monthlyStorageServerVersion" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.monthlyStorageServerVersion"></a>

```typescript
public readonly monthlyStorageServerVersion: string;
```

- *Type:* string

---

##### `nextMaintenanceRunId`<sup>Required</sup> <a name="nextMaintenanceRunId" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextMaintenanceRunId"></a>

```typescript
public readonly nextMaintenanceRunId: string;
```

- *Type:* string

---

##### `nextMaintenanceRunTime`<sup>Required</sup> <a name="nextMaintenanceRunTime" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextMaintenanceRunTime"></a>

```typescript
public readonly nextMaintenanceRunTime: string;
```

- *Type:* string

---

##### `nextSecurityMaintenanceRunTime`<sup>Required</sup> <a name="nextSecurityMaintenanceRunTime" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextSecurityMaintenanceRunTime"></a>

```typescript
public readonly nextSecurityMaintenanceRunTime: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ociUrl`<sup>Required</sup> <a name="ociUrl" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.ociUrl"></a>

```typescript
public readonly ociUrl: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `storageServerVersion`<sup>Required</sup> <a name="storageServerVersion" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageServerVersion"></a>

```typescript
public readonly storageServerVersion: string;
```

- *Type:* string

---

##### `computeCountInput`<sup>Optional</sup> <a name="computeCountInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.computeCountInput"></a>

```typescript
public readonly computeCountInput: number;
```

- *Type:* number

---

##### `customerContactsInput`<sup>Optional</sup> <a name="customerContactsInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.customerContactsInput"></a>

```typescript
public readonly customerContactsInput: IResolvable | OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>[]

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maintenanceWindowInput"></a>

```typescript
public readonly maintenanceWindowInput: OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a>

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.shapeInput"></a>

```typescript
public readonly shapeInput: string;
```

- *Type:* string

---

##### `storageCountInput`<sup>Optional</sup> <a name="storageCountInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageCountInput"></a>

```typescript
public readonly storageCountInput: number;
```

- *Type:* number

---

##### `totalStorageSizeGbInput`<sup>Optional</sup> <a name="totalStorageSizeGbInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.totalStorageSizeGbInput"></a>

```typescript
public readonly totalStorageSizeGbInput: number;
```

- *Type:* number

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `storageCount`<sup>Required</sup> <a name="storageCount" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageCount"></a>

```typescript
public readonly storageCount: number;
```

- *Type:* number

---

##### `totalStorageSizeGb`<sup>Required</sup> <a name="totalStorageSizeGb" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.totalStorageSizeGb"></a>

```typescript
public readonly totalStorageSizeGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OracleDatabaseCloudExadataInfrastructureProperties;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties">OracleDatabaseCloudExadataInfrastructureProperties</a>

---


### OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference <a name="OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseCloudExadataInfrastructure } from '@cdktf/provider-google'

new oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts">OracleDatabaseCloudExadataInfrastructureTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OracleDatabaseCloudExadataInfrastructureTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts">OracleDatabaseCloudExadataInfrastructureTimeouts</a>

---



