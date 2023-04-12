# `gameServicesGameServerCluster` Submodule <a name="`gameServicesGameServerCluster` Submodule" id="@cdktf/provider-google.gameServicesGameServerCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameServicesGameServerCluster <a name="GameServicesGameServerCluster" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster google_game_services_game_server_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameservercluster"

gameservicesgameservercluster.NewGameServicesGameServerCluster(scope Construct, id *string, config GameServicesGameServerClusterConfig) GameServicesGameServerCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig">GameServicesGameServerClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig">GameServicesGameServerClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.putConnectionInfo">PutConnectionInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutConnectionInfo` <a name="PutConnectionInfo" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.putConnectionInfo"></a>

```go
func PutConnectionInfo(value GameServicesGameServerClusterConnectionInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.putConnectionInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo">GameServicesGameServerClusterConnectionInfo</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.putTimeouts"></a>

```go
func PutTimeouts(value GameServicesGameServerClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts">GameServicesGameServerClusterTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameservercluster"

gameservicesgameservercluster.GameServicesGameServerCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameservercluster"

gameservicesgameservercluster.GameServicesGameServerCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameservercluster"

gameservicesgameservercluster.GameServicesGameServerCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.connectionInfo">ConnectionInfo</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference">GameServicesGameServerClusterConnectionInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference">GameServicesGameServerClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.connectionInfoInput">ConnectionInfoInput</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo">GameServicesGameServerClusterConnectionInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.realmIdInput">RealmIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.realmId">RealmId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionInfo`<sup>Required</sup> <a name="ConnectionInfo" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.connectionInfo"></a>

```go
func ConnectionInfo() GameServicesGameServerClusterConnectionInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference">GameServicesGameServerClusterConnectionInfoOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.timeouts"></a>

```go
func Timeouts() GameServicesGameServerClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference">GameServicesGameServerClusterTimeoutsOutputReference</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `ConnectionInfoInput`<sup>Optional</sup> <a name="ConnectionInfoInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.connectionInfoInput"></a>

```go
func ConnectionInfoInput() GameServicesGameServerClusterConnectionInfo
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo">GameServicesGameServerClusterConnectionInfo</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RealmIdInput`<sup>Optional</sup> <a name="RealmIdInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.realmIdInput"></a>

```go
func RealmIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RealmId`<sup>Required</sup> <a name="RealmId" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.realmId"></a>

```go
func RealmId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GameServicesGameServerClusterConfig <a name="GameServicesGameServerClusterConfig" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameservercluster"

&gameservicesgameservercluster.GameServicesGameServerClusterConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterId: *string,
	ConnectionInfo: github.com/cdktf/cdktf-provider-google-go/google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo,
	RealmId: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Required. The resource name of the game server cluster. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.connectionInfo">ConnectionInfo</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo">GameServicesGameServerClusterConnectionInfo</a></code> | connection_info block. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.realmId">RealmId</a></code> | <code>*string</code> | The realm id of the game server realm. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.description">Description</a></code> | <code>*string</code> | Human readable description of the cluster. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#id GameServicesGameServerCluster#id}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels associated with this game server cluster. Each label is a key-value pair. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.location">Location</a></code> | <code>*string</code> | Location of the Cluster. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#project GameServicesGameServerCluster#project}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts">GameServicesGameServerClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Required. The resource name of the game server cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#cluster_id GameServicesGameServerCluster#cluster_id}

---

##### `ConnectionInfo`<sup>Required</sup> <a name="ConnectionInfo" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.connectionInfo"></a>

```go
ConnectionInfo GameServicesGameServerClusterConnectionInfo
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo">GameServicesGameServerClusterConnectionInfo</a>

connection_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#connection_info GameServicesGameServerCluster#connection_info}

---

##### `RealmId`<sup>Required</sup> <a name="RealmId" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.realmId"></a>

```go
RealmId *string
```

- *Type:* *string

The realm id of the game server realm.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#realm_id GameServicesGameServerCluster#realm_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human readable description of the cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#description GameServicesGameServerCluster#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#id GameServicesGameServerCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels associated with this game server cluster. Each label is a key-value pair.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#labels GameServicesGameServerCluster#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Location of the Cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#location GameServicesGameServerCluster#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#project GameServicesGameServerCluster#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.timeouts"></a>

```go
Timeouts GameServicesGameServerClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts">GameServicesGameServerClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#timeouts GameServicesGameServerCluster#timeouts}

---

### GameServicesGameServerClusterConnectionInfo <a name="GameServicesGameServerClusterConnectionInfo" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameservercluster"

&gameservicesgameservercluster.GameServicesGameServerClusterConnectionInfo {
	GkeClusterReference: github.com/cdktf/cdktf-provider-google-go/google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo.property.gkeClusterReference">GkeClusterReference</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference">GameServicesGameServerClusterConnectionInfoGkeClusterReference</a></code> | gke_cluster_reference block. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo.property.namespace">Namespace</a></code> | <code>*string</code> | Namespace designated on the game server cluster where the game server instances will be created. |

---

##### `GkeClusterReference`<sup>Required</sup> <a name="GkeClusterReference" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo.property.gkeClusterReference"></a>

```go
GkeClusterReference GameServicesGameServerClusterConnectionInfoGkeClusterReference
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference">GameServicesGameServerClusterConnectionInfoGkeClusterReference</a>

gke_cluster_reference block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#gke_cluster_reference GameServicesGameServerCluster#gke_cluster_reference}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Namespace designated on the game server cluster where the game server instances will be created.

The namespace existence will be validated
during creation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#namespace GameServicesGameServerCluster#namespace}

---

### GameServicesGameServerClusterConnectionInfoGkeClusterReference <a name="GameServicesGameServerClusterConnectionInfoGkeClusterReference" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameservercluster"

&gameservicesgameservercluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference {
	Cluster: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference.property.cluster">Cluster</a></code> | <code>*string</code> | The full or partial name of a GKE cluster, using one of the following forms:. |

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference.property.cluster"></a>

```go
Cluster *string
```

- *Type:* *string

The full or partial name of a GKE cluster, using one of the following forms:.

'projects/{project_id}/locations/{location}/clusters/{cluster_id}'
'locations/{location}/clusters/{cluster_id}'
'{cluster_id}'

If project and location are not specified, the project and location of the
GameServerCluster resource are used to generate the full name of the
GKE cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#cluster GameServicesGameServerCluster#cluster}

---

### GameServicesGameServerClusterTimeouts <a name="GameServicesGameServerClusterTimeouts" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameservercluster"

&gameservicesgameservercluster.GameServicesGameServerClusterTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#create GameServicesGameServerCluster#create}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#delete GameServicesGameServerCluster#delete}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#update GameServicesGameServerCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#create GameServicesGameServerCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#delete GameServicesGameServerCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#update GameServicesGameServerCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference <a name="GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameservercluster"

gameservicesgameservercluster.NewGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.clusterInput">ClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.cluster">Cluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference">GameServicesGameServerClusterConnectionInfoGkeClusterReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.clusterInput"></a>

```go
func ClusterInput() *string
```

- *Type:* *string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.cluster"></a>

```go
func Cluster() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() GameServicesGameServerClusterConnectionInfoGkeClusterReference
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference">GameServicesGameServerClusterConnectionInfoGkeClusterReference</a>

---


### GameServicesGameServerClusterConnectionInfoOutputReference <a name="GameServicesGameServerClusterConnectionInfoOutputReference" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameservercluster"

gameservicesgameservercluster.NewGameServicesGameServerClusterConnectionInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GameServicesGameServerClusterConnectionInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.putGkeClusterReference">PutGkeClusterReference</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGkeClusterReference` <a name="PutGkeClusterReference" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.putGkeClusterReference"></a>

```go
func PutGkeClusterReference(value GameServicesGameServerClusterConnectionInfoGkeClusterReference)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.putGkeClusterReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference">GameServicesGameServerClusterConnectionInfoGkeClusterReference</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.gkeClusterReference">GkeClusterReference</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference">GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.gkeClusterReferenceInput">GkeClusterReferenceInput</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference">GameServicesGameServerClusterConnectionInfoGkeClusterReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo">GameServicesGameServerClusterConnectionInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GkeClusterReference`<sup>Required</sup> <a name="GkeClusterReference" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.gkeClusterReference"></a>

```go
func GkeClusterReference() GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference">GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference</a>

---

##### `GkeClusterReferenceInput`<sup>Optional</sup> <a name="GkeClusterReferenceInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.gkeClusterReferenceInput"></a>

```go
func GkeClusterReferenceInput() GameServicesGameServerClusterConnectionInfoGkeClusterReference
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference">GameServicesGameServerClusterConnectionInfoGkeClusterReference</a>

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() GameServicesGameServerClusterConnectionInfo
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo">GameServicesGameServerClusterConnectionInfo</a>

---


### GameServicesGameServerClusterTimeoutsOutputReference <a name="GameServicesGameServerClusterTimeoutsOutputReference" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gameservicesgameservercluster"

gameservicesgameservercluster.NewGameServicesGameServerClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GameServicesGameServerClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



