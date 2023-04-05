# `computeRoute` Submodule <a name="`computeRoute` Submodule" id="@cdktf/provider-google.computeRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRoute <a name="ComputeRoute" id="@cdktf/provider-google.computeRoute.ComputeRoute"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_route google_compute_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRoute.ComputeRoute.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeroute"

computeroute.NewComputeRoute(scope Construct, id *string, config ComputeRouteConfig) ComputeRoute
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig">ComputeRouteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig">ComputeRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.resetNextHopGateway">ResetNextHopGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.resetNextHopIlb">ResetNextHopIlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.resetNextHopInstance">ResetNextHopInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.resetNextHopInstanceZone">ResetNextHopInstanceZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.resetNextHopIp">ResetNextHopIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.resetNextHopVpnTunnel">ResetNextHopVpnTunnel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRoute.ComputeRoute.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeRoute.ComputeRoute.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRoute.ComputeRoute.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRoute.ComputeRoute.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeRoute.ComputeRoute.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRoute.ComputeRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeRoute.ComputeRoute.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeRoute.ComputeRoute.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeRoute.ComputeRoute.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeRoute.ComputeRoute.putTimeouts"></a>

```go
func PutTimeouts(value ComputeRouteTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRoute.ComputeRoute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeouts">ComputeRouteTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeRoute.ComputeRoute.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeRoute.ComputeRoute.resetId"></a>

```go
func ResetId()
```

##### `ResetNextHopGateway` <a name="ResetNextHopGateway" id="@cdktf/provider-google.computeRoute.ComputeRoute.resetNextHopGateway"></a>

```go
func ResetNextHopGateway()
```

##### `ResetNextHopIlb` <a name="ResetNextHopIlb" id="@cdktf/provider-google.computeRoute.ComputeRoute.resetNextHopIlb"></a>

```go
func ResetNextHopIlb()
```

##### `ResetNextHopInstance` <a name="ResetNextHopInstance" id="@cdktf/provider-google.computeRoute.ComputeRoute.resetNextHopInstance"></a>

```go
func ResetNextHopInstance()
```

##### `ResetNextHopInstanceZone` <a name="ResetNextHopInstanceZone" id="@cdktf/provider-google.computeRoute.ComputeRoute.resetNextHopInstanceZone"></a>

```go
func ResetNextHopInstanceZone()
```

##### `ResetNextHopIp` <a name="ResetNextHopIp" id="@cdktf/provider-google.computeRoute.ComputeRoute.resetNextHopIp"></a>

```go
func ResetNextHopIp()
```

##### `ResetNextHopVpnTunnel` <a name="ResetNextHopVpnTunnel" id="@cdktf/provider-google.computeRoute.ComputeRoute.resetNextHopVpnTunnel"></a>

```go
func ResetNextHopVpnTunnel()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-google.computeRoute.ComputeRoute.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeRoute.ComputeRoute.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google.computeRoute.ComputeRoute.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeRoute.ComputeRoute.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeRoute.ComputeRoute.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeroute"

computeroute.ComputeRoute_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRoute.ComputeRoute.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeRoute.ComputeRoute.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeroute"

computeroute.ComputeRoute_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRoute.ComputeRoute.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeRoute.ComputeRoute.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeroute"

computeroute.ComputeRoute_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRoute.ComputeRoute.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopNetwork">NextHopNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference">ComputeRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.destRangeInput">DestRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopGatewayInput">NextHopGatewayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopIlbInput">NextHopIlbInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopInstanceInput">NextHopInstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopInstanceZoneInput">NextHopInstanceZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopIpInput">NextHopIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopVpnTunnelInput">NextHopVpnTunnelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.destRange">DestRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopGateway">NextHopGateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopIlb">NextHopIlb</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopInstance">NextHopInstance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopInstanceZone">NextHopInstanceZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopIp">NextHopIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopVpnTunnel">NextHopVpnTunnel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NextHopNetwork`<sup>Required</sup> <a name="NextHopNetwork" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopNetwork"></a>

```go
func NextHopNetwork() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.timeouts"></a>

```go
func Timeouts() ComputeRouteTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference">ComputeRouteTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DestRangeInput`<sup>Optional</sup> <a name="DestRangeInput" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.destRangeInput"></a>

