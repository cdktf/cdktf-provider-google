# `gameServicesGameServerDeploymentRollout` Submodule <a name="`gameServicesGameServerDeploymentRollout` Submodule" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameServicesGameServerDeploymentRollout <a name="GameServicesGameServerDeploymentRollout" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout google_game_services_game_server_deployment_rollout}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameserverdeploymentrollout"

gameservicesgameserverdeploymentrollout.NewGameServicesGameServerDeploymentRollout(scope Construct, id *string, config GameServicesGameServerDeploymentRolloutConfig) GameServicesGameServerDeploymentRollout
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig">GameServicesGameServerDeploymentRolloutConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig">GameServicesGameServerDeploymentRolloutConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.putGameServerConfigOverrides">PutGameServerConfigOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.resetGameServerConfigOverrides">ResetGameServerConfigOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutGameServerConfigOverrides` <a name="PutGameServerConfigOverrides" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.putGameServerConfigOverrides"></a>

```go
func PutGameServerConfigOverrides(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.putGameServerConfigOverrides.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.putTimeouts"></a>

```go
func PutTimeouts(value GameServicesGameServerDeploymentRolloutTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts">GameServicesGameServerDeploymentRolloutTimeouts</a>

---

##### `ResetGameServerConfigOverrides` <a name="ResetGameServerConfigOverrides" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.resetGameServerConfigOverrides"></a>

```go
func ResetGameServerConfigOverrides()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameserverdeploymentrollout"

gameservicesgameserverdeploymentrollout.GameServicesGameServerDeploymentRollout_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameserverdeploymentrollout"

gameservicesgameserverdeploymentrollout.GameServicesGameServerDeploymentRollout_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameserverdeploymentrollout"

gameservicesgameserverdeploymentrollout.GameServicesGameServerDeploymentRollout_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.gameServerConfigOverrides">GameServerConfigOverrides</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList">GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference">GameServicesGameServerDeploymentRolloutTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.defaultGameServerConfigInput">DefaultGameServerConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.deploymentIdInput">DeploymentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.gameServerConfigOverridesInput">GameServerConfigOverridesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.defaultGameServerConfig">DefaultGameServerConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GameServerConfigOverrides`<sup>Required</sup> <a name="GameServerConfigOverrides" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.gameServerConfigOverrides"></a>

```go
func GameServerConfigOverrides() GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList">GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.timeouts"></a>

```go
func Timeouts() GameServicesGameServerDeploymentRolloutTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference">GameServicesGameServerDeploymentRolloutTimeoutsOutputReference</a>

---

##### `DefaultGameServerConfigInput`<sup>Optional</sup> <a name="DefaultGameServerConfigInput" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.defaultGameServerConfigInput"></a>

```go
func DefaultGameServerConfigInput() *string
```

- *Type:* *string

---

##### `DeploymentIdInput`<sup>Optional</sup> <a name="DeploymentIdInput" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.deploymentIdInput"></a>

```go
func DeploymentIdInput() *string
```

- *Type:* *string

---

##### `GameServerConfigOverridesInput`<sup>Optional</sup> <a name="GameServerConfigOverridesInput" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.gameServerConfigOverridesInput"></a>

```go
func GameServerConfigOverridesInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultGameServerConfig`<sup>Required</sup> <a name="DefaultGameServerConfig" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.defaultGameServerConfig"></a>

```go
func DefaultGameServerConfig() *string
```

- *Type:* *string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.deploymentId"></a>

```go
func DeploymentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GameServicesGameServerDeploymentRolloutConfig <a name="GameServicesGameServerDeploymentRolloutConfig" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameserverdeploymentrollout"

&gameservicesgameserverdeploymentrollout.GameServicesGameServerDeploymentRolloutConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DefaultGameServerConfig: *string,
	DeploymentId: *string,
	GameServerConfigOverrides: interface{},
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.defaultGameServerConfig">DefaultGameServerConfig</a></code> | <code>*string</code> | This field points to the game server config that is applied by default to all realms and clusters. For example,. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | The deployment to rollout the new config to. Only 1 rollout must be associated with each deployment. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.gameServerConfigOverrides">GameServerConfigOverrides</a></code> | <code>interface{}</code> | game_server_config_overrides block. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout#id GameServicesGameServerDeploymentRollout#id}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout#project GameServicesGameServerDeploymentRollout#project}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts">GameServicesGameServerDeploymentRolloutTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultGameServerConfig`<sup>Required</sup> <a name="DefaultGameServerConfig" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.defaultGameServerConfig"></a>

```go
DefaultGameServerConfig *string
```

- *Type:* *string

This field points to the game server config that is applied by default to all realms and clusters. For example,.

'projects/my-project/locations/global/gameServerDeployments/my-game/configs/my-config'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout#default_game_server_config GameServicesGameServerDeploymentRollout#default_game_server_config}

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.deploymentId"></a>

```go
DeploymentId *string
```

- *Type:* *string

The deployment to rollout the new config to. Only 1 rollout must be associated with each deployment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout#deployment_id GameServicesGameServerDeploymentRollout#deployment_id}

---

##### `GameServerConfigOverrides`<sup>Optional</sup> <a name="GameServerConfigOverrides" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.gameServerConfigOverrides"></a>

```go
GameServerConfigOverrides interface{}
```

- *Type:* interface{}

game_server_config_overrides block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout#game_server_config_overrides GameServicesGameServerDeploymentRollout#game_server_config_overrides}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout#id GameServicesGameServerDeploymentRollout#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout#project GameServicesGameServerDeploymentRollout#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.timeouts"></a>

```go
Timeouts GameServicesGameServerDeploymentRolloutTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts">GameServicesGameServerDeploymentRolloutTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout#timeouts GameServicesGameServerDeploymentRollout#timeouts}

---

### GameServicesGameServerDeploymentRolloutGameServerConfigOverrides <a name="GameServicesGameServerDeploymentRolloutGameServerConfigOverrides" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameserverdeploymentrollout"

&gameservicesgameserverdeploymentrollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides {
	ConfigVersion: *string,
	RealmsSelector: github.com/cdktf/cdktf-provider-google-go/google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides.property.configVersion">ConfigVersion</a></code> | <code>*string</code> | Version of the configuration. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides.property.realmsSelector">RealmsSelector</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a></code> | realms_selector block. |

---

##### `ConfigVersion`<sup>Optional</sup> <a name="ConfigVersion" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides.property.configVersion"></a>

```go
ConfigVersion *string
```

- *Type:* *string

Version of the configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout#config_version GameServicesGameServerDeploymentRollout#config_version}

---

##### `RealmsSelector`<sup>Optional</sup> <a name="RealmsSelector" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides.property.realmsSelector"></a>

```go
RealmsSelector GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a>

realms_selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout#realms_selector GameServicesGameServerDeploymentRollout#realms_selector}

---

### GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector <a name="GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameserverdeploymentrollout"

&gameservicesgameserverdeploymentrollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector {
	Realms: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector.property.realms">Realms</a></code> | <code>*[]*string</code> | List of realms to match against. |

---

##### `Realms`<sup>Optional</sup> <a name="Realms" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector.property.realms"></a>

```go
Realms *[]*string
```

- *Type:* *[]*string

List of realms to match against.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout#realms GameServicesGameServerDeploymentRollout#realms}

---

### GameServicesGameServerDeploymentRolloutTimeouts <a name="GameServicesGameServerDeploymentRolloutTimeouts" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameserverdeploymentrollout"

&gameservicesgameserverdeploymentrollout.GameServicesGameServerDeploymentRolloutTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout#create GameServicesGameServerDeploymentRollout#create}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout#delete GameServicesGameServerDeploymentRollout#delete}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout#update GameServicesGameServerDeploymentRollout#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout#create GameServicesGameServerDeploymentRollout#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout#delete GameServicesGameServerDeploymentRollout#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout#update GameServicesGameServerDeploymentRollout#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList <a name="GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameserverdeploymentrollout"

gameservicesgameserverdeploymentrollout.NewGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.get"></a>

```go
func Get(index *f64) GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference <a name="GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameserverdeploymentrollout"

gameservicesgameserverdeploymentrollout.NewGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.putRealmsSelector">PutRealmsSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resetConfigVersion">ResetConfigVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resetRealmsSelector">ResetRealmsSelector</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRealmsSelector` <a name="PutRealmsSelector" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.putRealmsSelector"></a>

```go
func PutRealmsSelector(value GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.putRealmsSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a>

---

##### `ResetConfigVersion` <a name="ResetConfigVersion" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resetConfigVersion"></a>

```go
func ResetConfigVersion()
```

##### `ResetRealmsSelector` <a name="ResetRealmsSelector" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resetRealmsSelector"></a>

```go
func ResetRealmsSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.realmsSelector">RealmsSelector</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference">GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.configVersionInput">ConfigVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.realmsSelectorInput">RealmsSelectorInput</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.configVersion">ConfigVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RealmsSelector`<sup>Required</sup> <a name="RealmsSelector" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.realmsSelector"></a>

```go
func RealmsSelector() GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference">GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference</a>

---

##### `ConfigVersionInput`<sup>Optional</sup> <a name="ConfigVersionInput" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.configVersionInput"></a>

```go
func ConfigVersionInput() *string
```

- *Type:* *string

---

##### `RealmsSelectorInput`<sup>Optional</sup> <a name="RealmsSelectorInput" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.realmsSelectorInput"></a>

```go
func RealmsSelectorInput() GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a>

---

##### `ConfigVersion`<sup>Required</sup> <a name="ConfigVersion" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.configVersion"></a>

```go
func ConfigVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference <a name="GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameserverdeploymentrollout"

gameservicesgameserverdeploymentrollout.NewGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resetRealms">ResetRealms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRealms` <a name="ResetRealms" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resetRealms"></a>

```go
func ResetRealms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.realmsInput">RealmsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.realms">Realms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RealmsInput`<sup>Optional</sup> <a name="RealmsInput" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.realmsInput"></a>

```go
func RealmsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Realms`<sup>Required</sup> <a name="Realms" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.realms"></a>

```go
func Realms() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.internalValue"></a>

```go
func InternalValue() GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a>

---


### GameServicesGameServerDeploymentRolloutTimeoutsOutputReference <a name="GameServicesGameServerDeploymentRolloutTimeoutsOutputReference" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameserverdeploymentrollout"

gameservicesgameserverdeploymentrollout.NewGameServicesGameServerDeploymentRolloutTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GameServicesGameServerDeploymentRolloutTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



