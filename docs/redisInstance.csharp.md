# `google_redis_instance`

Refer to the Terraform Registory for docs: [`google_redis_instance`](https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance).

# `redisInstance` Submodule <a name="`redisInstance` Submodule" id="@cdktf/provider-google.redisInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedisInstance <a name="RedisInstance" id="@cdktf/provider-google.redisInstance.RedisInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance google_redis_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RedisInstance(Construct Scope, string Id, RedisInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig">RedisInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.redisInstance.RedisInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.redisInstance.RedisInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.redisInstance.RedisInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig">RedisInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.putMaintenancePolicy">PutMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.putPersistenceConfig">PutPersistenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetAlternativeLocationId">ResetAlternativeLocationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetAuthEnabled">ResetAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetAuthorizedNetwork">ResetAuthorizedNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetConnectMode">ResetConnectMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetCustomerManagedKey">ResetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetLocationId">ResetLocationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetMaintenancePolicy">ResetMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetPersistenceConfig">ResetPersistenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetReadReplicasMode">ResetReadReplicasMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetRedisConfigs">ResetRedisConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetRedisVersion">ResetRedisVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetReplicaCount">ResetReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetReservedIpRange">ResetReservedIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetSecondaryIpRange">ResetSecondaryIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetTier">ResetTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetTransitEncryptionMode">ResetTransitEncryptionMode</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.redisInstance.RedisInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.redisInstance.RedisInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.redisInstance.RedisInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.redisInstance.RedisInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.redisInstance.RedisInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.redisInstance.RedisInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.redisInstance.RedisInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.redisInstance.RedisInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.redisInstance.RedisInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.redisInstance.RedisInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.redisInstance.RedisInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.redisInstance.RedisInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.redisInstance.RedisInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.redisInstance.RedisInstance.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.redisInstance.RedisInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.redisInstance.RedisInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.redisInstance.RedisInstance.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutMaintenancePolicy` <a name="PutMaintenancePolicy" id="@cdktf/provider-google.redisInstance.RedisInstance.putMaintenancePolicy"></a>