```go
func DestRangeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `NextHopGatewayInput`<sup>Optional</sup> <a name="NextHopGatewayInput" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopGatewayInput"></a>

```go
func NextHopGatewayInput() *string
```

- *Type:* *string

---

##### `NextHopIlbInput`<sup>Optional</sup> <a name="NextHopIlbInput" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopIlbInput"></a>

```go
func NextHopIlbInput() *string
```

- *Type:* *string

---

##### `NextHopInstanceInput`<sup>Optional</sup> <a name="NextHopInstanceInput" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopInstanceInput"></a>

```go
func NextHopInstanceInput() *string
```

- *Type:* *string

---

##### `NextHopInstanceZoneInput`<sup>Optional</sup> <a name="NextHopInstanceZoneInput" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopInstanceZoneInput"></a>

```go
func NextHopInstanceZoneInput() *string
```

- *Type:* *string

---

##### `NextHopIpInput`<sup>Optional</sup> <a name="NextHopIpInput" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopIpInput"></a>

```go
func NextHopIpInput() *string
```

- *Type:* *string

---

##### `NextHopVpnTunnelInput`<sup>Optional</sup> <a name="NextHopVpnTunnelInput" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopVpnTunnelInput"></a>

```go
func NextHopVpnTunnelInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DestRange`<sup>Required</sup> <a name="DestRange" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.destRange"></a>

```go
func DestRange() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `NextHopGateway`<sup>Required</sup> <a name="NextHopGateway" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopGateway"></a>

```go
func NextHopGateway() *string
```

- *Type:* *string

---

##### `NextHopIlb`<sup>Required</sup> <a name="NextHopIlb" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopIlb"></a>

```go
func NextHopIlb() *string
```

- *Type:* *string

---

##### `NextHopInstance`<sup>Required</sup> <a name="NextHopInstance" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopInstance"></a>

```go
func NextHopInstance() *string
```

- *Type:* *string

---

##### `NextHopInstanceZone`<sup>Required</sup> <a name="NextHopInstanceZone" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopInstanceZone"></a>

```go
func NextHopInstanceZone() *string
```

- *Type:* *string

---

##### `NextHopIp`<sup>Required</sup> <a name="NextHopIp" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopIp"></a>

```go
func NextHopIp() *string
```

- *Type:* *string

---

##### `NextHopVpnTunnel`<sup>Required</sup> <a name="NextHopVpnTunnel" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopVpnTunnel"></a>

```go
func NextHopVpnTunnel() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRouteConfig <a name="ComputeRouteConfig" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeroute"

&computeroute.ComputeRouteConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DestRange: *string,
	Name: *string,
	Network: *string,
	Description: *string,
	Id: *string,
	NextHopGateway: *string,
	NextHopIlb: *string,
	NextHopInstance: *string,
	NextHopInstanceZone: *string,
	NextHopIp: *string,
	NextHopVpnTunnel: *string,
	Priority: *f64,
	Project: *string,
	Tags: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeRoute.ComputeRouteTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.destRange">DestRange</a></code> | <code>*string</code> | The destination range of outgoing packets that this route applies to. Only IPv4 is supported. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.network">Network</a></code> | <code>*string</code> | The network that this route applies to. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route#id ComputeRoute#id}. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.nextHopGateway">NextHopGateway</a></code> | <code>*string</code> | URL to a gateway that should handle matching packets. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.nextHopIlb">NextHopIlb</a></code> | <code>*string</code> | The IP address or URL to a forwarding rule of type loadBalancingScheme=INTERNAL that should handle matching packets. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.nextHopInstance">NextHopInstance</a></code> | <code>*string</code> | URL to an instance that should handle matching packets. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.nextHopInstanceZone">NextHopInstanceZone</a></code> | <code>*string</code> | The zone of the instance specified in next_hop_instance. Omit if next_hop_instance is specified as a URL. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.nextHopIp">NextHopIp</a></code> | <code>*string</code> | Network IP address of an instance that should handle matching packets. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.nextHopVpnTunnel">NextHopVpnTunnel</a></code> | <code>*string</code> | URL to a VpnTunnel that should handle matching packets. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.priority">Priority</a></code> | <code>*f64</code> | The priority of this route. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route#project ComputeRoute#project}. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | A list of instance tags to which this route applies. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeouts">ComputeRouteTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DestRange`<sup>Required</sup> <a name="DestRange" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.destRange"></a>

