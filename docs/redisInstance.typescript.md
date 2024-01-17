# `redisInstance` Submodule <a name="`redisInstance` Submodule" id="@cdktf/provider-google.redisInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedisInstance <a name="RedisInstance" id="@cdktf/provider-google.redisInstance.RedisInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance google_redis_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstance.Initializer"></a>

```typescript
import { redisInstance } from '@cdktf/provider-google'

new redisInstance.RedisInstance(scope: Construct, id: string, config: RedisInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig">RedisInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.redisInstance.RedisInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.redisInstance.RedisInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.redisInstance.RedisInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig">RedisInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.putMaintenancePolicy">putMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.putPersistenceConfig">putPersistenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetAlternativeLocationId">resetAlternativeLocationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetAuthEnabled">resetAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetAuthorizedNetwork">resetAuthorizedNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetConnectMode">resetConnectMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetCustomerManagedKey">resetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetLocationId">resetLocationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetMaintenancePolicy">resetMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetPersistenceConfig">resetPersistenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetReadReplicasMode">resetReadReplicasMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetRedisConfigs">resetRedisConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetRedisVersion">resetRedisVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetReplicaCount">resetReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetReservedIpRange">resetReservedIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetSecondaryIpRange">resetSecondaryIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetTier">resetTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetTransitEncryptionMode">resetTransitEncryptionMode</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisInstance.RedisInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.redisInstance.RedisInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.redisInstance.RedisInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisInstance.RedisInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.redisInstance.RedisInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.redisInstance.RedisInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.redisInstance.RedisInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.redisInstance.RedisInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.redisInstance.RedisInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.redisInstance.RedisInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.redisInstance.RedisInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.redisInstance.RedisInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.redisInstance.RedisInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.redisInstance.RedisInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.redisInstance.RedisInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.redisInstance.RedisInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.redisInstance.RedisInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.redisInstance.RedisInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.redisInstance.RedisInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.redisInstance.RedisInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.redisInstance.RedisInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.redisInstance.RedisInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.redisInstance.RedisInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMaintenancePolicy` <a name="putMaintenancePolicy" id="@cdktf/provider-google.redisInstance.RedisInstance.putMaintenancePolicy"></a>

