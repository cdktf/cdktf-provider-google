# `redisInstance` Submodule <a name="`redisInstance` Submodule" id="@cdktf/provider-google.redisInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedisInstance <a name="RedisInstance" id="@cdktf/provider-google.redisInstance.RedisInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/redis_instance google_redis_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/redisinstance"

redisinstance.NewRedisInstance(scope Construct, id *string, config RedisInstanceConfig) RedisInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig">RedisInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.redisInstance.RedisInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.redisInstance.RedisInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.redisInstance.RedisInstance.Initializer.parameter.config"></a>

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
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.putMaintenancePolicy">PutMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.putMaintenanceSchedule">PutMaintenanceSchedule</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.resetMaintenanceSchedule">ResetMaintenanceSchedule</a></code> | *No description.* |
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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.redisInstance.RedisInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.redisInstance.RedisInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisInstance.RedisInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.redisInstance.RedisInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.redisInstance.RedisInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.redisInstance.RedisInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.redisInstance.RedisInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.redisInstance.RedisInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutMaintenancePolicy` <a name="PutMaintenancePolicy" id="@cdktf/provider-google.redisInstance.RedisInstance.putMaintenancePolicy"></a>

```go
func PutMaintenancePolicy(value RedisInstanceMaintenancePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisInstance.RedisInstance.putMaintenancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy">RedisInstanceMaintenancePolicy</a>

---

##### `PutMaintenanceSchedule` <a name="PutMaintenanceSchedule" id="@cdktf/provider-google.redisInstance.RedisInstance.putMaintenanceSchedule"></a>

```go
func PutMaintenanceSchedule(value RedisInstanceMaintenanceSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisInstance.RedisInstance.putMaintenanceSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceSchedule">RedisInstanceMaintenanceSchedule</a>

---

##### `PutPersistenceConfig` <a name="PutPersistenceConfig" id="@cdktf/provider-google.redisInstance.RedisInstance.putPersistenceConfig"></a>

```go
func PutPersistenceConfig(value RedisInstancePersistenceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisInstance.RedisInstance.putPersistenceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig">RedisInstancePersistenceConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.redisInstance.RedisInstance.putTimeouts"></a>

```go
func PutTimeouts(value RedisInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisInstance.RedisInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeouts">RedisInstanceTimeouts</a>

---

##### `ResetAlternativeLocationId` <a name="ResetAlternativeLocationId" id="@cdktf/provider-google.redisInstance.RedisInstance.resetAlternativeLocationId"></a>

```go
func ResetAlternativeLocationId()
```

##### `ResetAuthEnabled` <a name="ResetAuthEnabled" id="@cdktf/provider-google.redisInstance.RedisInstance.resetAuthEnabled"></a>

```go
func ResetAuthEnabled()
```

##### `ResetAuthorizedNetwork` <a name="ResetAuthorizedNetwork" id="@cdktf/provider-google.redisInstance.RedisInstance.resetAuthorizedNetwork"></a>

```go
func ResetAuthorizedNetwork()
```

##### `ResetConnectMode` <a name="ResetConnectMode" id="@cdktf/provider-google.redisInstance.RedisInstance.resetConnectMode"></a>

```go
func ResetConnectMode()
```

##### `ResetCustomerManagedKey` <a name="ResetCustomerManagedKey" id="@cdktf/provider-google.redisInstance.RedisInstance.resetCustomerManagedKey"></a>

```go
func ResetCustomerManagedKey()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.redisInstance.RedisInstance.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.redisInstance.RedisInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.redisInstance.RedisInstance.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocationId` <a name="ResetLocationId" id="@cdktf/provider-google.redisInstance.RedisInstance.resetLocationId"></a>

```go
func ResetLocationId()
```

##### `ResetMaintenancePolicy` <a name="ResetMaintenancePolicy" id="@cdktf/provider-google.redisInstance.RedisInstance.resetMaintenancePolicy"></a>

```go
func ResetMaintenancePolicy()
```

##### `ResetMaintenanceSchedule` <a name="ResetMaintenanceSchedule" id="@cdktf/provider-google.redisInstance.RedisInstance.resetMaintenanceSchedule"></a>

```go
func ResetMaintenanceSchedule()
```

##### `ResetPersistenceConfig` <a name="ResetPersistenceConfig" id="@cdktf/provider-google.redisInstance.RedisInstance.resetPersistenceConfig"></a>

```go
func ResetPersistenceConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.redisInstance.RedisInstance.resetProject"></a>

```go
func ResetProject()
```

##### `ResetReadReplicasMode` <a name="ResetReadReplicasMode" id="@cdktf/provider-google.redisInstance.RedisInstance.resetReadReplicasMode"></a>

```go
func ResetReadReplicasMode()
```

##### `ResetRedisConfigs` <a name="ResetRedisConfigs" id="@cdktf/provider-google.redisInstance.RedisInstance.resetRedisConfigs"></a>

```go
func ResetRedisConfigs()
```

##### `ResetRedisVersion` <a name="ResetRedisVersion" id="@cdktf/provider-google.redisInstance.RedisInstance.resetRedisVersion"></a>

```go
func ResetRedisVersion()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.redisInstance.RedisInstance.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetReplicaCount` <a name="ResetReplicaCount" id="@cdktf/provider-google.redisInstance.RedisInstance.resetReplicaCount"></a>

```go
func ResetReplicaCount()
```

##### `ResetReservedIpRange` <a name="ResetReservedIpRange" id="@cdktf/provider-google.redisInstance.RedisInstance.resetReservedIpRange"></a>

```go
func ResetReservedIpRange()
```

##### `ResetSecondaryIpRange` <a name="ResetSecondaryIpRange" id="@cdktf/provider-google.redisInstance.RedisInstance.resetSecondaryIpRange"></a>

```go
func ResetSecondaryIpRange()
```

##### `ResetTier` <a name="ResetTier" id="@cdktf/provider-google.redisInstance.RedisInstance.resetTier"></a>

```go
func ResetTier()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.redisInstance.RedisInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTransitEncryptionMode` <a name="ResetTransitEncryptionMode" id="@cdktf/provider-google.redisInstance.RedisInstance.resetTransitEncryptionMode"></a>

```go
func ResetTransitEncryptionMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.redisInstance.RedisInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/redisinstance"

redisinstance.RedisInstance_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.redisInstance.RedisInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/redisinstance"

redisinstance.RedisInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.redisInstance.RedisInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.redisInstance.RedisInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/redisinstance"

redisinstance.RedisInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.redisInstance.RedisInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.authString">AuthString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.currentLocationId">CurrentLocationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.maintenancePolicy">MaintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference">RedisInstanceMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.maintenanceSchedule">MaintenanceSchedule</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference">RedisInstanceMaintenanceScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.nodes">Nodes</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesList">RedisInstanceNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.persistenceConfig">PersistenceConfig</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference">RedisInstancePersistenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.persistenceIamIdentity">PersistenceIamIdentity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.readEndpoint">ReadEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.readEndpointPort">ReadEndpointPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.serverCaCerts">ServerCaCerts</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList">RedisInstanceServerCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference">RedisInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.alternativeLocationIdInput">AlternativeLocationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.authEnabledInput">AuthEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.authorizedNetworkInput">AuthorizedNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.connectModeInput">ConnectModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.customerManagedKeyInput">CustomerManagedKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.locationIdInput">LocationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.maintenancePolicyInput">MaintenancePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy">RedisInstanceMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.maintenanceScheduleInput">MaintenanceScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceSchedule">RedisInstanceMaintenanceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.memorySizeGbInput">MemorySizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.persistenceConfigInput">PersistenceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig">RedisInstancePersistenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.readReplicasModeInput">ReadReplicasModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.redisConfigsInput">RedisConfigsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.redisVersionInput">RedisVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.replicaCountInput">ReplicaCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.reservedIpRangeInput">ReservedIpRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.secondaryIpRangeInput">SecondaryIpRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.tierInput">TierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.transitEncryptionModeInput">TransitEncryptionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.alternativeLocationId">AlternativeLocationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.authEnabled">AuthEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.authorizedNetwork">AuthorizedNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.connectMode">ConnectMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.customerManagedKey">CustomerManagedKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.locationId">LocationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.memorySizeGb">MemorySizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.readReplicasMode">ReadReplicasMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.redisConfigs">RedisConfigs</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.redisVersion">RedisVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.replicaCount">ReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.reservedIpRange">ReservedIpRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.secondaryIpRange">SecondaryIpRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.transitEncryptionMode">TransitEncryptionMode</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.redisInstance.RedisInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.redisInstance.RedisInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.redisInstance.RedisInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.redisInstance.RedisInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.redisInstance.RedisInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.redisInstance.RedisInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.redisInstance.RedisInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.redisInstance.RedisInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.redisInstance.RedisInstance.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.redisInstance.RedisInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.redisInstance.RedisInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.redisInstance.RedisInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.redisInstance.RedisInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.redisInstance.RedisInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthString`<sup>Required</sup> <a name="AuthString" id="@cdktf/provider-google.redisInstance.RedisInstance.property.authString"></a>

```go
func AuthString() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.redisInstance.RedisInstance.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `CurrentLocationId`<sup>Required</sup> <a name="CurrentLocationId" id="@cdktf/provider-google.redisInstance.RedisInstance.property.currentLocationId"></a>

```go
func CurrentLocationId() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.redisInstance.RedisInstance.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `MaintenancePolicy`<sup>Required</sup> <a name="MaintenancePolicy" id="@cdktf/provider-google.redisInstance.RedisInstance.property.maintenancePolicy"></a>

```go
func MaintenancePolicy() RedisInstanceMaintenancePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference">RedisInstanceMaintenancePolicyOutputReference</a>

---

##### `MaintenanceSchedule`<sup>Required</sup> <a name="MaintenanceSchedule" id="@cdktf/provider-google.redisInstance.RedisInstance.property.maintenanceSchedule"></a>

```go
func MaintenanceSchedule() RedisInstanceMaintenanceScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference">RedisInstanceMaintenanceScheduleOutputReference</a>

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="@cdktf/provider-google.redisInstance.RedisInstance.property.nodes"></a>

```go
func Nodes() RedisInstanceNodesList
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesList">RedisInstanceNodesList</a>

---

##### `PersistenceConfig`<sup>Required</sup> <a name="PersistenceConfig" id="@cdktf/provider-google.redisInstance.RedisInstance.property.persistenceConfig"></a>

```go
func PersistenceConfig() RedisInstancePersistenceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference">RedisInstancePersistenceConfigOutputReference</a>

---

##### `PersistenceIamIdentity`<sup>Required</sup> <a name="PersistenceIamIdentity" id="@cdktf/provider-google.redisInstance.RedisInstance.property.persistenceIamIdentity"></a>

```go
func PersistenceIamIdentity() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.redisInstance.RedisInstance.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ReadEndpoint`<sup>Required</sup> <a name="ReadEndpoint" id="@cdktf/provider-google.redisInstance.RedisInstance.property.readEndpoint"></a>

```go
func ReadEndpoint() *string
```

- *Type:* *string

---

##### `ReadEndpointPort`<sup>Required</sup> <a name="ReadEndpointPort" id="@cdktf/provider-google.redisInstance.RedisInstance.property.readEndpointPort"></a>

```go
func ReadEndpointPort() *f64
```

- *Type:* *f64

---

##### `ServerCaCerts`<sup>Required</sup> <a name="ServerCaCerts" id="@cdktf/provider-google.redisInstance.RedisInstance.property.serverCaCerts"></a>

```go
func ServerCaCerts() RedisInstanceServerCaCertsList
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList">RedisInstanceServerCaCertsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.redisInstance.RedisInstance.property.timeouts"></a>

```go
func Timeouts() RedisInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference">RedisInstanceTimeoutsOutputReference</a>

---

##### `AlternativeLocationIdInput`<sup>Optional</sup> <a name="AlternativeLocationIdInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.alternativeLocationIdInput"></a>

```go
func AlternativeLocationIdInput() *string
```

- *Type:* *string

---

##### `AuthEnabledInput`<sup>Optional</sup> <a name="AuthEnabledInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.authEnabledInput"></a>

```go
func AuthEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AuthorizedNetworkInput`<sup>Optional</sup> <a name="AuthorizedNetworkInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.authorizedNetworkInput"></a>

```go
func AuthorizedNetworkInput() *string
```

- *Type:* *string

---

##### `ConnectModeInput`<sup>Optional</sup> <a name="ConnectModeInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.connectModeInput"></a>

```go
func ConnectModeInput() *string
```

- *Type:* *string

---

##### `CustomerManagedKeyInput`<sup>Optional</sup> <a name="CustomerManagedKeyInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.customerManagedKeyInput"></a>

```go
func CustomerManagedKeyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationIdInput`<sup>Optional</sup> <a name="LocationIdInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.locationIdInput"></a>

```go
func LocationIdInput() *string
```

- *Type:* *string

---

##### `MaintenancePolicyInput`<sup>Optional</sup> <a name="MaintenancePolicyInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.maintenancePolicyInput"></a>

```go
func MaintenancePolicyInput() RedisInstanceMaintenancePolicy
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy">RedisInstanceMaintenancePolicy</a>

---

##### `MaintenanceScheduleInput`<sup>Optional</sup> <a name="MaintenanceScheduleInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.maintenanceScheduleInput"></a>

```go
func MaintenanceScheduleInput() RedisInstanceMaintenanceSchedule
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceSchedule">RedisInstanceMaintenanceSchedule</a>

---

##### `MemorySizeGbInput`<sup>Optional</sup> <a name="MemorySizeGbInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.memorySizeGbInput"></a>

```go
func MemorySizeGbInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PersistenceConfigInput`<sup>Optional</sup> <a name="PersistenceConfigInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.persistenceConfigInput"></a>

```go
func PersistenceConfigInput() RedisInstancePersistenceConfig
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig">RedisInstancePersistenceConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ReadReplicasModeInput`<sup>Optional</sup> <a name="ReadReplicasModeInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.readReplicasModeInput"></a>

```go
func ReadReplicasModeInput() *string
```

- *Type:* *string

---

##### `RedisConfigsInput`<sup>Optional</sup> <a name="RedisConfigsInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.redisConfigsInput"></a>

```go
func RedisConfigsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RedisVersionInput`<sup>Optional</sup> <a name="RedisVersionInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.redisVersionInput"></a>

```go
func RedisVersionInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ReplicaCountInput`<sup>Optional</sup> <a name="ReplicaCountInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.replicaCountInput"></a>

```go
func ReplicaCountInput() *f64
```

- *Type:* *f64

---

##### `ReservedIpRangeInput`<sup>Optional</sup> <a name="ReservedIpRangeInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.reservedIpRangeInput"></a>

```go
func ReservedIpRangeInput() *string
```

- *Type:* *string

---

##### `SecondaryIpRangeInput`<sup>Optional</sup> <a name="SecondaryIpRangeInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.secondaryIpRangeInput"></a>

```go
func SecondaryIpRangeInput() *string
```

- *Type:* *string

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.tierInput"></a>

```go
func TierInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TransitEncryptionModeInput`<sup>Optional</sup> <a name="TransitEncryptionModeInput" id="@cdktf/provider-google.redisInstance.RedisInstance.property.transitEncryptionModeInput"></a>

```go
func TransitEncryptionModeInput() *string
```

- *Type:* *string

---

##### `AlternativeLocationId`<sup>Required</sup> <a name="AlternativeLocationId" id="@cdktf/provider-google.redisInstance.RedisInstance.property.alternativeLocationId"></a>

```go
func AlternativeLocationId() *string
```

- *Type:* *string

---

##### `AuthEnabled`<sup>Required</sup> <a name="AuthEnabled" id="@cdktf/provider-google.redisInstance.RedisInstance.property.authEnabled"></a>

```go
func AuthEnabled() interface{}
```

- *Type:* interface{}

---

##### `AuthorizedNetwork`<sup>Required</sup> <a name="AuthorizedNetwork" id="@cdktf/provider-google.redisInstance.RedisInstance.property.authorizedNetwork"></a>

```go
func AuthorizedNetwork() *string
```

- *Type:* *string

---

##### `ConnectMode`<sup>Required</sup> <a name="ConnectMode" id="@cdktf/provider-google.redisInstance.RedisInstance.property.connectMode"></a>

```go
func ConnectMode() *string
```

- *Type:* *string

---

##### `CustomerManagedKey`<sup>Required</sup> <a name="CustomerManagedKey" id="@cdktf/provider-google.redisInstance.RedisInstance.property.customerManagedKey"></a>

```go
func CustomerManagedKey() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.redisInstance.RedisInstance.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.redisInstance.RedisInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.redisInstance.RedisInstance.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationId`<sup>Required</sup> <a name="LocationId" id="@cdktf/provider-google.redisInstance.RedisInstance.property.locationId"></a>

```go
func LocationId() *string
```

- *Type:* *string

---

##### `MemorySizeGb`<sup>Required</sup> <a name="MemorySizeGb" id="@cdktf/provider-google.redisInstance.RedisInstance.property.memorySizeGb"></a>

```go
func MemorySizeGb() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.redisInstance.RedisInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.redisInstance.RedisInstance.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ReadReplicasMode`<sup>Required</sup> <a name="ReadReplicasMode" id="@cdktf/provider-google.redisInstance.RedisInstance.property.readReplicasMode"></a>

```go
func ReadReplicasMode() *string
```

- *Type:* *string

---

##### `RedisConfigs`<sup>Required</sup> <a name="RedisConfigs" id="@cdktf/provider-google.redisInstance.RedisInstance.property.redisConfigs"></a>

```go
func RedisConfigs() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RedisVersion`<sup>Required</sup> <a name="RedisVersion" id="@cdktf/provider-google.redisInstance.RedisInstance.property.redisVersion"></a>

```go
func RedisVersion() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.redisInstance.RedisInstance.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ReplicaCount`<sup>Required</sup> <a name="ReplicaCount" id="@cdktf/provider-google.redisInstance.RedisInstance.property.replicaCount"></a>

```go
func ReplicaCount() *f64
```

- *Type:* *f64

---

##### `ReservedIpRange`<sup>Required</sup> <a name="ReservedIpRange" id="@cdktf/provider-google.redisInstance.RedisInstance.property.reservedIpRange"></a>

```go
func ReservedIpRange() *string
```

- *Type:* *string

---

##### `SecondaryIpRange`<sup>Required</sup> <a name="SecondaryIpRange" id="@cdktf/provider-google.redisInstance.RedisInstance.property.secondaryIpRange"></a>

```go
func SecondaryIpRange() *string
```

- *Type:* *string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-google.redisInstance.RedisInstance.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

##### `TransitEncryptionMode`<sup>Required</sup> <a name="TransitEncryptionMode" id="@cdktf/provider-google.redisInstance.RedisInstance.property.transitEncryptionMode"></a>

```go
func TransitEncryptionMode() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.redisInstance.RedisInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RedisInstanceConfig <a name="RedisInstanceConfig" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/redisinstance"

&redisinstance.RedisInstanceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	MemorySizeGb: *f64,
	Name: *string,
	AlternativeLocationId: *string,
	AuthEnabled: interface{},
	AuthorizedNetwork: *string,
	ConnectMode: *string,
	CustomerManagedKey: *string,
	DisplayName: *string,
	Id: *string,
	Labels: *map[string]*string,
	LocationId: *string,
	MaintenancePolicy: github.com/cdktf/cdktf-provider-google-go/google.redisInstance.RedisInstanceMaintenancePolicy,
	MaintenanceSchedule: github.com/cdktf/cdktf-provider-google-go/google.redisInstance.RedisInstanceMaintenanceSchedule,
	PersistenceConfig: github.com/cdktf/cdktf-provider-google-go/google.redisInstance.RedisInstancePersistenceConfig,
	Project: *string,
	ReadReplicasMode: *string,
	RedisConfigs: *map[string]*string,
	RedisVersion: *string,
	Region: *string,
	ReplicaCount: *f64,
	ReservedIpRange: *string,
	SecondaryIpRange: *string,
	Tier: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.redisInstance.RedisInstanceTimeouts,
	TransitEncryptionMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.memorySizeGb">MemorySizeGb</a></code> | <code>*f64</code> | Redis memory size in GiB. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.name">Name</a></code> | <code>*string</code> | The ID of the instance or a fully qualified identifier for the instance. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.alternativeLocationId">AlternativeLocationId</a></code> | <code>*string</code> | Only applicable to STANDARD_HA tier which protects the instance against zonal failures by provisioning it across two zones. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.authEnabled">AuthEnabled</a></code> | <code>interface{}</code> | Optional. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.authorizedNetwork">AuthorizedNetwork</a></code> | <code>*string</code> | The full name of the Google Compute Engine network to which the instance is connected. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.connectMode">ConnectMode</a></code> | <code>*string</code> | The connection mode of the Redis instance. Default value: "DIRECT_PEERING" Possible values: ["DIRECT_PEERING", "PRIVATE_SERVICE_ACCESS"]. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.customerManagedKey">CustomerManagedKey</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | An arbitrary and optional user-provided name for the instance. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#id RedisInstance#id}. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.locationId">LocationId</a></code> | <code>*string</code> | The zone where the instance will be provisioned. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.maintenancePolicy">MaintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy">RedisInstanceMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.maintenanceSchedule">MaintenanceSchedule</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceSchedule">RedisInstanceMaintenanceSchedule</a></code> | maintenance_schedule block. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.persistenceConfig">PersistenceConfig</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig">RedisInstancePersistenceConfig</a></code> | persistence_config block. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#project RedisInstance#project}. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.readReplicasMode">ReadReplicasMode</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.redisConfigs">RedisConfigs</a></code> | <code>*map[string]*string</code> | Redis configuration parameters, according to http://redis.io/topics/config. Please check Memorystore documentation for the list of supported parameters: https://cloud.google.com/memorystore/docs/redis/reference/rest/v1/projects.locations.instances#Instance.FIELDS.redis_configs. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.redisVersion">RedisVersion</a></code> | <code>*string</code> | The version of Redis software. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.region">Region</a></code> | <code>*string</code> | The name of the Redis region of the instance. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.replicaCount">ReplicaCount</a></code> | <code>*f64</code> | Optional. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.reservedIpRange">ReservedIpRange</a></code> | <code>*string</code> | The CIDR range of internal addresses that are reserved for this instance. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.secondaryIpRange">SecondaryIpRange</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.tier">Tier</a></code> | <code>*string</code> | The service tier of the instance. Must be one of these values:. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeouts">RedisInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.transitEncryptionMode">TransitEncryptionMode</a></code> | <code>*string</code> | The TLS mode of the Redis instance, If not provided, TLS is disabled for the instance. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MemorySizeGb`<sup>Required</sup> <a name="MemorySizeGb" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.memorySizeGb"></a>

```go
MemorySizeGb *f64
```

- *Type:* *f64

Redis memory size in GiB.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#memory_size_gb RedisInstance#memory_size_gb}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The ID of the instance or a fully qualified identifier for the instance.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#name RedisInstance#name}

---

##### `AlternativeLocationId`<sup>Optional</sup> <a name="AlternativeLocationId" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.alternativeLocationId"></a>

```go
AlternativeLocationId *string
```

- *Type:* *string

Only applicable to STANDARD_HA tier which protects the instance against zonal failures by provisioning it across two zones.

If provided, it must be a different zone from the one provided in
[locationId].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#alternative_location_id RedisInstance#alternative_location_id}

---

##### `AuthEnabled`<sup>Optional</sup> <a name="AuthEnabled" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.authEnabled"></a>

```go
AuthEnabled interface{}
```

- *Type:* interface{}

Optional.

Indicates whether OSS Redis AUTH is enabled for the
instance. If set to "true" AUTH is enabled on the instance.
Default value is "false" meaning AUTH is disabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#auth_enabled RedisInstance#auth_enabled}

---

##### `AuthorizedNetwork`<sup>Optional</sup> <a name="AuthorizedNetwork" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.authorizedNetwork"></a>

```go
AuthorizedNetwork *string
```

- *Type:* *string

The full name of the Google Compute Engine network to which the instance is connected.

If left unspecified, the default network
will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#authorized_network RedisInstance#authorized_network}

---

##### `ConnectMode`<sup>Optional</sup> <a name="ConnectMode" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.connectMode"></a>

```go
ConnectMode *string
```

- *Type:* *string

The connection mode of the Redis instance. Default value: "DIRECT_PEERING" Possible values: ["DIRECT_PEERING", "PRIVATE_SERVICE_ACCESS"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#connect_mode RedisInstance#connect_mode}

---

##### `CustomerManagedKey`<sup>Optional</sup> <a name="CustomerManagedKey" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.customerManagedKey"></a>

```go
CustomerManagedKey *string
```

- *Type:* *string

Optional.

The KMS key reference that you want to use to encrypt the data at rest for this Redis
instance. If this is provided, CMEK is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#customer_managed_key RedisInstance#customer_managed_key}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

An arbitrary and optional user-provided name for the instance.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#display_name RedisInstance#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#id RedisInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Resource labels to represent user provided metadata.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#labels RedisInstance#labels}

---

##### `LocationId`<sup>Optional</sup> <a name="LocationId" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.locationId"></a>

```go
LocationId *string
```

- *Type:* *string

The zone where the instance will be provisioned.

If not provided,
the service will choose a zone for the instance. For STANDARD_HA tier,
instances will be created across two zones for protection against
zonal failures. If [alternativeLocationId] is also provided, it must
be different from [locationId].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#location_id RedisInstance#location_id}

---

##### `MaintenancePolicy`<sup>Optional</sup> <a name="MaintenancePolicy" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.maintenancePolicy"></a>

```go
MaintenancePolicy RedisInstanceMaintenancePolicy
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy">RedisInstanceMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#maintenance_policy RedisInstance#maintenance_policy}

---

##### `MaintenanceSchedule`<sup>Optional</sup> <a name="MaintenanceSchedule" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.maintenanceSchedule"></a>

```go
MaintenanceSchedule RedisInstanceMaintenanceSchedule
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceSchedule">RedisInstanceMaintenanceSchedule</a>

maintenance_schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#maintenance_schedule RedisInstance#maintenance_schedule}

---

##### `PersistenceConfig`<sup>Optional</sup> <a name="PersistenceConfig" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.persistenceConfig"></a>

```go
PersistenceConfig RedisInstancePersistenceConfig
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig">RedisInstancePersistenceConfig</a>

persistence_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#persistence_config RedisInstance#persistence_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#project RedisInstance#project}.

---

##### `ReadReplicasMode`<sup>Optional</sup> <a name="ReadReplicasMode" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.readReplicasMode"></a>

```go
ReadReplicasMode *string
```

- *Type:* *string

Optional.

Read replica mode. Can only be specified when trying to create the instance.
If not set, Memorystore Redis backend will default to READ_REPLICAS_DISABLED.

* READ_REPLICAS_DISABLED: If disabled, read endpoint will not be provided and the
  instance cannot scale up or down the number of replicas.
* READ_REPLICAS_ENABLED: If enabled, read endpoint will be provided and the instance
  can scale up and down the number of replicas. Possible values: ["READ_REPLICAS_DISABLED", "READ_REPLICAS_ENABLED"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#read_replicas_mode RedisInstance#read_replicas_mode}

---

##### `RedisConfigs`<sup>Optional</sup> <a name="RedisConfigs" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.redisConfigs"></a>

```go
RedisConfigs *map[string]*string
```

- *Type:* *map[string]*string

Redis configuration parameters, according to http://redis.io/topics/config. Please check Memorystore documentation for the list of supported parameters: https://cloud.google.com/memorystore/docs/redis/reference/rest/v1/projects.locations.instances#Instance.FIELDS.redis_configs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#redis_configs RedisInstance#redis_configs}

---

##### `RedisVersion`<sup>Optional</sup> <a name="RedisVersion" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.redisVersion"></a>

```go
RedisVersion *string
```

- *Type:* *string

The version of Redis software.

If not provided, latest supported
version will be used. Please check the API documentation linked
at the top for the latest valid values.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#redis_version RedisInstance#redis_version}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The name of the Redis region of the instance.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#region RedisInstance#region}

---

##### `ReplicaCount`<sup>Optional</sup> <a name="ReplicaCount" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.replicaCount"></a>

```go
ReplicaCount *f64
```

- *Type:* *f64

Optional.

The number of replica nodes. The valid range for the Standard Tier with
read replicas enabled is [1-5] and defaults to 2. If read replicas are not enabled
for a Standard Tier instance, the only valid value is 1 and the default is 1.
The valid value for basic tier is 0 and the default is also 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#replica_count RedisInstance#replica_count}

---

##### `ReservedIpRange`<sup>Optional</sup> <a name="ReservedIpRange" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.reservedIpRange"></a>

```go
ReservedIpRange *string
```

- *Type:* *string

The CIDR range of internal addresses that are reserved for this instance.

If not provided, the service will choose an unused /29
block, for example, 10.0.0.0/29 or 192.168.0.0/29. Ranges must be
unique and non-overlapping with existing subnets in an authorized
network.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#reserved_ip_range RedisInstance#reserved_ip_range}

---

##### `SecondaryIpRange`<sup>Optional</sup> <a name="SecondaryIpRange" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.secondaryIpRange"></a>

```go
SecondaryIpRange *string
```

- *Type:* *string

Optional.

Additional IP range for node placement. Required when enabling read replicas on
an existing instance. For DIRECT_PEERING mode value must be a CIDR range of size /28, or
"auto". For PRIVATE_SERVICE_ACCESS mode value must be the name of an allocated address
range associated with the private service access connection, or "auto".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#secondary_ip_range RedisInstance#secondary_ip_range}

---

##### `Tier`<sup>Optional</sup> <a name="Tier" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.tier"></a>

```go
Tier *string
```

- *Type:* *string

The service tier of the instance. Must be one of these values:.

* BASIC: standalone instance
* STANDARD_HA: highly available primary/replica instances Default value: "BASIC" Possible values: ["BASIC", "STANDARD_HA"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#tier RedisInstance#tier}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.timeouts"></a>

```go
Timeouts RedisInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeouts">RedisInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#timeouts RedisInstance#timeouts}

---

##### `TransitEncryptionMode`<sup>Optional</sup> <a name="TransitEncryptionMode" id="@cdktf/provider-google.redisInstance.RedisInstanceConfig.property.transitEncryptionMode"></a>

```go
TransitEncryptionMode *string
```

- *Type:* *string

The TLS mode of the Redis instance, If not provided, TLS is disabled for the instance.

* SERVER_AUTHENTICATION: Client to Server traffic encryption enabled with server authentication Default value: "DISABLED" Possible values: ["SERVER_AUTHENTICATION", "DISABLED"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#transit_encryption_mode RedisInstance#transit_encryption_mode}

---

### RedisInstanceMaintenancePolicy <a name="RedisInstanceMaintenancePolicy" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/redisinstance"

&redisinstance.RedisInstanceMaintenancePolicy {
	Description: *string,
	WeeklyMaintenanceWindow: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy.property.description">Description</a></code> | <code>*string</code> | Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy.property.weeklyMaintenanceWindow">WeeklyMaintenanceWindow</a></code> | <code>interface{}</code> | weekly_maintenance_window block. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#description RedisInstance#description}

---

##### `WeeklyMaintenanceWindow`<sup>Optional</sup> <a name="WeeklyMaintenanceWindow" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy.property.weeklyMaintenanceWindow"></a>

```go
WeeklyMaintenanceWindow interface{}
```

- *Type:* interface{}

weekly_maintenance_window block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#weekly_maintenance_window RedisInstance#weekly_maintenance_window}

---

### RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow <a name="RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/redisinstance"

&redisinstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow {
	Day: *string,
	StartTime: github.com/cdktf/cdktf-provider-google-go/google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.day">Day</a></code> | <code>*string</code> | Required. The day of week that maintenance updates occur. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.startTime">StartTime</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | start_time block. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.day"></a>

```go
Day *string
```

- *Type:* *string

Required. The day of week that maintenance updates occur.

* DAY_OF_WEEK_UNSPECIFIED: The day of the week is unspecified.
* MONDAY: Monday
* TUESDAY: Tuesday
* WEDNESDAY: Wednesday
* THURSDAY: Thursday
* FRIDAY: Friday
* SATURDAY: Saturday
* SUNDAY: Sunday Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#day RedisInstance#day}

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.startTime"></a>

```go
StartTime RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#start_time RedisInstance#start_time}

---

### RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime <a name="RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/redisinstance"

&redisinstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime {
	Hours: *f64,
	Minutes: *f64,
	Nanos: *f64,
	Seconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours">Hours</a></code> | <code>*f64</code> | Hours of day in 24 hour format. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes">Minutes</a></code> | <code>*f64</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos">Nanos</a></code> | <code>*f64</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds">Seconds</a></code> | <code>*f64</code> | Seconds of minutes of the time. |

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours"></a>

```go
Hours *f64
```

- *Type:* *f64

Hours of day in 24 hour format.

Should be from 0 to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#hours RedisInstance#hours}

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes"></a>

```go
Minutes *f64
```

- *Type:* *f64

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#minutes RedisInstance#minutes}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#nanos RedisInstance#nanos}

---

##### `Seconds`<sup>Optional</sup> <a name="Seconds" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds"></a>

```go
Seconds *f64
```

- *Type:* *f64

Seconds of minutes of the time.

Must normally be from 0 to 59.
An API may allow the value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#seconds RedisInstance#seconds}

---

### RedisInstanceMaintenanceSchedule <a name="RedisInstanceMaintenanceSchedule" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/redisinstance"

&redisinstance.RedisInstanceMaintenanceSchedule {

}
```


### RedisInstanceNodes <a name="RedisInstanceNodes" id="@cdktf/provider-google.redisInstance.RedisInstanceNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisInstance.RedisInstanceNodes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/redisinstance"

&redisinstance.RedisInstanceNodes {

}
```


### RedisInstancePersistenceConfig <a name="RedisInstancePersistenceConfig" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/redisinstance"

&redisinstance.RedisInstancePersistenceConfig {
	PersistenceMode: *string,
	RdbSnapshotPeriod: *string,
	RdbSnapshotStartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig.property.persistenceMode">PersistenceMode</a></code> | <code>*string</code> | Optional. Controls whether Persistence features are enabled. If not provided, the existing value will be used. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig.property.rdbSnapshotPeriod">RdbSnapshotPeriod</a></code> | <code>*string</code> | Optional. Available snapshot periods for scheduling. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig.property.rdbSnapshotStartTime">RdbSnapshotStartTime</a></code> | <code>*string</code> | Optional. |

---

##### `PersistenceMode`<sup>Optional</sup> <a name="PersistenceMode" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig.property.persistenceMode"></a>

```go
PersistenceMode *string
```

- *Type:* *string

Optional. Controls whether Persistence features are enabled. If not provided, the existing value will be used.

* DISABLED: 	Persistence is disabled for the instance, and any existing snapshots are deleted.
* RDB: RDB based Persistence is enabled. Possible values: ["DISABLED", "RDB"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#persistence_mode RedisInstance#persistence_mode}

---

##### `RdbSnapshotPeriod`<sup>Optional</sup> <a name="RdbSnapshotPeriod" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig.property.rdbSnapshotPeriod"></a>

```go
RdbSnapshotPeriod *string
```

- *Type:* *string

Optional. Available snapshot periods for scheduling.

* ONE_HOUR:	Snapshot every 1 hour.
* SIX_HOURS:	Snapshot every 6 hours.
* TWELVE_HOURS:	Snapshot every 12 hours.
* TWENTY_FOUR_HOURS:	Snapshot every 24 hours. Possible values: ["ONE_HOUR", "SIX_HOURS", "TWELVE_HOURS", "TWENTY_FOUR_HOURS"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#rdb_snapshot_period RedisInstance#rdb_snapshot_period}

---

##### `RdbSnapshotStartTime`<sup>Optional</sup> <a name="RdbSnapshotStartTime" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig.property.rdbSnapshotStartTime"></a>

```go
RdbSnapshotStartTime *string
```

- *Type:* *string

Optional.

Date and time that the first snapshot was/will be attempted,
and to which future snapshots will be aligned. If not provided,
the current time will be used.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution
and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#rdb_snapshot_start_time RedisInstance#rdb_snapshot_start_time}

---

### RedisInstanceServerCaCerts <a name="RedisInstanceServerCaCerts" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCerts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/redisinstance"

&redisinstance.RedisInstanceServerCaCerts {

}
```


### RedisInstanceTimeouts <a name="RedisInstanceTimeouts" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/redisinstance"

&redisinstance.RedisInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#create RedisInstance#create}. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#delete RedisInstance#delete}. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#update RedisInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#create RedisInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#delete RedisInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#update RedisInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedisInstanceMaintenancePolicyOutputReference <a name="RedisInstanceMaintenancePolicyOutputReference" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/redisinstance"

redisinstance.NewRedisInstanceMaintenancePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedisInstanceMaintenancePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWeeklyMaintenanceWindow` <a name="PutWeeklyMaintenanceWindow" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow"></a>

```go
func PutWeeklyMaintenanceWindow(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetWeeklyMaintenanceWindow` <a name="ResetWeeklyMaintenanceWindow" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.resetWeeklyMaintenanceWindow"></a>

```go
func ResetWeeklyMaintenanceWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow">WeeklyMaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput">WeeklyMaintenanceWindowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy">RedisInstanceMaintenancePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `WeeklyMaintenanceWindow`<sup>Required</sup> <a name="WeeklyMaintenanceWindow" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow"></a>

```go
func WeeklyMaintenanceWindow() RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `WeeklyMaintenanceWindowInput`<sup>Optional</sup> <a name="WeeklyMaintenanceWindowInput" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput"></a>

```go
func WeeklyMaintenanceWindowInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() RedisInstanceMaintenancePolicy
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicy">RedisInstanceMaintenancePolicy</a>

---


### RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList <a name="RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/redisinstance"

redisinstance.NewRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get"></a>

```go
func Get(index *f64) RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference <a name="RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/redisinstance"

redisinstance.NewRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStartTime` <a name="PutStartTime" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime"></a>

```go
func PutStartTime(value RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput">DayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day">Day</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime"></a>

```go
func StartTime() RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a>

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput"></a>

```go
func DayInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day"></a>

```go
func Day() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference <a name="RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/redisinstance"

redisinstance.NewRedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHours` <a name="ResetHours" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetHours"></a>

```go
func ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetMinutes"></a>

```go
func ResetMinutes()
```

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetNanos"></a>

```go
func ResetNanos()
```

##### `ResetSeconds` <a name="ResetSeconds" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetSeconds"></a>

```go
func ResetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours">Hours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput"></a>

```go
func HoursInput() *f64
```

- *Type:* *f64

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput"></a>

```go
func MinutesInput() *f64
```

- *Type:* *f64

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *f64
```

- *Type:* *f64

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours"></a>

```go
func Hours() *f64
```

- *Type:* *f64

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes"></a>

```go
func Minutes() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


### RedisInstanceMaintenanceScheduleOutputReference <a name="RedisInstanceMaintenanceScheduleOutputReference" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/redisinstance"

redisinstance.NewRedisInstanceMaintenanceScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedisInstanceMaintenanceScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.scheduleDeadlineTime">ScheduleDeadlineTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceSchedule">RedisInstanceMaintenanceSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `ScheduleDeadlineTime`<sup>Required</sup> <a name="ScheduleDeadlineTime" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.scheduleDeadlineTime"></a>

```go
func ScheduleDeadlineTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() RedisInstanceMaintenanceSchedule
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceMaintenanceSchedule">RedisInstanceMaintenanceSchedule</a>

---


### RedisInstanceNodesList <a name="RedisInstanceNodesList" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/redisinstance"

redisinstance.NewRedisInstanceNodesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedisInstanceNodesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.get"></a>

```go
func Get(index *f64) RedisInstanceNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### RedisInstanceNodesOutputReference <a name="RedisInstanceNodesOutputReference" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/redisinstance"

redisinstance.NewRedisInstanceNodesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedisInstanceNodesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodes">RedisInstanceNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.redisInstance.RedisInstanceNodesOutputReference.property.internalValue"></a>

```go
func InternalValue() RedisInstanceNodes
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceNodes">RedisInstanceNodes</a>

---


### RedisInstancePersistenceConfigOutputReference <a name="RedisInstancePersistenceConfigOutputReference" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/redisinstance"

redisinstance.NewRedisInstancePersistenceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedisInstancePersistenceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPersistenceMode` <a name="ResetPersistenceMode" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.resetPersistenceMode"></a>

```go
func ResetPersistenceMode()
```

##### `ResetRdbSnapshotPeriod` <a name="ResetRdbSnapshotPeriod" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.resetRdbSnapshotPeriod"></a>

```go
func ResetRdbSnapshotPeriod()
```

##### `ResetRdbSnapshotStartTime` <a name="ResetRdbSnapshotStartTime" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.resetRdbSnapshotStartTime"></a>

```go
func ResetRdbSnapshotStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.rdbNextSnapshotTime">RdbNextSnapshotTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.persistenceModeInput">PersistenceModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.rdbSnapshotPeriodInput">RdbSnapshotPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.rdbSnapshotStartTimeInput">RdbSnapshotStartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.persistenceMode">PersistenceMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.rdbSnapshotPeriod">RdbSnapshotPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.rdbSnapshotStartTime">RdbSnapshotStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig">RedisInstancePersistenceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RdbNextSnapshotTime`<sup>Required</sup> <a name="RdbNextSnapshotTime" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.rdbNextSnapshotTime"></a>

```go
func RdbNextSnapshotTime() *string
```

- *Type:* *string

---

##### `PersistenceModeInput`<sup>Optional</sup> <a name="PersistenceModeInput" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.persistenceModeInput"></a>

```go
func PersistenceModeInput() *string
```

- *Type:* *string

---

##### `RdbSnapshotPeriodInput`<sup>Optional</sup> <a name="RdbSnapshotPeriodInput" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.rdbSnapshotPeriodInput"></a>

```go
func RdbSnapshotPeriodInput() *string
```

- *Type:* *string

---

##### `RdbSnapshotStartTimeInput`<sup>Optional</sup> <a name="RdbSnapshotStartTimeInput" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.rdbSnapshotStartTimeInput"></a>

```go
func RdbSnapshotStartTimeInput() *string
```

- *Type:* *string

---

##### `PersistenceMode`<sup>Required</sup> <a name="PersistenceMode" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.persistenceMode"></a>

```go
func PersistenceMode() *string
```

- *Type:* *string

---

##### `RdbSnapshotPeriod`<sup>Required</sup> <a name="RdbSnapshotPeriod" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.rdbSnapshotPeriod"></a>

```go
func RdbSnapshotPeriod() *string
```

- *Type:* *string

---

##### `RdbSnapshotStartTime`<sup>Required</sup> <a name="RdbSnapshotStartTime" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.rdbSnapshotStartTime"></a>

```go
func RdbSnapshotStartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() RedisInstancePersistenceConfig
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstancePersistenceConfig">RedisInstancePersistenceConfig</a>

---


### RedisInstanceServerCaCertsList <a name="RedisInstanceServerCaCertsList" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/redisinstance"

redisinstance.NewRedisInstanceServerCaCertsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedisInstanceServerCaCertsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.get"></a>

```go
func Get(index *f64) RedisInstanceServerCaCertsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### RedisInstanceServerCaCertsOutputReference <a name="RedisInstanceServerCaCertsOutputReference" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/redisinstance"

redisinstance.NewRedisInstanceServerCaCertsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedisInstanceServerCaCertsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.cert">Cert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.expireTime">ExpireTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.sha1Fingerprint">Sha1Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCerts">RedisInstanceServerCaCerts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.cert"></a>

```go
func Cert() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.expireTime"></a>

```go
func ExpireTime() *string
```

- *Type:* *string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.serialNumber"></a>

```go
func SerialNumber() *string
```

- *Type:* *string

---

##### `Sha1Fingerprint`<sup>Required</sup> <a name="Sha1Fingerprint" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.sha1Fingerprint"></a>

```go
func Sha1Fingerprint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.redisInstance.RedisInstanceServerCaCertsOutputReference.property.internalValue"></a>

```go
func InternalValue() RedisInstanceServerCaCerts
```

- *Type:* <a href="#@cdktf/provider-google.redisInstance.RedisInstanceServerCaCerts">RedisInstanceServerCaCerts</a>

---


### RedisInstanceTimeoutsOutputReference <a name="RedisInstanceTimeoutsOutputReference" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/redisinstance"

redisinstance.NewRedisInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedisInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.redisInstance.RedisInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



