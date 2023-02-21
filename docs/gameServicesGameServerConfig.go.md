# `gameServicesGameServerConfig` Submodule <a name="`gameServicesGameServerConfig` Submodule" id="@cdktf/provider-google.gameServicesGameServerConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameServicesGameServerConfig <a name="GameServicesGameServerConfig" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config google_game_services_game_server_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameserverconfig"

gameservicesgameserverconfig.NewGameServicesGameServerConfig(scope Construct, id *string, config GameServicesGameServerConfigConfig) GameServicesGameServerConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig">GameServicesGameServerConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig">GameServicesGameServerConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.putFleetConfigs">PutFleetConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.putScalingConfigs">PutScalingConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetScalingConfigs">ResetScalingConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFleetConfigs` <a name="PutFleetConfigs" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.putFleetConfigs"></a>

```go
func PutFleetConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.putFleetConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScalingConfigs` <a name="PutScalingConfigs" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.putScalingConfigs"></a>

```go
func PutScalingConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.putScalingConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.putTimeouts"></a>

```go
func PutTimeouts(value GameServicesGameServerConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts">GameServicesGameServerConfigTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetScalingConfigs` <a name="ResetScalingConfigs" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetScalingConfigs"></a>

```go
func ResetScalingConfigs()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameserverconfig"

gameservicesgameserverconfig.GameServicesGameServerConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameserverconfig"

gameservicesgameserverconfig.GameServicesGameServerConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameserverconfig"

gameservicesgameserverconfig.GameServicesGameServerConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.fleetConfigs">FleetConfigs</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList">GameServicesGameServerConfigFleetConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.scalingConfigs">ScalingConfigs</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList">GameServicesGameServerConfigScalingConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference">GameServicesGameServerConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.configIdInput">ConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.deploymentIdInput">DeploymentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.fleetConfigsInput">FleetConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.scalingConfigsInput">ScalingConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.configId">ConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FleetConfigs`<sup>Required</sup> <a name="FleetConfigs" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.fleetConfigs"></a>

```go
func FleetConfigs() GameServicesGameServerConfigFleetConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList">GameServicesGameServerConfigFleetConfigsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ScalingConfigs`<sup>Required</sup> <a name="ScalingConfigs" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.scalingConfigs"></a>

```go
func ScalingConfigs() GameServicesGameServerConfigScalingConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList">GameServicesGameServerConfigScalingConfigsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.timeouts"></a>

```go
func Timeouts() GameServicesGameServerConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference">GameServicesGameServerConfigTimeoutsOutputReference</a>

---

##### `ConfigIdInput`<sup>Optional</sup> <a name="ConfigIdInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.configIdInput"></a>

```go
func ConfigIdInput() *string
```

- *Type:* *string

---

##### `DeploymentIdInput`<sup>Optional</sup> <a name="DeploymentIdInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.deploymentIdInput"></a>

```go
func DeploymentIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FleetConfigsInput`<sup>Optional</sup> <a name="FleetConfigsInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.fleetConfigsInput"></a>

```go
func FleetConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ScalingConfigsInput`<sup>Optional</sup> <a name="ScalingConfigsInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.scalingConfigsInput"></a>

```go
func ScalingConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.configId"></a>

```go
func ConfigId() *string
```

- *Type:* *string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.deploymentId"></a>

```go
func DeploymentId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GameServicesGameServerConfigConfig <a name="GameServicesGameServerConfigConfig" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameserverconfig"

&gameservicesgameserverconfig.GameServicesGameServerConfigConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConfigId: *string,
	DeploymentId: *string,
	FleetConfigs: interface{},
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	Project: *string,
	ScalingConfigs: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.configId">ConfigId</a></code> | <code>*string</code> | A unique id for the deployment config. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | A unique id for the deployment. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.fleetConfigs">FleetConfigs</a></code> | <code>interface{}</code> | fleet_configs block. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.description">Description</a></code> | <code>*string</code> | The description of the game server config. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#id GameServicesGameServerConfig#id}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels associated with this game server config. Each label is a key-value pair. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.location">Location</a></code> | <code>*string</code> | Location of the Deployment. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#project GameServicesGameServerConfig#project}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.scalingConfigs">ScalingConfigs</a></code> | <code>interface{}</code> | scaling_configs block. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts">GameServicesGameServerConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.configId"></a>

```go
ConfigId *string
```

- *Type:* *string

A unique id for the deployment config.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#config_id GameServicesGameServerConfig#config_id}

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.deploymentId"></a>

```go
DeploymentId *string
```

- *Type:* *string

A unique id for the deployment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#deployment_id GameServicesGameServerConfig#deployment_id}

---

##### `FleetConfigs`<sup>Required</sup> <a name="FleetConfigs" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.fleetConfigs"></a>

```go
FleetConfigs interface{}
```

- *Type:* interface{}

fleet_configs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#fleet_configs GameServicesGameServerConfig#fleet_configs}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the game server config.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#description GameServicesGameServerConfig#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#id GameServicesGameServerConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels associated with this game server config. Each label is a key-value pair.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#labels GameServicesGameServerConfig#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Location of the Deployment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#location GameServicesGameServerConfig#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#project GameServicesGameServerConfig#project}.

---

##### `ScalingConfigs`<sup>Optional</sup> <a name="ScalingConfigs" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.scalingConfigs"></a>

```go
ScalingConfigs interface{}
```

- *Type:* interface{}

scaling_configs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#scaling_configs GameServicesGameServerConfig#scaling_configs}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.timeouts"></a>

```go
Timeouts GameServicesGameServerConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts">GameServicesGameServerConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#timeouts GameServicesGameServerConfig#timeouts}

---

### GameServicesGameServerConfigFleetConfigs <a name="GameServicesGameServerConfigFleetConfigs" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameserverconfig"

&gameservicesgameserverconfig.GameServicesGameServerConfigFleetConfigs {
	FleetSpec: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs.property.fleetSpec">FleetSpec</a></code> | <code>*string</code> | The fleet spec, which is sent to Agones to configure fleet. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs.property.name">Name</a></code> | <code>*string</code> | The name of the FleetConfig. |

---

##### `FleetSpec`<sup>Required</sup> <a name="FleetSpec" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs.property.fleetSpec"></a>

```go
FleetSpec *string
```

- *Type:* *string

The fleet spec, which is sent to Agones to configure fleet.

The spec can be passed as inline json but it is recommended to use a file reference
instead. File references can contain the json or yaml format of the fleet spec. Eg:

fleet_spec = jsonencode(yamldecode(file("fleet_configs.yaml")))
fleet_spec = file("fleet_configs.json")

The format of the spec can be found :
'https://agones.dev/site/docs/reference/fleet/'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#fleet_spec GameServicesGameServerConfig#fleet_spec}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the FleetConfig.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#name GameServicesGameServerConfig#name}

---

### GameServicesGameServerConfigScalingConfigs <a name="GameServicesGameServerConfigScalingConfigs" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameserverconfig"

&gameservicesgameserverconfig.GameServicesGameServerConfigScalingConfigs {
	FleetAutoscalerSpec: *string,
	Name: *string,
	Schedules: interface{},
	Selectors: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs.property.fleetAutoscalerSpec">FleetAutoscalerSpec</a></code> | <code>*string</code> | Fleet autoscaler spec, which is sent to Agones. Example spec can be found : https://agones.dev/site/docs/reference/fleetautoscaler/. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs.property.name">Name</a></code> | <code>*string</code> | The name of the ScalingConfig. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs.property.schedules">Schedules</a></code> | <code>interface{}</code> | schedules block. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs.property.selectors">Selectors</a></code> | <code>interface{}</code> | selectors block. |

---

##### `FleetAutoscalerSpec`<sup>Required</sup> <a name="FleetAutoscalerSpec" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs.property.fleetAutoscalerSpec"></a>

```go
FleetAutoscalerSpec *string
```

- *Type:* *string

Fleet autoscaler spec, which is sent to Agones. Example spec can be found : https://agones.dev/site/docs/reference/fleetautoscaler/.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#fleet_autoscaler_spec GameServicesGameServerConfig#fleet_autoscaler_spec}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the ScalingConfig.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#name GameServicesGameServerConfig#name}

---

##### `Schedules`<sup>Optional</sup> <a name="Schedules" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs.property.schedules"></a>

```go
Schedules interface{}
```

- *Type:* interface{}

schedules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#schedules GameServicesGameServerConfig#schedules}

---

##### `Selectors`<sup>Optional</sup> <a name="Selectors" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs.property.selectors"></a>

```go
Selectors interface{}
```

- *Type:* interface{}

selectors block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#selectors GameServicesGameServerConfig#selectors}

---

### GameServicesGameServerConfigScalingConfigsSchedules <a name="GameServicesGameServerConfigScalingConfigsSchedules" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameserverconfig"

&gameservicesgameserverconfig.GameServicesGameServerConfigScalingConfigsSchedules {
	CronJobDuration: *string,
	CronSpec: *string,
	EndTime: *string,
	StartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules.property.cronJobDuration">CronJobDuration</a></code> | <code>*string</code> | The duration for the cron job event. The duration of the event is effective after the cron job's start time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules.property.cronSpec">CronSpec</a></code> | <code>*string</code> | The cron definition of the scheduled event. See https://en.wikipedia.org/wiki/Cron. Cron spec specifies the local time as defined by the realm. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules.property.endTime">EndTime</a></code> | <code>*string</code> | The end time of the event. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules.property.startTime">StartTime</a></code> | <code>*string</code> | The start time of the event. |

---

##### `CronJobDuration`<sup>Optional</sup> <a name="CronJobDuration" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules.property.cronJobDuration"></a>

```go
CronJobDuration *string
```

- *Type:* *string

The duration for the cron job event. The duration of the event is effective after the cron job's start time.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#cron_job_duration GameServicesGameServerConfig#cron_job_duration}

---

##### `CronSpec`<sup>Optional</sup> <a name="CronSpec" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules.property.cronSpec"></a>

```go
CronSpec *string
```

- *Type:* *string

The cron definition of the scheduled event. See https://en.wikipedia.org/wiki/Cron. Cron spec specifies the local time as defined by the realm.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#cron_spec GameServicesGameServerConfig#cron_spec}

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

The end time of the event.

A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#end_time GameServicesGameServerConfig#end_time}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

The start time of the event.

A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#start_time GameServicesGameServerConfig#start_time}

---

### GameServicesGameServerConfigScalingConfigsSelectors <a name="GameServicesGameServerConfigScalingConfigsSelectors" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameserverconfig"

&gameservicesgameserverconfig.GameServicesGameServerConfigScalingConfigsSelectors {
	Labels: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectors.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Set of labels to group by. |

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectors.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Set of labels to group by.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#labels GameServicesGameServerConfig#labels}

---

### GameServicesGameServerConfigTimeouts <a name="GameServicesGameServerConfigTimeouts" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameserverconfig"

&gameservicesgameserverconfig.GameServicesGameServerConfigTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#create GameServicesGameServerConfig#create}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#delete GameServicesGameServerConfig#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#create GameServicesGameServerConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_config#delete GameServicesGameServerConfig#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GameServicesGameServerConfigFleetConfigsList <a name="GameServicesGameServerConfigFleetConfigsList" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameserverconfig"

gameservicesgameserverconfig.NewGameServicesGameServerConfigFleetConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GameServicesGameServerConfigFleetConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.get"></a>

```go
func Get(index *f64) GameServicesGameServerConfigFleetConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameServicesGameServerConfigFleetConfigsOutputReference <a name="GameServicesGameServerConfigFleetConfigsOutputReference" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameserverconfig"

gameservicesgameserverconfig.NewGameServicesGameServerConfigFleetConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GameServicesGameServerConfigFleetConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.fleetSpecInput">FleetSpecInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.fleetSpec">FleetSpec</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FleetSpecInput`<sup>Optional</sup> <a name="FleetSpecInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.fleetSpecInput"></a>

```go
func FleetSpecInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `FleetSpec`<sup>Required</sup> <a name="FleetSpec" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.fleetSpec"></a>

```go
func FleetSpec() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameServicesGameServerConfigScalingConfigsList <a name="GameServicesGameServerConfigScalingConfigsList" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameserverconfig"

gameservicesgameserverconfig.NewGameServicesGameServerConfigScalingConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GameServicesGameServerConfigScalingConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.get"></a>

```go
func Get(index *f64) GameServicesGameServerConfigScalingConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameServicesGameServerConfigScalingConfigsOutputReference <a name="GameServicesGameServerConfigScalingConfigsOutputReference" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameserverconfig"

gameservicesgameserverconfig.NewGameServicesGameServerConfigScalingConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GameServicesGameServerConfigScalingConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.putSchedules">PutSchedules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.putSelectors">PutSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.resetSchedules">ResetSchedules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.resetSelectors">ResetSelectors</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchedules` <a name="PutSchedules" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.putSchedules"></a>

```go
func PutSchedules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.putSchedules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSelectors` <a name="PutSelectors" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.putSelectors"></a>

```go
func PutSelectors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.putSelectors.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSchedules` <a name="ResetSchedules" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.resetSchedules"></a>

```go
func ResetSchedules()
```

##### `ResetSelectors` <a name="ResetSelectors" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.resetSelectors"></a>

```go
func ResetSelectors()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.schedules">Schedules</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList">GameServicesGameServerConfigScalingConfigsSchedulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.selectors">Selectors</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList">GameServicesGameServerConfigScalingConfigsSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.fleetAutoscalerSpecInput">FleetAutoscalerSpecInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.schedulesInput">SchedulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.selectorsInput">SelectorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.fleetAutoscalerSpec">FleetAutoscalerSpec</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Schedules`<sup>Required</sup> <a name="Schedules" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.schedules"></a>

```go
func Schedules() GameServicesGameServerConfigScalingConfigsSchedulesList
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList">GameServicesGameServerConfigScalingConfigsSchedulesList</a>

---

##### `Selectors`<sup>Required</sup> <a name="Selectors" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.selectors"></a>

```go
func Selectors() GameServicesGameServerConfigScalingConfigsSelectorsList
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList">GameServicesGameServerConfigScalingConfigsSelectorsList</a>

---

##### `FleetAutoscalerSpecInput`<sup>Optional</sup> <a name="FleetAutoscalerSpecInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.fleetAutoscalerSpecInput"></a>

```go
func FleetAutoscalerSpecInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SchedulesInput`<sup>Optional</sup> <a name="SchedulesInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.schedulesInput"></a>

```go
func SchedulesInput() interface{}
```

- *Type:* interface{}

---

##### `SelectorsInput`<sup>Optional</sup> <a name="SelectorsInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.selectorsInput"></a>

```go
func SelectorsInput() interface{}
```

- *Type:* interface{}

---

##### `FleetAutoscalerSpec`<sup>Required</sup> <a name="FleetAutoscalerSpec" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.fleetAutoscalerSpec"></a>

```go
func FleetAutoscalerSpec() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameServicesGameServerConfigScalingConfigsSchedulesList <a name="GameServicesGameServerConfigScalingConfigsSchedulesList" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameserverconfig"

gameservicesgameserverconfig.NewGameServicesGameServerConfigScalingConfigsSchedulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GameServicesGameServerConfigScalingConfigsSchedulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.get"></a>

```go
func Get(index *f64) GameServicesGameServerConfigScalingConfigsSchedulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameServicesGameServerConfigScalingConfigsSchedulesOutputReference <a name="GameServicesGameServerConfigScalingConfigsSchedulesOutputReference" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameserverconfig"

gameservicesgameserverconfig.NewGameServicesGameServerConfigScalingConfigsSchedulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GameServicesGameServerConfigScalingConfigsSchedulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetCronJobDuration">ResetCronJobDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetCronSpec">ResetCronSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCronJobDuration` <a name="ResetCronJobDuration" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetCronJobDuration"></a>

```go
func ResetCronJobDuration()
```

##### `ResetCronSpec` <a name="ResetCronSpec" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetCronSpec"></a>

```go
func ResetCronSpec()
```

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetEndTime"></a>

```go
func ResetEndTime()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronJobDurationInput">CronJobDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronSpecInput">CronSpecInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronJobDuration">CronJobDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronSpec">CronSpec</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CronJobDurationInput`<sup>Optional</sup> <a name="CronJobDurationInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronJobDurationInput"></a>

```go
func CronJobDurationInput() *string
```

- *Type:* *string

---

##### `CronSpecInput`<sup>Optional</sup> <a name="CronSpecInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronSpecInput"></a>

```go
func CronSpecInput() *string
```

- *Type:* *string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `CronJobDuration`<sup>Required</sup> <a name="CronJobDuration" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronJobDuration"></a>

```go
func CronJobDuration() *string
```

- *Type:* *string

---

##### `CronSpec`<sup>Required</sup> <a name="CronSpec" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronSpec"></a>

```go
func CronSpec() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameServicesGameServerConfigScalingConfigsSelectorsList <a name="GameServicesGameServerConfigScalingConfigsSelectorsList" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameserverconfig"

gameservicesgameserverconfig.NewGameServicesGameServerConfigScalingConfigsSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GameServicesGameServerConfigScalingConfigsSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.get"></a>

```go
func Get(index *f64) GameServicesGameServerConfigScalingConfigsSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameServicesGameServerConfigScalingConfigsSelectorsOutputReference <a name="GameServicesGameServerConfigScalingConfigsSelectorsOutputReference" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameserverconfig"

gameservicesgameserverconfig.NewGameServicesGameServerConfigScalingConfigsSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GameServicesGameServerConfigScalingConfigsSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.resetLabels"></a>

```go
func ResetLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameServicesGameServerConfigTimeoutsOutputReference <a name="GameServicesGameServerConfigTimeoutsOutputReference" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameserverconfig"

gameservicesgameserverconfig.NewGameServicesGameServerConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GameServicesGameServerConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