```typescript
public putMaintenancePolicy(value: RedisInstanceMaintenancePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisInstance.RedisInstance.putMaintenancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy">RedisInstanceMaintenancePolicy</a>

---

##### `putPersistenceConfig` <a name="putPersistenceConfig" id="@cdktf/provider-google.redisInstance.RedisInstance.putPersistenceConfig"></a>

```typescript
public putPersistenceConfig(value: RedisInstancePersistenceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisInstance.RedisInstance.putPersistenceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig">RedisInstancePersistenceConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.redisInstance.RedisInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: RedisInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisInstance.RedisInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeouts">RedisInstanceTimeouts</a>

---

##### `resetAlternativeLocationId` <a name="resetAlternativeLocationId" id="@cdktf/provider-google.redisInstance.RedisInstance.resetAlternativeLocationId"></a>

```typescript
public resetAlternativeLocationId(): void
```

##### `resetAuthEnabled` <a name="resetAuthEnabled" id="@cdktf/provider-google.redisInstance.RedisInstance.resetAuthEnabled"></a>

```typescript
public resetAuthEnabled(): void
```

##### `resetAuthorizedNetwork` <a name="resetAuthorizedNetwork" id="@cdktf/provider-google.redisInstance.RedisInstance.resetAuthorizedNetwork"></a>

```typescript
public resetAuthorizedNetwork(): void
```

##### `resetConnectMode` <a name="resetConnectMode" id="@cdktf/provider-google.redisInstance.RedisInstance.resetConnectMode"></a>

```typescript
public resetConnectMode(): void
```

##### `resetCustomerManagedKey` <a name="resetCustomerManagedKey" id="@cdktf/provider-google.redisInstance.RedisInstance.resetCustomerManagedKey"></a>

```typescript
public resetCustomerManagedKey(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.redisInstance.RedisInstance.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.redisInstance.RedisInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.redisInstance.RedisInstance.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocationId` <a name="resetLocationId" id="@cdktf/provider-google.redisInstance.RedisInstance.resetLocationId"></a>

```typescript
public resetLocationId(): void
```

##### `resetMaintenancePolicy` <a name="resetMaintenancePolicy" id="@cdktf/provider-google.redisInstance.RedisInstance.resetMaintenancePolicy"></a>

```typescript
public resetMaintenancePolicy(): void
```

##### `resetPersistenceConfig` <a name="resetPersistenceConfig" id="@cdktf/provider-google.redisInstance.RedisInstance.resetPersistenceConfig"></a>

```typescript
public resetPersistenceConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.redisInstance.RedisInstance.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetReadReplicasMode` <a name="resetReadReplicasMode" id="@cdktf/provider-google.redisInstance.RedisInstance.resetReadReplicasMode"></a>

```typescript
public resetReadReplicasMode(): void
```

##### `resetRedisConfigs` <a name="resetRedisConfigs" id="@cdktf/provider-google.redisInstance.RedisInstance.resetRedisConfigs"></a>

```typescript
public resetRedisConfigs(): void
```

##### `resetRedisVersion` <a name="resetRedisVersion" id="@cdktf/provider-google.redisInstance.RedisInstance.resetRedisVersion"></a>

```typescript
public resetRedisVersion(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.redisInstance.RedisInstance.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetReplicaCount` <a name="resetReplicaCount" id="@cdktf/provider-google.redisInstance.RedisInstance.resetReplicaCount"></a>

```typescript
public resetReplicaCount(): void
```

##### `resetReservedIpRange` <a name="resetReservedIpRange" id="@cdktf/provider-google.redisInstance.RedisInstance.resetReservedIpRange"></a>

```typescript
public resetReservedIpRange(): void
```

##### `resetSecondaryIpRange` <a name="resetSecondaryIpRange" id="@cdktf/provider-google.redisInstance.RedisInstance.resetSecondaryIpRange"></a>

```typescript
public resetSecondaryIpRange(): void
```

##### `resetTier` <a name="resetTier" id="@cdktf/provider-google.redisInstance.RedisInstance.resetTier"></a>

```typescript
public resetTier(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.redisInstance.RedisInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTransitEncryptionMode` <a name="resetTransitEncryptionMode" id="@cdktf/provider-google.redisInstance.RedisInstance.resetTransitEncryptionMode"></a>

```typescript
public resetTransitEncryptionMode(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RedisInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.redisInstance.RedisInstance.isConstruct"></a>

```typescript
import { redisInstance } from '@cdktf/provider-google'

redisInstance.RedisInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.redisInstance.RedisInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.redisInstance.RedisInstance.isTerraformElement"></a>

```typescript
import { redisInstance } from '@cdktf/provider-google'

redisInstance.RedisInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.redisInstance.RedisInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.redisInstance.RedisInstance.isTerraformResource"></a>

```typescript
import { redisInstance } from '@cdktf/provider-google'

redisInstance.RedisInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.redisInstance.RedisInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.redisInstance.RedisInstance.generateConfigForImport"></a>

```typescript
import { redisInstance } from '@cdktf/provider-google'

redisInstance.RedisInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RedisInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.redisInstance.RedisInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.redisInstance.RedisInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RedisInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.redisInstance.RedisInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RedisInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.redisInstance.RedisInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RedisInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.authString">authString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.currentLocationId">currentLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference">RedisInstanceMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.maintenanceSchedule">maintenanceSchedule</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList">RedisInstanceMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.nodes">nodes</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesList">RedisInstanceNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.persistenceConfig">persistenceConfig</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference">RedisInstancePersistenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.persistenceIamIdentity">persistenceIamIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.readEndpoint">readEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.readEndpointPort">readEndpointPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.serverCaCerts">serverCaCerts</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList">RedisInstanceServerCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference">RedisInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.alternativeLocationIdInput">alternativeLocationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.authEnabledInput">authEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.authorizedNetworkInput">authorizedNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.connectModeInput">connectModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.customerManagedKeyInput">customerManagedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.locationIdInput">locationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.maintenancePolicyInput">maintenancePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy">RedisInstanceMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.memorySizeGbInput">memorySizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.persistenceConfigInput">persistenceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig">RedisInstancePersistenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.readReplicasModeInput">readReplicasModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.redisConfigsInput">redisConfigsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.redisVersionInput">redisVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.replicaCountInput">replicaCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.reservedIpRangeInput">reservedIpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.secondaryIpRangeInput">secondaryIpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.tierInput">tierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeouts">RedisInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.transitEncryptionModeInput">transitEncryptionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.alternativeLocationId">alternativeLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.authEnabled">authEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.authorizedNetwork">authorizedNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.connectMode">connectMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.customerManagedKey">customerManagedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.locationId">locationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.memorySizeGb">memorySizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.readReplicasMode">readReplicasMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.redisConfigs">redisConfigs</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.redisVersion">redisVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.replicaCount">replicaCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.reservedIpRange">reservedIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.secondaryIpRange">secondaryIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.tier">tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.transitEncryptionMode">transitEncryptionMode</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.redisInstance.RedisInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.redisInstance.RedisInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisInstance.RedisInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.redisInstance.RedisInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.redisInstance.RedisInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.redisInstance.RedisInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.redisInstance.RedisInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.redisInstance.RedisInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.redisInstance.RedisInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.redisInstance.RedisInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.redisInstance.RedisInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.redisInstance.RedisInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.redisInstance.RedisInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.redisInstance.RedisInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authString`<sup>Required</sup> <a name="authString" id="@cdktf/provider-google.redisInstance.RedisInstance.property.authString"></a>

```typescript
public readonly authString: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.redisInstance.RedisInstance.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `currentLocationId`<sup>Required</sup> <a name="currentLocationId" id="@cdktf/provider-google.redisInstance.RedisInstance.property.currentLocationId"></a>

```typescript
public readonly currentLocationId: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.redisInstance.RedisInstance.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.redisInstance.RedisInstance.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `maintenancePolicy`<sup>Required</sup> <a name="maintenancePolicy" id="@cdktf/provider-google.redisInstance.RedisInstance.property.maintenancePolicy"></a>

```typescript
public readonly maintenancePolicy: RedisInstanceMaintenancePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference">RedisInstanceMaintenancePolicyOutputReference</a>

---

##### `maintenanceSchedule`<sup>Required</sup> <a name="maintenanceSchedule" id="@cdktf/provider-google.redisInstance.RedisInstance.property.maintenanceSchedule"></a>

```typescript
public readonly maintenanceSchedule: RedisInstanceMaintenanceScheduleList;
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList">RedisInstanceMaintenanceScheduleList</a>

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktf/provider-google.redisInstance.RedisInstance.property.nodes"></a>

```typescript
public readonly nodes: RedisInstanceNodesList;
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesList">RedisInstanceNodesList</a>

---

##### `persistenceConfig`<sup>Required</sup> <a name="persistenceConfig" id="@cdktf/provider-google.redisInstance.RedisInstance.property.persistenceConfig"></a>

```typescript
public readonly persistenceConfig: RedisInstancePersistenceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference">RedisInstancePersistenceConfigOutputReference</a>

---

##### `persistenceIamIdentity`<sup>Required</sup> <a name="persistenceIamIdentity" id="@cdktf/provider-google.redisInstance.RedisInstance.property.persistenceIamIdentity"></a>

```typescript
public readonly persistenceIamIdentity: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.redisInstance.RedisInstance.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `readEndpoint`<sup>Required</sup> <a name="readEndpoint" id="@cdktf/provider-google.redisInstance.RedisInstance.property.readEndpoint"></a>

```typescript
public readonly readEndpoint: string;
```

- *Type:* string

---

##### `readEndpointPort`<sup>Required</sup> <a name="readEndpointPort" id="@cdktf/provider-google.redisInstance.RedisInstance.property.readEndpointPort"></a>

```typescript
public readonly readEndpointPort: number;
```

- *Type:* number

---

##### `serverCaCerts`<sup>Required</sup> <a name="serverCaCerts" id="@cdktf/provider-google.redisInstance.RedisInstance.property.serverCaCerts"></a>

```typescript
public readonly serverCaCerts: RedisInstanceServerCaCertsList;
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList">RedisInstanceServerCaCertsList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.redisInstance.RedisInstance.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.redisInstance.RedisInstance.property.timeouts"></a>

```typescript
public readonly timeouts: RedisInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference">RedisInstanceTimeoutsOutputReference</a>

---

##### `alternativeLocationIdInput`<sup>Optional</sup> <a name="alternativeLocationIdInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.alternativeLocationIdInput"></a>

```typescript
public readonly alternativeLocationIdInput: string;
```

- *Type:* string

---

##### `authEnabledInput`<sup>Optional</sup> <a name="authEnabledInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.authEnabledInput"></a>

```typescript
public readonly authEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `authorizedNetworkInput`<sup>Optional</sup> <a name="authorizedNetworkInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.authorizedNetworkInput"></a>

```typescript
public readonly authorizedNetworkInput: string;
```

- *Type:* string

---

##### `connectModeInput`<sup>Optional</sup> <a name="connectModeInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.connectModeInput"></a>

```typescript
public readonly connectModeInput: string;
```

- *Type:* string

---

##### `customerManagedKeyInput`<sup>Optional</sup> <a name="customerManagedKeyInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.customerManagedKeyInput"></a>

```typescript
public readonly customerManagedKeyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationIdInput`<sup>Optional</sup> <a name="locationIdInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.locationIdInput"></a>

```typescript
public readonly locationIdInput: string;
```

- *Type:* string

---

##### `maintenancePolicyInput`<sup>Optional</sup> <a name="maintenancePolicyInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.maintenancePolicyInput"></a>

```typescript
public readonly maintenancePolicyInput: RedisInstanceMaintenancePolicy;
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy">RedisInstanceMaintenancePolicy</a>

---

##### `memorySizeGbInput`<sup>Optional</sup> <a name="memorySizeGbInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.memorySizeGbInput"></a>

```typescript
public readonly memorySizeGbInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `persistenceConfigInput`<sup>Optional</sup> <a name="persistenceConfigInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.persistenceConfigInput"></a>

```typescript
public readonly persistenceConfigInput: RedisInstancePersistenceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig">RedisInstancePersistenceConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `readReplicasModeInput`<sup>Optional</sup> <a name="readReplicasModeInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.readReplicasModeInput"></a>

```typescript
public readonly readReplicasModeInput: string;
```

- *Type:* string

---

##### `redisConfigsInput`<sup>Optional</sup> <a name="redisConfigsInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.redisConfigsInput"></a>

```typescript
public readonly redisConfigsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `redisVersionInput`<sup>Optional</sup> <a name="redisVersionInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.redisVersionInput"></a>

```typescript
public readonly redisVersionInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `replicaCountInput`<sup>Optional</sup> <a name="replicaCountInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.replicaCountInput"></a>

```typescript
public readonly replicaCountInput: number;
```

- *Type:* number

---

##### `reservedIpRangeInput`<sup>Optional</sup> <a name="reservedIpRangeInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.reservedIpRangeInput"></a>

```typescript
public readonly reservedIpRangeInput: string;
```

- *Type:* string

---

##### `secondaryIpRangeInput`<sup>Optional</sup> <a name="secondaryIpRangeInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.secondaryIpRangeInput"></a>

```typescript
public readonly secondaryIpRangeInput: string;
```

- *Type:* string

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.tierInput"></a>

```typescript
public readonly tierInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | RedisInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeouts">RedisInstanceTimeouts</a>

---

##### `transitEncryptionModeInput`<sup>Optional</sup> <a name="transitEncryptionModeInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.transitEncryptionModeInput"></a>

```typescript
public readonly transitEncryptionModeInput: string;
```

- *Type:* string

---

##### `alternativeLocationId`<sup>Required</sup> <a name="alternativeLocationId" id="@cdktf/provider-google.redisInstance.RedisInstance.property.alternativeLocationId"></a>

```typescript
public readonly alternativeLocationId: string;
```

- *Type:* string

---

##### `authEnabled`<sup>Required</sup> <a name="authEnabled" id="@cdktf/provider-google.redisInstance.RedisInstance.property.authEnabled"></a>

```typescript
public readonly authEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `authorizedNetwork`<sup>Required</sup> <a name="authorizedNetwork" id="@cdktf/provider-google.redisInstance.RedisInstance.property.authorizedNetwork"></a>

```typescript
public readonly authorizedNetwork: string;
```

- *Type:* string

---

##### `connectMode`<sup>Required</sup> <a name="connectMode" id="@cdktf/provider-google.redisInstance.RedisInstance.property.connectMode"></a>

```typescript
public readonly connectMode: string;
```

- *Type:* string

---

##### `customerManagedKey`<sup>Required</sup> <a name="customerManagedKey" id="@cdktf/provider-google.redisInstance.RedisInstance.property.customerManagedKey"></a>

```typescript
public readonly customerManagedKey: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.redisInstance.RedisInstance.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.redisInstance.RedisInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.redisInstance.RedisInstance.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationId`<sup>Required</sup> <a name="locationId" id="@cdktf/provider-google.redisInstance.RedisInstance.property.locationId"></a>

```typescript
public readonly locationId: string;
```

- *Type:* string

---

##### `memorySizeGb`<sup>Required</sup> <a name="memorySizeGb" id="@cdktf/provider-google.redisInstance.RedisInstance.property.memorySizeGb"></a>

```typescript
public readonly memorySizeGb: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.redisInstance.RedisInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.redisInstance.RedisInstance.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `readReplicasMode`<sup>Required</sup> <a name="readReplicasMode" id="@cdktf/provider-google.redisInstance.RedisInstance.property.readReplicasMode"></a>

```typescript
public readonly readReplicasMode: string;
```

- *Type:* string

---

##### `redisConfigs`<sup>Required</sup> <a name="redisConfigs" id="@cdktf/provider-google.redisInstance.RedisInstance.property.redisConfigs"></a>

```typescript
public readonly redisConfigs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `redisVersion`<sup>Required</sup> <a name="redisVersion" id="@cdktf/provider-google.redisInstance.RedisInstance.property.redisVersion"></a>

```typescript
public readonly redisVersion: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.redisInstance.RedisInstance.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `replicaCount`<sup>Required</sup> <a name="replicaCount" id="@cdktf/provider-google.redisInstance.RedisInstance.property.replicaCount"></a>

```typescript
public readonly replicaCount: number;
```

- *Type:* number

---

##### `reservedIpRange`<sup>Required</sup> <a name="reservedIpRange" id="@cdktf/provider-google.redisInstance.RedisInstance.property.reservedIpRange"></a>

```typescript
public readonly reservedIpRange: string;
```

- *Type:* string

---

##### `secondaryIpRange`<sup>Required</sup> <a name="secondaryIpRange" id="@cdktf/provider-google.redisInstance.RedisInstance.property.secondaryIpRange"></a>

```typescript
public readonly secondaryIpRange: string;
```

- *Type:* string

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google.redisInstance.RedisInstance.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

##### `transitEncryptionMode`<sup>Required</sup> <a name="transitEncryptionMode" id="@cdktf/provider-google.redisInstance.RedisInstance.property.transitEncryptionMode"></a>

```typescript
public readonly transitEncryptionMode: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.redisInstance.RedisInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedisInstanceConfig <a name="RedisInstanceConfig" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.Initializer"></a>

```typescript
import { redisInstance } from '@cdktf/provider-google'

const redisInstanceConfig: redisInstance.RedisInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.memorySizeGb">memorySizeGb</a></code> | <code>number</code> | Redis memory size in GiB. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.name">name</a></code> | <code>string</code> | The ID of the instance or a fully qualified identifier for the instance. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.alternativeLocationId">alternativeLocationId</a></code> | <code>string</code> | Only applicable to STANDARD_HA tier which protects the instance against zonal failures by provisioning it across two zones. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.authEnabled">authEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.authorizedNetwork">authorizedNetwork</a></code> | <code>string</code> | The full name of the Google Compute Engine network to which the instance is connected. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.connectMode">connectMode</a></code> | <code>string</code> | The connection mode of the Redis instance. Default value: "DIRECT_PEERING" Possible values: ["DIRECT_PEERING", "PRIVATE_SERVICE_ACCESS"]. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.customerManagedKey">customerManagedKey</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.displayName">displayName</a></code> | <code>string</code> | An arbitrary and optional user-provided name for the instance. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#id RedisInstance#id}. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.locationId">locationId</a></code> | <code>string</code> | The zone where the instance will be provisioned. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy">RedisInstanceMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.persistenceConfig">persistenceConfig</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig">RedisInstancePersistenceConfig</a></code> | persistence_config block. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#project RedisInstance#project}. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.readReplicasMode">readReplicasMode</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.redisConfigs">redisConfigs</a></code> | <code>{[ key: string ]: string}</code> | Redis configuration parameters, according to http://redis.io/topics/config. Please check Memorystore documentation for the list of supported parameters: https://cloud.google.com/memorystore/docs/redis/reference/rest/v1/projects.locations.instances#Instance.FIELDS.redis_configs. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.redisVersion">redisVersion</a></code> | <code>string</code> | The version of Redis software. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.region">region</a></code> | <code>string</code> | The name of the Redis region of the instance. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.replicaCount">replicaCount</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.reservedIpRange">reservedIpRange</a></code> | <code>string</code> | The CIDR range of internal addresses that are reserved for this instance. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.secondaryIpRange">secondaryIpRange</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.tier">tier</a></code> | <code>string</code> | The service tier of the instance. Must be one of these values:. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeouts">RedisInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.transitEncryptionMode">transitEncryptionMode</a></code> | <code>string</code> | The TLS mode of the Redis instance, If not provided, TLS is disabled for the instance. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `memorySizeGb`<sup>Required</sup> <a name="memorySizeGb" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.memorySizeGb"></a>

```typescript
public readonly memorySizeGb: number;
```

- *Type:* number

Redis memory size in GiB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#memory_size_gb RedisInstance#memory_size_gb}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The ID of the instance or a fully qualified identifier for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#name RedisInstance#name}

---

##### `alternativeLocationId`<sup>Optional</sup> <a name="alternativeLocationId" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.alternativeLocationId"></a>

```typescript
public readonly alternativeLocationId: string;
```

- *Type:* string

Only applicable to STANDARD_HA tier which protects the instance against zonal failures by provisioning it across two zones.

If provided, it must be a different zone from the one provided in
[locationId].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#alternative_location_id RedisInstance#alternative_location_id}

---

##### `authEnabled`<sup>Optional</sup> <a name="authEnabled" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.authEnabled"></a>

```typescript
public readonly authEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional.

Indicates whether OSS Redis AUTH is enabled for the
instance. If set to "true" AUTH is enabled on the instance.
Default value is "false" meaning AUTH is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#auth_enabled RedisInstance#auth_enabled}

---

##### `authorizedNetwork`<sup>Optional</sup> <a name="authorizedNetwork" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.authorizedNetwork"></a>

```typescript
public readonly authorizedNetwork: string;
```

- *Type:* string

The full name of the Google Compute Engine network to which the instance is connected.

If left unspecified, the default network
will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#authorized_network RedisInstance#authorized_network}

---

##### `connectMode`<sup>Optional</sup> <a name="connectMode" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.connectMode"></a>

```typescript
public readonly connectMode: string;
```

- *Type:* string

The connection mode of the Redis instance. Default value: "DIRECT_PEERING" Possible values: ["DIRECT_PEERING", "PRIVATE_SERVICE_ACCESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#connect_mode RedisInstance#connect_mode}

---

##### `customerManagedKey`<sup>Optional</sup> <a name="customerManagedKey" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.customerManagedKey"></a>

```typescript
public readonly customerManagedKey: string;
```

- *Type:* string

Optional.

The KMS key reference that you want to use to encrypt the data at rest for this Redis
instance. If this is provided, CMEK is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#customer_managed_key RedisInstance#customer_managed_key}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

An arbitrary and optional user-provided name for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#display_name RedisInstance#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#id RedisInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#labels RedisInstance#labels}

---

##### `locationId`<sup>Optional</sup> <a name="locationId" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.locationId"></a>

```typescript
public readonly locationId: string;
```

- *Type:* string

The zone where the instance will be provisioned.

If not provided,
the service will choose a zone for the instance. For STANDARD_HA tier,
instances will be created across two zones for protection against
zonal failures. If [alternativeLocationId] is also provided, it must
be different from [locationId].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#location_id RedisInstance#location_id}

---

##### `maintenancePolicy`<sup>Optional</sup> <a name="maintenancePolicy" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.maintenancePolicy"></a>

```typescript
public readonly maintenancePolicy: RedisInstanceMaintenancePolicy;
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy">RedisInstanceMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#maintenance_policy RedisInstance#maintenance_policy}

---

##### `persistenceConfig`<sup>Optional</sup> <a name="persistenceConfig" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.persistenceConfig"></a>

```typescript
public readonly persistenceConfig: RedisInstancePersistenceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig">RedisInstancePersistenceConfig</a>

persistence_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#persistence_config RedisInstance#persistence_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#project RedisInstance#project}.

---

##### `readReplicasMode`<sup>Optional</sup> <a name="readReplicasMode" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.readReplicasMode"></a>

```typescript
public readonly readReplicasMode: string;
```

- *Type:* string

Optional.

Read replica mode. Can only be specified when trying to create the instance.
If not set, Memorystore Redis backend will default to READ_REPLICAS_DISABLED.
- READ_REPLICAS_DISABLED: If disabled, read endpoint will not be provided and the
instance cannot scale up or down the number of replicas.
- READ_REPLICAS_ENABLED: If enabled, read endpoint will be provided and the instance
can scale up and down the number of replicas. Possible values: ["READ_REPLICAS_DISABLED", "READ_REPLICAS_ENABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#read_replicas_mode RedisInstance#read_replicas_mode}

---

##### `redisConfigs`<sup>Optional</sup> <a name="redisConfigs" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.redisConfigs"></a>

```typescript
public readonly redisConfigs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Redis configuration parameters, according to http://redis.io/topics/config. Please check Memorystore documentation for the list of supported parameters: https://cloud.google.com/memorystore/docs/redis/reference/rest/v1/projects.locations.instances#Instance.FIELDS.redis_configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#redis_configs RedisInstance#redis_configs}

---

##### `redisVersion`<sup>Optional</sup> <a name="redisVersion" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.redisVersion"></a>

```typescript
public readonly redisVersion: string;
```

- *Type:* string

The version of Redis software.

If not provided, latest supported
version will be used. Please check the API documentation linked
at the top for the latest valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#redis_version RedisInstance#redis_version}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The name of the Redis region of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#region RedisInstance#region}

---

##### `replicaCount`<sup>Optional</sup> <a name="replicaCount" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.replicaCount"></a>

```typescript
public readonly replicaCount: number;
```

- *Type:* number

Optional.

The number of replica nodes. The valid range for the Standard Tier with
read replicas enabled is [1-5] and defaults to 2. If read replicas are not enabled
for a Standard Tier instance, the only valid value is 1 and the default is 1.
The valid value for basic tier is 0 and the default is also 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#replica_count RedisInstance#replica_count}

---

##### `reservedIpRange`<sup>Optional</sup> <a name="reservedIpRange" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.reservedIpRange"></a>

```typescript
public readonly reservedIpRange: string;
```

- *Type:* string

The CIDR range of internal addresses that are reserved for this instance.

If not provided, the service will choose an unused /29
block, for example, 10.0.0.0/29 or 192.168.0.0/29. Ranges must be
unique and non-overlapping with existing subnets in an authorized
network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#reserved_ip_range RedisInstance#reserved_ip_range}

---

##### `secondaryIpRange`<sup>Optional</sup> <a name="secondaryIpRange" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.secondaryIpRange"></a>

```typescript
public readonly secondaryIpRange: string;
```

- *Type:* string

Optional.

Additional IP range for node placement. Required when enabling read replicas on
an existing instance. For DIRECT_PEERING mode value must be a CIDR range of size /28, or
"auto". For PRIVATE_SERVICE_ACCESS mode value must be the name of an allocated address
range associated with the private service access connection, or "auto".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#secondary_ip_range RedisInstance#secondary_ip_range}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

The service tier of the instance. Must be one of these values:.

BASIC: standalone instance
- STANDARD_HA: highly available primary/replica instances Default value: "BASIC" Possible values: ["BASIC", "STANDARD_HA"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#tier RedisInstance#tier}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: RedisInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeouts">RedisInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#timeouts RedisInstance#timeouts}

---

##### `transitEncryptionMode`<sup>Optional</sup> <a name="transitEncryptionMode" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.transitEncryptionMode"></a>

```typescript
public readonly transitEncryptionMode: string;
```

- *Type:* string

The TLS mode of the Redis instance, If not provided, TLS is disabled for the instance.

SERVER_AUTHENTICATION: Client to Server traffic encryption enabled with server authentication Default value: "DISABLED" Possible values: ["SERVER_AUTHENTICATION", "DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#transit_encryption_mode RedisInstance#transit_encryption_mode}

---

### RedisInstanceMaintenancePolicy <a name="RedisInstanceMaintenancePolicy" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy.Initializer"></a>

```typescript
import { redisInstance } from '@cdktf/provider-google'

const redisInstanceMaintenancePolicy: redisInstance.RedisInstanceMaintenancePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy.property.description">description</a></code> | <code>string</code> | Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy.property.weeklyMaintenanceWindow">weeklyMaintenanceWindow</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]</code> | weekly_maintenance_window block. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#description RedisInstance#description}

---

##### `weeklyMaintenanceWindow`<sup>Optional</sup> <a name="weeklyMaintenanceWindow" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy.property.weeklyMaintenanceWindow"></a>

```typescript
public readonly weeklyMaintenanceWindow: IResolvable | RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]

weekly_maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#weekly_maintenance_window RedisInstance#weekly_maintenance_window}

---

### RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow <a name="RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow.Initializer"></a>

```typescript
import { redisInstance } from '@cdktf/provider-google'

const redisInstanceMaintenancePolicyWeeklyMaintenanceWindow: redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.day">day</a></code> | <code>string</code> | Required. The day of week that maintenance updates occur. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | start_time block. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

Required. The day of week that maintenance updates occur.

DAY_OF_WEEK_UNSPECIFIED: The day of the week is unspecified.
- MONDAY: Monday
- TUESDAY: Tuesday
- WEDNESDAY: Wednesday
- THURSDAY: Thursday
- FRIDAY: Friday
- SATURDAY: Saturday
- SUNDAY: Sunday Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#day RedisInstance#day}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.startTime"></a>

```typescript
public readonly startTime: RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#start_time RedisInstance#start_time}

---

### RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime <a name="RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.Initializer"></a>

```typescript
import { redisInstance } from '@cdktf/provider-google'

const redisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime: redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours">hours</a></code> | <code>number</code> | Hours of day in 24 hour format. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes">minutes</a></code> | <code>number</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos">nanos</a></code> | <code>number</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds">seconds</a></code> | <code>number</code> | Seconds of minutes of the time. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

Hours of day in 24 hour format.

Should be from 0 to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#hours RedisInstance#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#minutes RedisInstance#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#nanos RedisInstance#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

Seconds of minutes of the time.

Must normally be from 0 to 59.
An API may allow the value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#seconds RedisInstance#seconds}

---

### RedisInstanceMaintenanceSchedule <a name="RedisInstanceMaintenanceSchedule" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceSchedule.Initializer"></a>

```typescript
import { redisInstance } from '@cdktf/provider-google'

const redisInstanceMaintenanceSchedule: redisInstance.RedisInstanceMaintenanceSchedule = { ... }
```


### RedisInstanceNodes <a name="RedisInstanceNodes" id="@cdktf/provider-google.redisInstance.RedisInstanceNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisInstance.RedisInstanceNodes.Initializer"></a>

```typescript
import { redisInstance } from '@cdktf/provider-google'

const redisInstanceNodes: redisInstance.RedisInstanceNodes = { ... }
```


### RedisInstancePersistenceConfig <a name="RedisInstancePersistenceConfig" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig.Initializer"></a>

```typescript
import { redisInstance } from '@cdktf/provider-google'

const redisInstancePersistenceConfig: redisInstance.RedisInstancePersistenceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig.property.persistenceMode">persistenceMode</a></code> | <code>string</code> | Optional. Controls whether Persistence features are enabled. If not provided, the existing value will be used. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig.property.rdbSnapshotPeriod">rdbSnapshotPeriod</a></code> | <code>string</code> | Optional. Available snapshot periods for scheduling. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig.property.rdbSnapshotStartTime">rdbSnapshotStartTime</a></code> | <code>string</code> | Optional. |

---

##### `persistenceMode`<sup>Optional</sup> <a name="persistenceMode" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig.property.persistenceMode"></a>

```typescript
public readonly persistenceMode: string;
```

- *Type:* string

Optional. Controls whether Persistence features are enabled. If not provided, the existing value will be used.

DISABLED: 	Persistence is disabled for the instance, and any existing snapshots are deleted.
- RDB: RDB based Persistence is enabled. Possible values: ["DISABLED", "RDB"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#persistence_mode RedisInstance#persistence_mode}

---

##### `rdbSnapshotPeriod`<sup>Optional</sup> <a name="rdbSnapshotPeriod" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig.property.rdbSnapshotPeriod"></a>

```typescript
public readonly rdbSnapshotPeriod: string;
```

- *Type:* string

Optional. Available snapshot periods for scheduling.

ONE_HOUR:	Snapshot every 1 hour.
- SIX_HOURS:	Snapshot every 6 hours.
- TWELVE_HOURS:	Snapshot every 12 hours.
- TWENTY_FOUR_HOURS:	Snapshot every 24 hours. Possible values: ["ONE_HOUR", "SIX_HOURS", "TWELVE_HOURS", "TWENTY_FOUR_HOURS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#rdb_snapshot_period RedisInstance#rdb_snapshot_period}

---

##### `rdbSnapshotStartTime`<sup>Optional</sup> <a name="rdbSnapshotStartTime" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig.property.rdbSnapshotStartTime"></a>

```typescript
public readonly rdbSnapshotStartTime: string;
```

- *Type:* string

Optional.

Date and time that the first snapshot was/will be attempted,
and to which future snapshots will be aligned. If not provided,
the current time will be used.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution
and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#rdb_snapshot_start_time RedisInstance#rdb_snapshot_start_time}

---

### RedisInstanceServerCaCerts <a name="RedisInstanceServerCaCerts" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCerts.Initializer"></a>

```typescript
import { redisInstance } from '@cdktf/provider-google'

const redisInstanceServerCaCerts: redisInstance.RedisInstanceServerCaCerts = { ... }
```


### RedisInstanceTimeouts <a name="RedisInstanceTimeouts" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeouts.Initializer"></a>

```typescript
import { redisInstance } from '@cdktf/provider-google'

const redisInstanceTimeouts: redisInstance.RedisInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#create RedisInstance#create}. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#delete RedisInstance#delete}. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#update RedisInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#create RedisInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#delete RedisInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/redis_instance#update RedisInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedisInstanceMaintenancePolicyOutputReference <a name="RedisInstanceMaintenancePolicyOutputReference" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.Initializer"></a>

```typescript
import { redisInstance } from '@cdktf/provider-google'

new redisInstance.RedisInstanceMaintenancePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow">putWeeklyMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.resetWeeklyMaintenanceWindow">resetWeeklyMaintenanceWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWeeklyMaintenanceWindow` <a name="putWeeklyMaintenanceWindow" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow"></a>

```typescript
public putWeeklyMaintenanceWindow(value: IResolvable | RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetWeeklyMaintenanceWindow` <a name="resetWeeklyMaintenanceWindow" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.resetWeeklyMaintenanceWindow"></a>

```typescript
public resetWeeklyMaintenanceWindow(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow">weeklyMaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput">weeklyMaintenanceWindowInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy">RedisInstanceMaintenancePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `weeklyMaintenanceWindow`<sup>Required</sup> <a name="weeklyMaintenanceWindow" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow"></a>

```typescript
public readonly weeklyMaintenanceWindow: RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList;
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `weeklyMaintenanceWindowInput`<sup>Optional</sup> <a name="weeklyMaintenanceWindowInput" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput"></a>

```typescript
public readonly weeklyMaintenanceWindowInput: IResolvable | RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RedisInstanceMaintenancePolicy;
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy">RedisInstanceMaintenancePolicy</a>

---


### RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList <a name="RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer"></a>

```typescript
import { redisInstance } from '@cdktf/provider-google'

new redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get"></a>

```typescript
public get(index: number): RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]

---


### RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference <a name="RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { redisInstance } from '@cdktf/provider-google'

new redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime">putStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStartTime` <a name="putStartTime" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime"></a>

```typescript
public putStartTime(value: RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput">dayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput">startTimeInput</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day">day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime"></a>

```typescript
public readonly startTime: RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a>

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>

---


### RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference <a name="RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer"></a>

```typescript
import { redisInstance } from '@cdktf/provider-google'

new redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetHours"></a>

```typescript
public resetHours(): void
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetMinutes"></a>

```typescript
public resetMinutes(): void
```

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetSeconds"></a>

```typescript
public resetSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput"></a>

```typescript
public readonly hoursInput: number;
```

- *Type:* number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput"></a>

```typescript
public readonly minutesInput: number;
```

- *Type:* number

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: number;
```

- *Type:* number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


### RedisInstanceMaintenanceScheduleList <a name="RedisInstanceMaintenanceScheduleList" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.Initializer"></a>

```typescript
import { redisInstance } from '@cdktf/provider-google'

new redisInstance.RedisInstanceMaintenanceScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.get"></a>

```typescript
public get(index: number): RedisInstanceMaintenanceScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### RedisInstanceMaintenanceScheduleOutputReference <a name="RedisInstanceMaintenanceScheduleOutputReference" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.Initializer"></a>

```typescript
import { redisInstance } from '@cdktf/provider-google'

new redisInstance.RedisInstanceMaintenanceScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.scheduleDeadlineTime">scheduleDeadlineTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceSchedule">RedisInstanceMaintenanceSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `scheduleDeadlineTime`<sup>Required</sup> <a name="scheduleDeadlineTime" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.scheduleDeadlineTime"></a>

```typescript
public readonly scheduleDeadlineTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RedisInstanceMaintenanceSchedule;
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceSchedule">RedisInstanceMaintenanceSchedule</a>

---


### RedisInstanceNodesList <a name="RedisInstanceNodesList" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.Initializer"></a>

```typescript
import { redisInstance } from '@cdktf/provider-google'

new redisInstance.RedisInstanceNodesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.get"></a>

```typescript
public get(index: number): RedisInstanceNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### RedisInstanceNodesOutputReference <a name="RedisInstanceNodesOutputReference" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.Initializer"></a>

```typescript
import { redisInstance } from '@cdktf/provider-google'

new redisInstance.RedisInstanceNodesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodes">RedisInstanceNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RedisInstanceNodes;
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodes">RedisInstanceNodes</a>

---


### RedisInstancePersistenceConfigOutputReference <a name="RedisInstancePersistenceConfigOutputReference" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.Initializer"></a>

```typescript
import { redisInstance } from '@cdktf/provider-google'

new redisInstance.RedisInstancePersistenceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.resetPersistenceMode">resetPersistenceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.resetRdbSnapshotPeriod">resetRdbSnapshotPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.resetRdbSnapshotStartTime">resetRdbSnapshotStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPersistenceMode` <a name="resetPersistenceMode" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.resetPersistenceMode"></a>

```typescript
public resetPersistenceMode(): void
```

##### `resetRdbSnapshotPeriod` <a name="resetRdbSnapshotPeriod" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.resetRdbSnapshotPeriod"></a>

```typescript
public resetRdbSnapshotPeriod(): void
```

##### `resetRdbSnapshotStartTime` <a name="resetRdbSnapshotStartTime" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.resetRdbSnapshotStartTime"></a>

```typescript
public resetRdbSnapshotStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.rdbNextSnapshotTime">rdbNextSnapshotTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.persistenceModeInput">persistenceModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.rdbSnapshotPeriodInput">rdbSnapshotPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.rdbSnapshotStartTimeInput">rdbSnapshotStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.persistenceMode">persistenceMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.rdbSnapshotPeriod">rdbSnapshotPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.rdbSnapshotStartTime">rdbSnapshotStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig">RedisInstancePersistenceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rdbNextSnapshotTime`<sup>Required</sup> <a name="rdbNextSnapshotTime" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.rdbNextSnapshotTime"></a>

```typescript
public readonly rdbNextSnapshotTime: string;
```

- *Type:* string

---

##### `persistenceModeInput`<sup>Optional</sup> <a name="persistenceModeInput" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.persistenceModeInput"></a>

```typescript
public readonly persistenceModeInput: string;
```

- *Type:* string

---

##### `rdbSnapshotPeriodInput`<sup>Optional</sup> <a name="rdbSnapshotPeriodInput" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.rdbSnapshotPeriodInput"></a>

```typescript
public readonly rdbSnapshotPeriodInput: string;
```

- *Type:* string

---

##### `rdbSnapshotStartTimeInput`<sup>Optional</sup> <a name="rdbSnapshotStartTimeInput" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.rdbSnapshotStartTimeInput"></a>

```typescript
public readonly rdbSnapshotStartTimeInput: string;
```

- *Type:* string

---

##### `persistenceMode`<sup>Required</sup> <a name="persistenceMode" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.persistenceMode"></a>

```typescript
public readonly persistenceMode: string;
```

- *Type:* string

---

##### `rdbSnapshotPeriod`<sup>Required</sup> <a name="rdbSnapshotPeriod" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.rdbSnapshotPeriod"></a>

```typescript
public readonly rdbSnapshotPeriod: string;
```

- *Type:* string

---

##### `rdbSnapshotStartTime`<sup>Required</sup> <a name="rdbSnapshotStartTime" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.rdbSnapshotStartTime"></a>

```typescript
public readonly rdbSnapshotStartTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RedisInstancePersistenceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig">RedisInstancePersistenceConfig</a>

---


### RedisInstanceServerCaCertsList <a name="RedisInstanceServerCaCertsList" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.Initializer"></a>

```typescript
import { redisInstance } from '@cdktf/provider-google'

new redisInstance.RedisInstanceServerCaCertsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.get"></a>

```typescript
public get(index: number): RedisInstanceServerCaCertsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### RedisInstanceServerCaCertsOutputReference <a name="RedisInstanceServerCaCertsOutputReference" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.Initializer"></a>

```typescript
import { redisInstance } from '@cdktf/provider-google'

new redisInstance.RedisInstanceServerCaCertsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.cert">cert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.sha1Fingerprint">sha1Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCerts">RedisInstanceServerCaCerts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.cert"></a>

```typescript
public readonly cert: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `sha1Fingerprint`<sup>Required</sup> <a name="sha1Fingerprint" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.sha1Fingerprint"></a>

```typescript
public readonly sha1Fingerprint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RedisInstanceServerCaCerts;
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCerts">RedisInstanceServerCaCerts</a>

---


### RedisInstanceTimeoutsOutputReference <a name="RedisInstanceTimeoutsOutputReference" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { redisInstance } from '@cdktf/provider-google'

new redisInstance.RedisInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeouts">RedisInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedisInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeouts">RedisInstanceTimeouts</a>

---