```csharp
private void PutMaintenancePolicy(RedisInstanceMaintenancePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.redisInstance.RedisInstance.putMaintenancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy">RedisInstanceMaintenancePolicy</a>

---

##### `PutPersistenceConfig` <a name="PutPersistenceConfig" id="@cdktf/provider-google.redisInstance.RedisInstance.putPersistenceConfig"></a>

```csharp
private void PutPersistenceConfig(RedisInstancePersistenceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.redisInstance.RedisInstance.putPersistenceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig">RedisInstancePersistenceConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.redisInstance.RedisInstance.putTimeouts"></a>

```csharp
private void PutTimeouts(RedisInstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.redisInstance.RedisInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeouts">RedisInstanceTimeouts</a>

---

##### `ResetAlternativeLocationId` <a name="ResetAlternativeLocationId" id="@cdktf/provider-google.redisInstance.RedisInstance.resetAlternativeLocationId"></a>

```csharp
private void ResetAlternativeLocationId()
```

##### `ResetAuthEnabled` <a name="ResetAuthEnabled" id="@cdktf/provider-google.redisInstance.RedisInstance.resetAuthEnabled"></a>

```csharp
private void ResetAuthEnabled()
```

##### `ResetAuthorizedNetwork` <a name="ResetAuthorizedNetwork" id="@cdktf/provider-google.redisInstance.RedisInstance.resetAuthorizedNetwork"></a>

```csharp
private void ResetAuthorizedNetwork()
```

##### `ResetConnectMode` <a name="ResetConnectMode" id="@cdktf/provider-google.redisInstance.RedisInstance.resetConnectMode"></a>

```csharp
private void ResetConnectMode()
```

##### `ResetCustomerManagedKey` <a name="ResetCustomerManagedKey" id="@cdktf/provider-google.redisInstance.RedisInstance.resetCustomerManagedKey"></a>

```csharp
private void ResetCustomerManagedKey()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.redisInstance.RedisInstance.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.redisInstance.RedisInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.redisInstance.RedisInstance.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocationId` <a name="ResetLocationId" id="@cdktf/provider-google.redisInstance.RedisInstance.resetLocationId"></a>

```csharp
private void ResetLocationId()
```

##### `ResetMaintenancePolicy` <a name="ResetMaintenancePolicy" id="@cdktf/provider-google.redisInstance.RedisInstance.resetMaintenancePolicy"></a>

```csharp
private void ResetMaintenancePolicy()
```

##### `ResetPersistenceConfig` <a name="ResetPersistenceConfig" id="@cdktf/provider-google.redisInstance.RedisInstance.resetPersistenceConfig"></a>

```csharp
private void ResetPersistenceConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.redisInstance.RedisInstance.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetReadReplicasMode` <a name="ResetReadReplicasMode" id="@cdktf/provider-google.redisInstance.RedisInstance.resetReadReplicasMode"></a>

```csharp
private void ResetReadReplicasMode()
```

##### `ResetRedisConfigs` <a name="ResetRedisConfigs" id="@cdktf/provider-google.redisInstance.RedisInstance.resetRedisConfigs"></a>

```csharp
private void ResetRedisConfigs()
```

##### `ResetRedisVersion` <a name="ResetRedisVersion" id="@cdktf/provider-google.redisInstance.RedisInstance.resetRedisVersion"></a>

```csharp
private void ResetRedisVersion()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.redisInstance.RedisInstance.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetReplicaCount` <a name="ResetReplicaCount" id="@cdktf/provider-google.redisInstance.RedisInstance.resetReplicaCount"></a>

```csharp
private void ResetReplicaCount()
```

##### `ResetReservedIpRange` <a name="ResetReservedIpRange" id="@cdktf/provider-google.redisInstance.RedisInstance.resetReservedIpRange"></a>

```csharp
private void ResetReservedIpRange()
```

##### `ResetSecondaryIpRange` <a name="ResetSecondaryIpRange" id="@cdktf/provider-google.redisInstance.RedisInstance.resetSecondaryIpRange"></a>

```csharp
private void ResetSecondaryIpRange()
```

##### `ResetTier` <a name="ResetTier" id="@cdktf/provider-google.redisInstance.RedisInstance.resetTier"></a>

```csharp
private void ResetTier()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.redisInstance.RedisInstance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTransitEncryptionMode` <a name="ResetTransitEncryptionMode" id="@cdktf/provider-google.redisInstance.RedisInstance.resetTransitEncryptionMode"></a>

```csharp
private void ResetTransitEncryptionMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RedisInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.redisInstance.RedisInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

RedisInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.redisInstance.RedisInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.redisInstance.RedisInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

RedisInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.redisInstance.RedisInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.redisInstance.RedisInstance.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

RedisInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.redisInstance.RedisInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.redisInstance.RedisInstance.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

RedisInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a RedisInstance resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.redisInstance.RedisInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.redisInstance.RedisInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RedisInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.redisInstance.RedisInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RedisInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.redisInstance.RedisInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the RedisInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.authString">AuthString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.currentLocationId">CurrentLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.maintenancePolicy">MaintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference">RedisInstanceMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.maintenanceSchedule">MaintenanceSchedule</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList">RedisInstanceMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.nodes">Nodes</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesList">RedisInstanceNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.persistenceConfig">PersistenceConfig</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference">RedisInstancePersistenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.persistenceIamIdentity">PersistenceIamIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.readEndpoint">ReadEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.readEndpointPort">ReadEndpointPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.serverCaCerts">ServerCaCerts</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList">RedisInstanceServerCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference">RedisInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.alternativeLocationIdInput">AlternativeLocationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.authEnabledInput">AuthEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.authorizedNetworkInput">AuthorizedNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.connectModeInput">ConnectModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.customerManagedKeyInput">CustomerManagedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.locationIdInput">LocationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.maintenancePolicyInput">MaintenancePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy">RedisInstanceMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.memorySizeGbInput">MemorySizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.persistenceConfigInput">PersistenceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig">RedisInstancePersistenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.readReplicasModeInput">ReadReplicasModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.redisConfigsInput">RedisConfigsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.redisVersionInput">RedisVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.replicaCountInput">ReplicaCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.reservedIpRangeInput">ReservedIpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.secondaryIpRangeInput">SecondaryIpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.tierInput">TierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.transitEncryptionModeInput">TransitEncryptionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.alternativeLocationId">AlternativeLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.authEnabled">AuthEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.authorizedNetwork">AuthorizedNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.connectMode">ConnectMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.customerManagedKey">CustomerManagedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.locationId">LocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.memorySizeGb">MemorySizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.readReplicasMode">ReadReplicasMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.redisConfigs">RedisConfigs</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.redisVersion">RedisVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.replicaCount">ReplicaCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.reservedIpRange">ReservedIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.secondaryIpRange">SecondaryIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.tier">Tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.transitEncryptionMode">TransitEncryptionMode</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.redisInstance.RedisInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.redisInstance.RedisInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.redisInstance.RedisInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.redisInstance.RedisInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.redisInstance.RedisInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.redisInstance.RedisInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.redisInstance.RedisInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.redisInstance.RedisInstance.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.redisInstance.RedisInstance.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.redisInstance.RedisInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.redisInstance.RedisInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.redisInstance.RedisInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.redisInstance.RedisInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.redisInstance.RedisInstance.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AuthString`<sup>Required</sup> <a name="AuthString" id="@cdktf/provider-google.redisInstance.RedisInstance.property.authString"></a>

```csharp
public string AuthString { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.redisInstance.RedisInstance.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `CurrentLocationId`<sup>Required</sup> <a name="CurrentLocationId" id="@cdktf/provider-google.redisInstance.RedisInstance.property.currentLocationId"></a>

```csharp
public string CurrentLocationId { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.redisInstance.RedisInstance.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.redisInstance.RedisInstance.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `MaintenancePolicy`<sup>Required</sup> <a name="MaintenancePolicy" id="@cdktf/provider-google.redisInstance.RedisInstance.property.maintenancePolicy"></a>

```csharp
public RedisInstanceMaintenancePolicyOutputReference MaintenancePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference">RedisInstanceMaintenancePolicyOutputReference</a>

---

##### `MaintenanceSchedule`<sup>Required</sup> <a name="MaintenanceSchedule" id="@cdktf/provider-google.redisInstance.RedisInstance.property.maintenanceSchedule"></a>

```csharp
public RedisInstanceMaintenanceScheduleList MaintenanceSchedule { get; }
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList">RedisInstanceMaintenanceScheduleList</a>

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="@cdktf/provider-google.redisInstance.RedisInstance.property.nodes"></a>

```csharp
public RedisInstanceNodesList Nodes { get; }
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesList">RedisInstanceNodesList</a>

---

##### `PersistenceConfig`<sup>Required</sup> <a name="PersistenceConfig" id="@cdktf/provider-google.redisInstance.RedisInstance.property.persistenceConfig"></a>

```csharp
public RedisInstancePersistenceConfigOutputReference PersistenceConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference">RedisInstancePersistenceConfigOutputReference</a>

---

##### `PersistenceIamIdentity`<sup>Required</sup> <a name="PersistenceIamIdentity" id="@cdktf/provider-google.redisInstance.RedisInstance.property.persistenceIamIdentity"></a>

```csharp
public string PersistenceIamIdentity { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.redisInstance.RedisInstance.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `ReadEndpoint`<sup>Required</sup> <a name="ReadEndpoint" id="@cdktf/provider-google.redisInstance.RedisInstance.property.readEndpoint"></a>

```csharp
public string ReadEndpoint { get; }
```

- *Type:* string

---

##### `ReadEndpointPort`<sup>Required</sup> <a name="ReadEndpointPort" id="@cdktf/provider-google.redisInstance.RedisInstance.property.readEndpointPort"></a>

```csharp
public double ReadEndpointPort { get; }
```

- *Type:* double

---

##### `ServerCaCerts`<sup>Required</sup> <a name="ServerCaCerts" id="@cdktf/provider-google.redisInstance.RedisInstance.property.serverCaCerts"></a>

```csharp
public RedisInstanceServerCaCertsList ServerCaCerts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList">RedisInstanceServerCaCertsList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.redisInstance.RedisInstance.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.redisInstance.RedisInstance.property.timeouts"></a>

```csharp
public RedisInstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference">RedisInstanceTimeoutsOutputReference</a>

---

##### `AlternativeLocationIdInput`<sup>Optional</sup> <a name="AlternativeLocationIdInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.alternativeLocationIdInput"></a>

```csharp
public string AlternativeLocationIdInput { get; }
```

- *Type:* string

---

##### `AuthEnabledInput`<sup>Optional</sup> <a name="AuthEnabledInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.authEnabledInput"></a>

```csharp
public object AuthEnabledInput { get; }
```

- *Type:* object

---

##### `AuthorizedNetworkInput`<sup>Optional</sup> <a name="AuthorizedNetworkInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.authorizedNetworkInput"></a>

```csharp
public string AuthorizedNetworkInput { get; }
```

- *Type:* string

---

##### `ConnectModeInput`<sup>Optional</sup> <a name="ConnectModeInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.connectModeInput"></a>

```csharp
public string ConnectModeInput { get; }
```

- *Type:* string

---

##### `CustomerManagedKeyInput`<sup>Optional</sup> <a name="CustomerManagedKeyInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.customerManagedKeyInput"></a>

```csharp
public string CustomerManagedKeyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationIdInput`<sup>Optional</sup> <a name="LocationIdInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.locationIdInput"></a>

```csharp
public string LocationIdInput { get; }
```

- *Type:* string

---

##### `MaintenancePolicyInput`<sup>Optional</sup> <a name="MaintenancePolicyInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.maintenancePolicyInput"></a>

```csharp
public RedisInstanceMaintenancePolicy MaintenancePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy">RedisInstanceMaintenancePolicy</a>

---

##### `MemorySizeGbInput`<sup>Optional</sup> <a name="MemorySizeGbInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.memorySizeGbInput"></a>

```csharp
public double MemorySizeGbInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PersistenceConfigInput`<sup>Optional</sup> <a name="PersistenceConfigInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.persistenceConfigInput"></a>

```csharp
public RedisInstancePersistenceConfig PersistenceConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig">RedisInstancePersistenceConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ReadReplicasModeInput`<sup>Optional</sup> <a name="ReadReplicasModeInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.readReplicasModeInput"></a>

```csharp
public string ReadReplicasModeInput { get; }
```

- *Type:* string

---

##### `RedisConfigsInput`<sup>Optional</sup> <a name="RedisConfigsInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.redisConfigsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RedisConfigsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RedisVersionInput`<sup>Optional</sup> <a name="RedisVersionInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.redisVersionInput"></a>

```csharp
public string RedisVersionInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ReplicaCountInput`<sup>Optional</sup> <a name="ReplicaCountInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.replicaCountInput"></a>

```csharp
public double ReplicaCountInput { get; }
```

- *Type:* double

---

##### `ReservedIpRangeInput`<sup>Optional</sup> <a name="ReservedIpRangeInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.reservedIpRangeInput"></a>

```csharp
public string ReservedIpRangeInput { get; }
```

- *Type:* string

---

##### `SecondaryIpRangeInput`<sup>Optional</sup> <a name="SecondaryIpRangeInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.secondaryIpRangeInput"></a>

```csharp
public string SecondaryIpRangeInput { get; }
```

- *Type:* string

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.tierInput"></a>

```csharp
public string TierInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TransitEncryptionModeInput`<sup>Optional</sup> <a name="TransitEncryptionModeInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.transitEncryptionModeInput"></a>

```csharp
public string TransitEncryptionModeInput { get; }
```

- *Type:* string

---

##### `AlternativeLocationId`<sup>Required</sup> <a name="AlternativeLocationId" id="@cdktf/provider-google.redisInstance.RedisInstance.property.alternativeLocationId"></a>

```csharp
public string AlternativeLocationId { get; }
```

- *Type:* string

---

##### `AuthEnabled`<sup>Required</sup> <a name="AuthEnabled" id="@cdktf/provider-google.redisInstance.RedisInstance.property.authEnabled"></a>

```csharp
public object AuthEnabled { get; }
```

- *Type:* object

---

##### `AuthorizedNetwork`<sup>Required</sup> <a name="AuthorizedNetwork" id="@cdktf/provider-google.redisInstance.RedisInstance.property.authorizedNetwork"></a>

```csharp
public string AuthorizedNetwork { get; }
```

- *Type:* string

---

##### `ConnectMode`<sup>Required</sup> <a name="ConnectMode" id="@cdktf/provider-google.redisInstance.RedisInstance.property.connectMode"></a>

```csharp
public string ConnectMode { get; }
```

- *Type:* string

---

##### `CustomerManagedKey`<sup>Required</sup> <a name="CustomerManagedKey" id="@cdktf/provider-google.redisInstance.RedisInstance.property.customerManagedKey"></a>

```csharp
public string CustomerManagedKey { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.redisInstance.RedisInstance.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.redisInstance.RedisInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.redisInstance.RedisInstance.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationId`<sup>Required</sup> <a name="LocationId" id="@cdktf/provider-google.redisInstance.RedisInstance.property.locationId"></a>

```csharp
public string LocationId { get; }
```

- *Type:* string

---

##### `MemorySizeGb`<sup>Required</sup> <a name="MemorySizeGb" id="@cdktf/provider-google.redisInstance.RedisInstance.property.memorySizeGb"></a>

```csharp
public double MemorySizeGb { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.redisInstance.RedisInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.redisInstance.RedisInstance.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ReadReplicasMode`<sup>Required</sup> <a name="ReadReplicasMode" id="@cdktf/provider-google.redisInstance.RedisInstance.property.readReplicasMode"></a>

```csharp
public string ReadReplicasMode { get; }
```

- *Type:* string

---

##### `RedisConfigs`<sup>Required</sup> <a name="RedisConfigs" id="@cdktf/provider-google.redisInstance.RedisInstance.property.redisConfigs"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RedisConfigs { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RedisVersion`<sup>Required</sup> <a name="RedisVersion" id="@cdktf/provider-google.redisInstance.RedisInstance.property.redisVersion"></a>

```csharp
public string RedisVersion { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.redisInstance.RedisInstance.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ReplicaCount`<sup>Required</sup> <a name="ReplicaCount" id="@cdktf/provider-google.redisInstance.RedisInstance.property.replicaCount"></a>

```csharp
public double ReplicaCount { get; }
```

- *Type:* double

---

##### `ReservedIpRange`<sup>Required</sup> <a name="ReservedIpRange" id="@cdktf/provider-google.redisInstance.RedisInstance.property.reservedIpRange"></a>

```csharp
public string ReservedIpRange { get; }
```

- *Type:* string

---

##### `SecondaryIpRange`<sup>Required</sup> <a name="SecondaryIpRange" id="@cdktf/provider-google.redisInstance.RedisInstance.property.secondaryIpRange"></a>

```csharp
public string SecondaryIpRange { get; }
```

- *Type:* string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-google.redisInstance.RedisInstance.property.tier"></a>

```csharp
public string Tier { get; }
```

- *Type:* string

---

##### `TransitEncryptionMode`<sup>Required</sup> <a name="TransitEncryptionMode" id="@cdktf/provider-google.redisInstance.RedisInstance.property.transitEncryptionMode"></a>

```csharp
public string TransitEncryptionMode { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.redisInstance.RedisInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedisInstanceConfig <a name="RedisInstanceConfig" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RedisInstanceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double MemorySizeGb,
    string Name,
    string AlternativeLocationId = null,
    object AuthEnabled = null,
    string AuthorizedNetwork = null,
    string ConnectMode = null,
    string CustomerManagedKey = null,
    string DisplayName = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string LocationId = null,
    RedisInstanceMaintenancePolicy MaintenancePolicy = null,
    RedisInstancePersistenceConfig PersistenceConfig = null,
    string Project = null,
    string ReadReplicasMode = null,
    System.Collections.Generic.IDictionary<string, string> RedisConfigs = null,
    string RedisVersion = null,
    string Region = null,
    double ReplicaCount = null,
    string ReservedIpRange = null,
    string SecondaryIpRange = null,
    string Tier = null,
    RedisInstanceTimeouts Timeouts = null,
    string TransitEncryptionMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.memorySizeGb">MemorySizeGb</a></code> | <code>double</code> | Redis memory size in GiB. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.name">Name</a></code> | <code>string</code> | The ID of the instance or a fully qualified identifier for the instance. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.alternativeLocationId">AlternativeLocationId</a></code> | <code>string</code> | Only applicable to STANDARD_HA tier which protects the instance against zonal failures by provisioning it across two zones. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.authEnabled">AuthEnabled</a></code> | <code>object</code> | Optional. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.authorizedNetwork">AuthorizedNetwork</a></code> | <code>string</code> | The full name of the Google Compute Engine network to which the instance is connected. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.connectMode">ConnectMode</a></code> | <code>string</code> | The connection mode of the Redis instance. Default value: "DIRECT_PEERING" Possible values: ["DIRECT_PEERING", "PRIVATE_SERVICE_ACCESS"]. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.customerManagedKey">CustomerManagedKey</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.displayName">DisplayName</a></code> | <code>string</code> | An arbitrary and optional user-provided name for the instance. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#id RedisInstance#id}. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.locationId">LocationId</a></code> | <code>string</code> | The zone where the instance will be provisioned. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.maintenancePolicy">MaintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy">RedisInstanceMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.persistenceConfig">PersistenceConfig</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig">RedisInstancePersistenceConfig</a></code> | persistence_config block. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#project RedisInstance#project}. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.readReplicasMode">ReadReplicasMode</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.redisConfigs">RedisConfigs</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Redis configuration parameters, according to http://redis.io/topics/config. Please check Memorystore documentation for the list of supported parameters: https://cloud.google.com/memorystore/docs/redis/reference/rest/v1/projects.locations.instances#Instance.FIELDS.redis_configs. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.redisVersion">RedisVersion</a></code> | <code>string</code> | The version of Redis software. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.region">Region</a></code> | <code>string</code> | The name of the Redis region of the instance. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.replicaCount">ReplicaCount</a></code> | <code>double</code> | Optional. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.reservedIpRange">ReservedIpRange</a></code> | <code>string</code> | The CIDR range of internal addresses that are reserved for this instance. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.secondaryIpRange">SecondaryIpRange</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.tier">Tier</a></code> | <code>string</code> | The service tier of the instance. Must be one of these values:. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeouts">RedisInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.transitEncryptionMode">TransitEncryptionMode</a></code> | <code>string</code> | The TLS mode of the Redis instance, If not provided, TLS is disabled for the instance. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MemorySizeGb`<sup>Required</sup> <a name="MemorySizeGb" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.memorySizeGb"></a>

```csharp
public double MemorySizeGb { get; set; }
```

- *Type:* double

Redis memory size in GiB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#memory_size_gb RedisInstance#memory_size_gb}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The ID of the instance or a fully qualified identifier for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#name RedisInstance#name}

---

##### `AlternativeLocationId`<sup>Optional</sup> <a name="AlternativeLocationId" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.alternativeLocationId"></a>

```csharp
public string AlternativeLocationId { get; set; }
```

- *Type:* string

Only applicable to STANDARD_HA tier which protects the instance against zonal failures by provisioning it across two zones.

If provided, it must be a different zone from the one provided in
[locationId].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#alternative_location_id RedisInstance#alternative_location_id}

---

##### `AuthEnabled`<sup>Optional</sup> <a name="AuthEnabled" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.authEnabled"></a>

```csharp
public object AuthEnabled { get; set; }
```

- *Type:* object

Optional.

Indicates whether OSS Redis AUTH is enabled for the
instance. If set to "true" AUTH is enabled on the instance.
Default value is "false" meaning AUTH is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#auth_enabled RedisInstance#auth_enabled}

---

##### `AuthorizedNetwork`<sup>Optional</sup> <a name="AuthorizedNetwork" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.authorizedNetwork"></a>

```csharp
public string AuthorizedNetwork { get; set; }
```

- *Type:* string

The full name of the Google Compute Engine network to which the instance is connected.

If left unspecified, the default network
will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#authorized_network RedisInstance#authorized_network}

---

##### `ConnectMode`<sup>Optional</sup> <a name="ConnectMode" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.connectMode"></a>

```csharp
public string ConnectMode { get; set; }
```

- *Type:* string

The connection mode of the Redis instance. Default value: "DIRECT_PEERING" Possible values: ["DIRECT_PEERING", "PRIVATE_SERVICE_ACCESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#connect_mode RedisInstance#connect_mode}

---

##### `CustomerManagedKey`<sup>Optional</sup> <a name="CustomerManagedKey" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.customerManagedKey"></a>

```csharp
public string CustomerManagedKey { get; set; }
```

- *Type:* string

Optional.

The KMS key reference that you want to use to encrypt the data at rest for this Redis
instance. If this is provided, CMEK is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#customer_managed_key RedisInstance#customer_managed_key}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

An arbitrary and optional user-provided name for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#display_name RedisInstance#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#id RedisInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#labels RedisInstance#labels}

---

##### `LocationId`<sup>Optional</sup> <a name="LocationId" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.locationId"></a>

```csharp
public string LocationId { get; set; }
```

- *Type:* string

The zone where the instance will be provisioned.

If not provided,
the service will choose a zone for the instance. For STANDARD_HA tier,
instances will be created across two zones for protection against
zonal failures. If [alternativeLocationId] is also provided, it must
be different from [locationId].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#location_id RedisInstance#location_id}

---

##### `MaintenancePolicy`<sup>Optional</sup> <a name="MaintenancePolicy" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.maintenancePolicy"></a>

```csharp
public RedisInstanceMaintenancePolicy MaintenancePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy">RedisInstanceMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#maintenance_policy RedisInstance#maintenance_policy}

---

##### `PersistenceConfig`<sup>Optional</sup> <a name="PersistenceConfig" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.persistenceConfig"></a>

```csharp
public RedisInstancePersistenceConfig PersistenceConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig">RedisInstancePersistenceConfig</a>

persistence_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#persistence_config RedisInstance#persistence_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#project RedisInstance#project}.

---

##### `ReadReplicasMode`<sup>Optional</sup> <a name="ReadReplicasMode" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.readReplicasMode"></a>

```csharp
public string ReadReplicasMode { get; set; }
```

- *Type:* string

Optional.

Read replica mode. Can only be specified when trying to create the instance.
If not set, Memorystore Redis backend will default to READ_REPLICAS_DISABLED.

* READ_REPLICAS_DISABLED: If disabled, read endpoint will not be provided and the
  instance cannot scale up or down the number of replicas.
* READ_REPLICAS_ENABLED: If enabled, read endpoint will be provided and the instance
  can scale up and down the number of replicas. Possible values: ["READ_REPLICAS_DISABLED", "READ_REPLICAS_ENABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#read_replicas_mode RedisInstance#read_replicas_mode}

---

##### `RedisConfigs`<sup>Optional</sup> <a name="RedisConfigs" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.redisConfigs"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RedisConfigs { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Redis configuration parameters, according to http://redis.io/topics/config. Please check Memorystore documentation for the list of supported parameters: https://cloud.google.com/memorystore/docs/redis/reference/rest/v1/projects.locations.instances#Instance.FIELDS.redis_configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#redis_configs RedisInstance#redis_configs}

---

##### `RedisVersion`<sup>Optional</sup> <a name="RedisVersion" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.redisVersion"></a>

```csharp
public string RedisVersion { get; set; }
```

- *Type:* string

The version of Redis software.

If not provided, latest supported
version will be used. Please check the API documentation linked
at the top for the latest valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#redis_version RedisInstance#redis_version}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The name of the Redis region of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#region RedisInstance#region}

---

##### `ReplicaCount`<sup>Optional</sup> <a name="ReplicaCount" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.replicaCount"></a>

```csharp
public double ReplicaCount { get; set; }
```

- *Type:* double

Optional.

The number of replica nodes. The valid range for the Standard Tier with
read replicas enabled is [1-5] and defaults to 2. If read replicas are not enabled
for a Standard Tier instance, the only valid value is 1 and the default is 1.
The valid value for basic tier is 0 and the default is also 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#replica_count RedisInstance#replica_count}

---

##### `ReservedIpRange`<sup>Optional</sup> <a name="ReservedIpRange" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.reservedIpRange"></a>

```csharp
public string ReservedIpRange { get; set; }
```

- *Type:* string

The CIDR range of internal addresses that are reserved for this instance.

If not provided, the service will choose an unused /29
block, for example, 10.0.0.0/29 or 192.168.0.0/29. Ranges must be
unique and non-overlapping with existing subnets in an authorized
network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#reserved_ip_range RedisInstance#reserved_ip_range}

---

##### `SecondaryIpRange`<sup>Optional</sup> <a name="SecondaryIpRange" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.secondaryIpRange"></a>

```csharp
public string SecondaryIpRange { get; set; }
```

- *Type:* string

Optional.

Additional IP range for node placement. Required when enabling read replicas on
an existing instance. For DIRECT_PEERING mode value must be a CIDR range of size /28, or
"auto". For PRIVATE_SERVICE_ACCESS mode value must be the name of an allocated address
range associated with the private service access connection, or "auto".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#secondary_ip_range RedisInstance#secondary_ip_range}

---

##### `Tier`<sup>Optional</sup> <a name="Tier" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.tier"></a>

```csharp
public string Tier { get; set; }
```

- *Type:* string

The service tier of the instance. Must be one of these values:.

* BASIC: standalone instance
* STANDARD_HA: highly available primary/replica instances Default value: "BASIC" Possible values: ["BASIC", "STANDARD_HA"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#tier RedisInstance#tier}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.timeouts"></a>

```csharp
public RedisInstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeouts">RedisInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#timeouts RedisInstance#timeouts}

---

##### `TransitEncryptionMode`<sup>Optional</sup> <a name="TransitEncryptionMode" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.transitEncryptionMode"></a>

```csharp
public string TransitEncryptionMode { get; set; }
```

- *Type:* string

The TLS mode of the Redis instance, If not provided, TLS is disabled for the instance.

* SERVER_AUTHENTICATION: Client to Server traffic encryption enabled with server authentication Default value: "DISABLED" Possible values: ["SERVER_AUTHENTICATION", "DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#transit_encryption_mode RedisInstance#transit_encryption_mode}

---

### RedisInstanceMaintenancePolicy <a name="RedisInstanceMaintenancePolicy" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RedisInstanceMaintenancePolicy {
    string Description = null,
    object WeeklyMaintenanceWindow = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy.property.description">Description</a></code> | <code>string</code> | Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy.property.weeklyMaintenanceWindow">WeeklyMaintenanceWindow</a></code> | <code>object</code> | weekly_maintenance_window block. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#description RedisInstance#description}

---

##### `WeeklyMaintenanceWindow`<sup>Optional</sup> <a name="WeeklyMaintenanceWindow" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy.property.weeklyMaintenanceWindow"></a>

```csharp
public object WeeklyMaintenanceWindow { get; set; }
```

- *Type:* object

weekly_maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#weekly_maintenance_window RedisInstance#weekly_maintenance_window}

---

### RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow <a name="RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow {
    string Day,
    RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime StartTime
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.day">Day</a></code> | <code>string</code> | Required. The day of week that maintenance updates occur. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.startTime">StartTime</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | start_time block. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.day"></a>

```csharp
public string Day { get; set; }
```

- *Type:* string

Required. The day of week that maintenance updates occur.

* DAY_OF_WEEK_UNSPECIFIED: The day of the week is unspecified.
* MONDAY: Monday
* TUESDAY: Tuesday
* WEDNESDAY: Wednesday
* THURSDAY: Thursday
* FRIDAY: Friday
* SATURDAY: Saturday
* SUNDAY: Sunday Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#day RedisInstance#day}

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.startTime"></a>

```csharp
public RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime StartTime { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#start_time RedisInstance#start_time}

---

### RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime <a name="RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime {
    double Hours = null,
    double Minutes = null,
    double Nanos = null,
    double Seconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours">Hours</a></code> | <code>double</code> | Hours of day in 24 hour format. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes">Minutes</a></code> | <code>double</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos">Nanos</a></code> | <code>double</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds">Seconds</a></code> | <code>double</code> | Seconds of minutes of the time. |

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours"></a>

```csharp
public double Hours { get; set; }
```

- *Type:* double

Hours of day in 24 hour format.

Should be from 0 to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#hours RedisInstance#hours}

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes"></a>

```csharp
public double Minutes { get; set; }
```

- *Type:* double

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#minutes RedisInstance#minutes}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos"></a>

```csharp
public double Nanos { get; set; }
```

- *Type:* double

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#nanos RedisInstance#nanos}

---

##### `Seconds`<sup>Optional</sup> <a name="Seconds" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds"></a>

```csharp
public double Seconds { get; set; }
```

- *Type:* double

Seconds of minutes of the time.

Must normally be from 0 to 59.
An API may allow the value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#seconds RedisInstance#seconds}

---

### RedisInstanceMaintenanceSchedule <a name="RedisInstanceMaintenanceSchedule" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RedisInstanceMaintenanceSchedule {

};
```


### RedisInstanceNodes <a name="RedisInstanceNodes" id="@cdktf/provider-google.redisInstance.RedisInstanceNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisInstance.RedisInstanceNodes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RedisInstanceNodes {

};
```


### RedisInstancePersistenceConfig <a name="RedisInstancePersistenceConfig" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RedisInstancePersistenceConfig {
    string PersistenceMode = null,
    string RdbSnapshotPeriod = null,
    string RdbSnapshotStartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig.property.persistenceMode">PersistenceMode</a></code> | <code>string</code> | Optional. Controls whether Persistence features are enabled. If not provided, the existing value will be used. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig.property.rdbSnapshotPeriod">RdbSnapshotPeriod</a></code> | <code>string</code> | Optional. Available snapshot periods for scheduling. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig.property.rdbSnapshotStartTime">RdbSnapshotStartTime</a></code> | <code>string</code> | Optional. |

---

##### `PersistenceMode`<sup>Optional</sup> <a name="PersistenceMode" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig.property.persistenceMode"></a>

```csharp
public string PersistenceMode { get; set; }
```

- *Type:* string

Optional. Controls whether Persistence features are enabled. If not provided, the existing value will be used.

* DISABLED: 	Persistence is disabled for the instance, and any existing snapshots are deleted.
* RDB: RDB based Persistence is enabled. Possible values: ["DISABLED", "RDB"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#persistence_mode RedisInstance#persistence_mode}

---

##### `RdbSnapshotPeriod`<sup>Optional</sup> <a name="RdbSnapshotPeriod" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig.property.rdbSnapshotPeriod"></a>

```csharp
public string RdbSnapshotPeriod { get; set; }
```

- *Type:* string

Optional. Available snapshot periods for scheduling.

* ONE_HOUR:	Snapshot every 1 hour.
* SIX_HOURS:	Snapshot every 6 hours.
* TWELVE_HOURS:	Snapshot every 12 hours.
* TWENTY_FOUR_HOURS:	Snapshot every 24 hours. Possible values: ["ONE_HOUR", "SIX_HOURS", "TWELVE_HOURS", "TWENTY_FOUR_HOURS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#rdb_snapshot_period RedisInstance#rdb_snapshot_period}

---

##### `RdbSnapshotStartTime`<sup>Optional</sup> <a name="RdbSnapshotStartTime" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig.property.rdbSnapshotStartTime"></a>

```csharp
public string RdbSnapshotStartTime { get; set; }
```

- *Type:* string

Optional.

Date and time that the first snapshot was/will be attempted,
and to which future snapshots will be aligned. If not provided,
the current time will be used.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution
and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#rdb_snapshot_start_time RedisInstance#rdb_snapshot_start_time}

---

### RedisInstanceServerCaCerts <a name="RedisInstanceServerCaCerts" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCerts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RedisInstanceServerCaCerts {

};
```


### RedisInstanceTimeouts <a name="RedisInstanceTimeouts" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RedisInstanceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#create RedisInstance#create}. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#delete RedisInstance#delete}. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#update RedisInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#create RedisInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#delete RedisInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/redis_instance#update RedisInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedisInstanceMaintenancePolicyOutputReference <a name="RedisInstanceMaintenancePolicyOutputReference" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RedisInstanceMaintenancePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow">PutWeeklyMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.resetWeeklyMaintenanceWindow">ResetWeeklyMaintenanceWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWeeklyMaintenanceWindow` <a name="PutWeeklyMaintenanceWindow" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow"></a>

```csharp
private void PutWeeklyMaintenanceWindow(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow.parameter.value"></a>

- *Type:* object

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetWeeklyMaintenanceWindow` <a name="ResetWeeklyMaintenanceWindow" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.resetWeeklyMaintenanceWindow"></a>

```csharp
private void ResetWeeklyMaintenanceWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow">WeeklyMaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput">WeeklyMaintenanceWindowInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy">RedisInstanceMaintenancePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `WeeklyMaintenanceWindow`<sup>Required</sup> <a name="WeeklyMaintenanceWindow" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow"></a>

```csharp
public RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList WeeklyMaintenanceWindow { get; }
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `WeeklyMaintenanceWindowInput`<sup>Optional</sup> <a name="WeeklyMaintenanceWindowInput" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput"></a>

```csharp
public object WeeklyMaintenanceWindowInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.internalValue"></a>

```csharp
public RedisInstanceMaintenancePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy">RedisInstanceMaintenancePolicy</a>

---


### RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList <a name="RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get"></a>

```csharp
private RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference <a name="RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime">PutStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStartTime` <a name="PutStartTime" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime"></a>

```csharp
private void PutStartTime(RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput">DayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day">Day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime"></a>

```csharp
public RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference StartTime { get; }
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a>

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput"></a>

```csharp
public string DayInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput"></a>

```csharp
public RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime StartTimeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day"></a>

```csharp
public string Day { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference <a name="RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetHours">ResetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetSeconds">ResetSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHours` <a name="ResetHours" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetHours"></a>

```csharp
private void ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetMinutes"></a>

```csharp
private void ResetMinutes()
```

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetNanos"></a>

```csharp
private void ResetNanos()
```

##### `ResetSeconds` <a name="ResetSeconds" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetSeconds"></a>

```csharp
private void ResetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput">NanosInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput">SecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput"></a>

```csharp
public double HoursInput { get; }
```

- *Type:* double

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput"></a>

```csharp
public double MinutesInput { get; }
```

- *Type:* double

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput"></a>

```csharp
public double NanosInput { get; }
```

- *Type:* double

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput"></a>

```csharp
public double SecondsInput { get; }
```

- *Type:* double

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue"></a>

```csharp
public RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


### RedisInstanceMaintenanceScheduleList <a name="RedisInstanceMaintenanceScheduleList" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RedisInstanceMaintenanceScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.get"></a>

```csharp
private RedisInstanceMaintenanceScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### RedisInstanceMaintenanceScheduleOutputReference <a name="RedisInstanceMaintenanceScheduleOutputReference" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RedisInstanceMaintenanceScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.scheduleDeadlineTime">ScheduleDeadlineTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceSchedule">RedisInstanceMaintenanceSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `ScheduleDeadlineTime`<sup>Required</sup> <a name="ScheduleDeadlineTime" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.scheduleDeadlineTime"></a>

```csharp
public string ScheduleDeadlineTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.internalValue"></a>

```csharp
public RedisInstanceMaintenanceSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceSchedule">RedisInstanceMaintenanceSchedule</a>

---


### RedisInstanceNodesList <a name="RedisInstanceNodesList" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RedisInstanceNodesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.get"></a>

```csharp
private RedisInstanceNodesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### RedisInstanceNodesOutputReference <a name="RedisInstanceNodesOutputReference" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RedisInstanceNodesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.property.zone">Zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodes">RedisInstanceNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.property.internalValue"></a>

```csharp
public RedisInstanceNodes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodes">RedisInstanceNodes</a>

---


### RedisInstancePersistenceConfigOutputReference <a name="RedisInstancePersistenceConfigOutputReference" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RedisInstancePersistenceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.resetPersistenceMode">ResetPersistenceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.resetRdbSnapshotPeriod">ResetRdbSnapshotPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.resetRdbSnapshotStartTime">ResetRdbSnapshotStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPersistenceMode` <a name="ResetPersistenceMode" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.resetPersistenceMode"></a>

```csharp
private void ResetPersistenceMode()
```

##### `ResetRdbSnapshotPeriod` <a name="ResetRdbSnapshotPeriod" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.resetRdbSnapshotPeriod"></a>

```csharp
private void ResetRdbSnapshotPeriod()
```

##### `ResetRdbSnapshotStartTime` <a name="ResetRdbSnapshotStartTime" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.resetRdbSnapshotStartTime"></a>

```csharp
private void ResetRdbSnapshotStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.rdbNextSnapshotTime">RdbNextSnapshotTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.persistenceModeInput">PersistenceModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.rdbSnapshotPeriodInput">RdbSnapshotPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.rdbSnapshotStartTimeInput">RdbSnapshotStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.persistenceMode">PersistenceMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.rdbSnapshotPeriod">RdbSnapshotPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.rdbSnapshotStartTime">RdbSnapshotStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig">RedisInstancePersistenceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RdbNextSnapshotTime`<sup>Required</sup> <a name="RdbNextSnapshotTime" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.rdbNextSnapshotTime"></a>

```csharp
public string RdbNextSnapshotTime { get; }
```

- *Type:* string

---

##### `PersistenceModeInput`<sup>Optional</sup> <a name="PersistenceModeInput" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.persistenceModeInput"></a>

```csharp
public string PersistenceModeInput { get; }
```

- *Type:* string

---

##### `RdbSnapshotPeriodInput`<sup>Optional</sup> <a name="RdbSnapshotPeriodInput" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.rdbSnapshotPeriodInput"></a>

```csharp
public string RdbSnapshotPeriodInput { get; }
```

- *Type:* string

---

##### `RdbSnapshotStartTimeInput`<sup>Optional</sup> <a name="RdbSnapshotStartTimeInput" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.rdbSnapshotStartTimeInput"></a>

```csharp
public string RdbSnapshotStartTimeInput { get; }
```

- *Type:* string

---

##### `PersistenceMode`<sup>Required</sup> <a name="PersistenceMode" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.persistenceMode"></a>

```csharp
public string PersistenceMode { get; }
```

- *Type:* string

---

##### `RdbSnapshotPeriod`<sup>Required</sup> <a name="RdbSnapshotPeriod" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.rdbSnapshotPeriod"></a>

```csharp
public string RdbSnapshotPeriod { get; }
```

- *Type:* string

---

##### `RdbSnapshotStartTime`<sup>Required</sup> <a name="RdbSnapshotStartTime" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.rdbSnapshotStartTime"></a>

```csharp
public string RdbSnapshotStartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.internalValue"></a>

```csharp
public RedisInstancePersistenceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig">RedisInstancePersistenceConfig</a>

---


### RedisInstanceServerCaCertsList <a name="RedisInstanceServerCaCertsList" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RedisInstanceServerCaCertsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.get"></a>

```csharp
private RedisInstanceServerCaCertsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### RedisInstanceServerCaCertsOutputReference <a name="RedisInstanceServerCaCertsOutputReference" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RedisInstanceServerCaCertsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.cert">Cert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.expireTime">ExpireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.serialNumber">SerialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.sha1Fingerprint">Sha1Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCerts">RedisInstanceServerCaCerts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.cert"></a>

```csharp
public string Cert { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.expireTime"></a>

```csharp
public string ExpireTime { get; }
```

- *Type:* string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.serialNumber"></a>

```csharp
public string SerialNumber { get; }
```

- *Type:* string

---

##### `Sha1Fingerprint`<sup>Required</sup> <a name="Sha1Fingerprint" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.sha1Fingerprint"></a>

```csharp
public string Sha1Fingerprint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.internalValue"></a>

```csharp
public RedisInstanceServerCaCerts InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCerts">RedisInstanceServerCaCerts</a>

---


### RedisInstanceTimeoutsOutputReference <a name="RedisInstanceTimeoutsOutputReference" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new RedisInstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