```go
DestRange *string
```

- *Type:* *string

The destination range of outgoing packets that this route applies to. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route#dest_range ComputeRoute#dest_range}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route#name ComputeRoute#name}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The network that this route applies to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route#network ComputeRoute#network}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route#description ComputeRoute#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route#id ComputeRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NextHopGateway`<sup>Optional</sup> <a name="NextHopGateway" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.nextHopGateway"></a>

```go
NextHopGateway *string
```

- *Type:* *string

URL to a gateway that should handle matching packets.

Currently, you can only specify the internet gateway, using a full or
partial valid URL:
'https://www.googleapis.com/compute/v1/projects/project/global/gateways/default-internet-gateway'
'projects/project/global/gateways/default-internet-gateway'
'global/gateways/default-internet-gateway'
The string 'default-internet-gateway'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route#next_hop_gateway ComputeRoute#next_hop_gateway}

---

##### `NextHopIlb`<sup>Optional</sup> <a name="NextHopIlb" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.nextHopIlb"></a>

```go
NextHopIlb *string
```

- *Type:* *string

The IP address or URL to a forwarding rule of type loadBalancingScheme=INTERNAL that should handle matching packets.

With the GA provider you can only specify the forwarding
rule as a partial or full URL. For example, the following
are all valid values:
10.128.0.56
https://www.googleapis.com/compute/v1/projects/project/regions/region/forwardingRules/forwardingRule
regions/region/forwardingRules/forwardingRule

When the beta provider, you can also specify the IP address
of a forwarding rule from the same VPC or any peered VPC.

Note that this can only be used when the destinationRange is
a public (non-RFC 1918) IP CIDR range.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route#next_hop_ilb ComputeRoute#next_hop_ilb}

---

##### `NextHopInstance`<sup>Optional</sup> <a name="NextHopInstance" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.nextHopInstance"></a>

```go
NextHopInstance *string
```

- *Type:* *string

URL to an instance that should handle matching packets.

You can specify this as a full or partial URL. For example:
'https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/instance'
'projects/project/zones/zone/instances/instance'
'zones/zone/instances/instance'
Just the instance name, with the zone in 'next_hop_instance_zone'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route#next_hop_instance ComputeRoute#next_hop_instance}

---

##### `NextHopInstanceZone`<sup>Optional</sup> <a name="NextHopInstanceZone" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.nextHopInstanceZone"></a>

```go
NextHopInstanceZone *string
```

- *Type:* *string

The zone of the instance specified in next_hop_instance. Omit if next_hop_instance is specified as a URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route#next_hop_instance_zone ComputeRoute#next_hop_instance_zone}

---

##### `NextHopIp`<sup>Optional</sup> <a name="NextHopIp" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.nextHopIp"></a>

```go
NextHopIp *string
```

- *Type:* *string

Network IP address of an instance that should handle matching packets.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route#next_hop_ip ComputeRoute#next_hop_ip}

---

##### `NextHopVpnTunnel`<sup>Optional</sup> <a name="NextHopVpnTunnel" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.nextHopVpnTunnel"></a>

```go
NextHopVpnTunnel *string
```

- *Type:* *string

URL to a VpnTunnel that should handle matching packets.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route#next_hop_vpn_tunnel ComputeRoute#next_hop_vpn_tunnel}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

The priority of this route.

Priority is used to break ties in cases
where there is more than one matching route of equal prefix length.

In the case of two routes with equal prefix length, the one with the
lowest-numbered priority value wins.

Default value is 1000. Valid range is 0 through 65535.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route#priority ComputeRoute#priority}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route#project ComputeRoute#project}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

A list of instance tags to which this route applies.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route#tags ComputeRoute#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.timeouts"></a>

```go
Timeouts ComputeRouteTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeouts">ComputeRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route#timeouts ComputeRoute#timeouts}

---

### ComputeRouteTimeouts <a name="ComputeRouteTimeouts" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeroute"

&computeroute.ComputeRouteTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route#create ComputeRoute#create}. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route#delete ComputeRoute#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route#create ComputeRoute#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_route#delete ComputeRoute#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRouteTimeoutsOutputReference <a name="ComputeRouteTimeoutsOutputReference" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeroute"

computeroute.NewComputeRouteTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRouteTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



