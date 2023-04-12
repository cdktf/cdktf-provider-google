# `dataGoogleGameServicesGameServerDeploymentRollout` Submodule <a name="`dataGoogleGameServicesGameServerDeploymentRollout` Submodule" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleGameServicesGameServerDeploymentRollout <a name="DataGoogleGameServicesGameServerDeploymentRollout" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/game_services_game_server_deployment_rollout google_game_services_game_server_deployment_rollout}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglegameservicesgameserverdeploymentrollout"

datagooglegameservicesgameserverdeploymentrollout.NewDataGoogleGameServicesGameServerDeploymentRollout(scope Construct, id *string, config DataGoogleGameServicesGameServerDeploymentRolloutConfig) DataGoogleGameServicesGameServerDeploymentRollout
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig">DataGoogleGameServicesGameServerDeploymentRolloutConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig">DataGoogleGameServicesGameServerDeploymentRolloutConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglegameservicesgameserverdeploymentrollout"

datagooglegameservicesgameserverdeploymentrollout.DataGoogleGameServicesGameServerDeploymentRollout_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglegameservicesgameserverdeploymentrollout"

datagooglegameservicesgameserverdeploymentrollout.DataGoogleGameServicesGameServerDeploymentRollout_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglegameservicesgameserverdeploymentrollout"

datagooglegameservicesgameserverdeploymentrollout.DataGoogleGameServicesGameServerDeploymentRollout_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.defaultGameServerConfig">DefaultGameServerConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.gameServerConfigOverrides">GameServerConfigOverrides</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList">DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.deploymentIdInput">DeploymentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DefaultGameServerConfig`<sup>Required</sup> <a name="DefaultGameServerConfig" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.defaultGameServerConfig"></a>

```go
func DefaultGameServerConfig() *string
```

- *Type:* *string

---

##### `GameServerConfigOverrides`<sup>Required</sup> <a name="GameServerConfigOverrides" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.gameServerConfigOverrides"></a>

```go
func GameServerConfigOverrides() DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList">DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `DeploymentIdInput`<sup>Optional</sup> <a name="DeploymentIdInput" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.deploymentIdInput"></a>

```go
func DeploymentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.deploymentId"></a>

```go
func DeploymentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRollout.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleGameServicesGameServerDeploymentRolloutConfig <a name="DataGoogleGameServicesGameServerDeploymentRolloutConfig" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglegameservicesgameserverdeploymentrollout"

&datagooglegameservicesgameserverdeploymentrollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DeploymentId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | The deployment to rollout the new config to. Only 1 rollout must be associated with each deployment. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/game_services_game_server_deployment_rollout#id DataGoogleGameServicesGameServerDeploymentRollout#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.deploymentId"></a>

```go
DeploymentId *string
```

- *Type:* *string

The deployment to rollout the new config to. Only 1 rollout must be associated with each deployment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/game_services_game_server_deployment_rollout#deployment_id DataGoogleGameServicesGameServerDeploymentRollout#deployment_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/game_services_game_server_deployment_rollout#id DataGoogleGameServicesGameServerDeploymentRollout#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides <a name="DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglegameservicesgameserverdeploymentrollout"

&datagooglegameservicesgameserverdeploymentrollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides {

}
```


### DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector <a name="DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglegameservicesgameserverdeploymentrollout"

&datagooglegameservicesgameserverdeploymentrollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList <a name="DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglegameservicesgameserverdeploymentrollout"

datagooglegameservicesgameserverdeploymentrollout.NewDataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.get"></a>

```go
func Get(index *f64) DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference <a name="DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglegameservicesgameserverdeploymentrollout"

datagooglegameservicesgameserverdeploymentrollout.NewDataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.configVersion">ConfigVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.realmsSelector">RealmsSelector</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList">DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides">DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigVersion`<sup>Required</sup> <a name="ConfigVersion" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.configVersion"></a>

```go
func ConfigVersion() *string
```

- *Type:* *string

---

##### `RealmsSelector`<sup>Required</sup> <a name="RealmsSelector" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.realmsSelector"></a>

```go
func RealmsSelector() DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList">DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides">DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>

---


### DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList <a name="DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglegameservicesgameserverdeploymentrollout"

datagooglegameservicesgameserverdeploymentrollout.NewDataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.get"></a>

```go
func Get(index *f64) DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference <a name="DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglegameservicesgameserverdeploymentrollout"

datagooglegameservicesgameserverdeploymentrollout.NewDataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.realms">Realms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Realms`<sup>Required</sup> <a name="Realms" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.realms"></a>

```go
func Realms() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleGameServicesGameServerDeploymentRollout.DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a>

---



