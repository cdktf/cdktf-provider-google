# `networkConnectivityPolicyBasedRoute` Submodule <a name="`networkConnectivityPolicyBasedRoute` Submodule" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectivityPolicyBasedRoute <a name="NetworkConnectivityPolicyBasedRoute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_connectivity_policy_based_route google_network_connectivity_policy_based_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivitypolicybasedroute"

networkconnectivitypolicybasedroute.NewNetworkConnectivityPolicyBasedRoute(scope Construct, id *string, config NetworkConnectivityPolicyBasedRouteConfig) NetworkConnectivityPolicyBasedRoute
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig">NetworkConnectivityPolicyBasedRouteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig">NetworkConnectivityPolicyBasedRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putInterconnectAttachment">PutInterconnectAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putVirtualMachine">PutVirtualMachine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetInterconnectAttachment">ResetInterconnectAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetNextHopIlbIp">ResetNextHopIlbIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetNextHopOtherRoutes">ResetNextHopOtherRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetVirtualMachine">ResetVirtualMachine</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putFilter"></a>

```go
func PutFilter(value NetworkConnectivityPolicyBasedRouteFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter">NetworkConnectivityPolicyBasedRouteFilter</a>

---

##### `PutInterconnectAttachment` <a name="PutInterconnectAttachment" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putInterconnectAttachment"></a>

```go
func PutInterconnectAttachment(value NetworkConnectivityPolicyBasedRouteInterconnectAttachment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putInterconnectAttachment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment">NetworkConnectivityPolicyBasedRouteInterconnectAttachment</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putTimeouts"></a>

```go
func PutTimeouts(value NetworkConnectivityPolicyBasedRouteTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts">NetworkConnectivityPolicyBasedRouteTimeouts</a>

---

##### `PutVirtualMachine` <a name="PutVirtualMachine" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putVirtualMachine"></a>

```go
func PutVirtualMachine(value NetworkConnectivityPolicyBasedRouteVirtualMachine)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putVirtualMachine.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine">NetworkConnectivityPolicyBasedRouteVirtualMachine</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetId"></a>

```go
func ResetId()
```

##### `ResetInterconnectAttachment` <a name="ResetInterconnectAttachment" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetInterconnectAttachment"></a>

```go
func ResetInterconnectAttachment()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetNextHopIlbIp` <a name="ResetNextHopIlbIp" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetNextHopIlbIp"></a>

```go
func ResetNextHopIlbIp()
```

##### `ResetNextHopOtherRoutes` <a name="ResetNextHopOtherRoutes" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetNextHopOtherRoutes"></a>

```go
func ResetNextHopOtherRoutes()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVirtualMachine` <a name="ResetVirtualMachine" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetVirtualMachine"></a>

```go
func ResetVirtualMachine()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkConnectivityPolicyBasedRoute resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivitypolicybasedroute"

networkconnectivitypolicybasedroute.NetworkConnectivityPolicyBasedRoute_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivitypolicybasedroute"

networkconnectivitypolicybasedroute.NetworkConnectivityPolicyBasedRoute_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivitypolicybasedroute"

networkconnectivitypolicybasedroute.NetworkConnectivityPolicyBasedRoute_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivitypolicybasedroute"

networkconnectivitypolicybasedroute.NetworkConnectivityPolicyBasedRoute_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetworkConnectivityPolicyBasedRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkConnectivityPolicyBasedRoute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkConnectivityPolicyBasedRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_connectivity_policy_based_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetworkConnectivityPolicyBasedRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference">NetworkConnectivityPolicyBasedRouteFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.interconnectAttachment">InterconnectAttachment</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference">NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference">NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.virtualMachine">VirtualMachine</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference">NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.warnings">Warnings</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList">NetworkConnectivityPolicyBasedRouteWarningsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter">NetworkConnectivityPolicyBasedRouteFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.interconnectAttachmentInput">InterconnectAttachmentInput</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment">NetworkConnectivityPolicyBasedRouteInterconnectAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.nextHopIlbIpInput">NextHopIlbIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.nextHopOtherRoutesInput">NextHopOtherRoutesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.virtualMachineInput">VirtualMachineInput</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine">NetworkConnectivityPolicyBasedRouteVirtualMachine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.nextHopIlbIp">NextHopIlbIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.nextHopOtherRoutes">NextHopOtherRoutes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.filter"></a>

```go
func Filter() NetworkConnectivityPolicyBasedRouteFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference">NetworkConnectivityPolicyBasedRouteFilterOutputReference</a>

---

##### `InterconnectAttachment`<sup>Required</sup> <a name="InterconnectAttachment" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.interconnectAttachment"></a>

```go
func InterconnectAttachment() NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference">NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference</a>

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.timeouts"></a>

```go
func Timeouts() NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference">NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `VirtualMachine`<sup>Required</sup> <a name="VirtualMachine" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.virtualMachine"></a>

```go
func VirtualMachine() NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference">NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference</a>

---

##### `Warnings`<sup>Required</sup> <a name="Warnings" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.warnings"></a>

```go
func Warnings() NetworkConnectivityPolicyBasedRouteWarningsList
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList">NetworkConnectivityPolicyBasedRouteWarningsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.filterInput"></a>

```go
func FilterInput() NetworkConnectivityPolicyBasedRouteFilter
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter">NetworkConnectivityPolicyBasedRouteFilter</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InterconnectAttachmentInput`<sup>Optional</sup> <a name="InterconnectAttachmentInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.interconnectAttachmentInput"></a>

```go
func InterconnectAttachmentInput() NetworkConnectivityPolicyBasedRouteInterconnectAttachment
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment">NetworkConnectivityPolicyBasedRouteInterconnectAttachment</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `NextHopIlbIpInput`<sup>Optional</sup> <a name="NextHopIlbIpInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.nextHopIlbIpInput"></a>

```go
func NextHopIlbIpInput() *string
```

- *Type:* *string

---

##### `NextHopOtherRoutesInput`<sup>Optional</sup> <a name="NextHopOtherRoutesInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.nextHopOtherRoutesInput"></a>

```go
func NextHopOtherRoutesInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualMachineInput`<sup>Optional</sup> <a name="VirtualMachineInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.virtualMachineInput"></a>

```go
func VirtualMachineInput() NetworkConnectivityPolicyBasedRouteVirtualMachine
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine">NetworkConnectivityPolicyBasedRouteVirtualMachine</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `NextHopIlbIp`<sup>Required</sup> <a name="NextHopIlbIp" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.nextHopIlbIp"></a>

```go
func NextHopIlbIp() *string
```

- *Type:* *string

---

##### `NextHopOtherRoutes`<sup>Required</sup> <a name="NextHopOtherRoutes" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.nextHopOtherRoutes"></a>

```go
func NextHopOtherRoutes() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectivityPolicyBasedRouteConfig <a name="NetworkConnectivityPolicyBasedRouteConfig" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivitypolicybasedroute"

&networkconnectivitypolicybasedroute.NetworkConnectivityPolicyBasedRouteConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Filter: github.com/cdktf/cdktf-provider-google-go/google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter,
	Name: *string,
	Network: *string,
	Description: *string,
	Id: *string,
	InterconnectAttachment: github.com/cdktf/cdktf-provider-google-go/google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment,
	Labels: *map[string]*string,
	NextHopIlbIp: *string,
	NextHopOtherRoutes: *string,
	Priority: *f64,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts,
	VirtualMachine: github.com/cdktf/cdktf-provider-google-go/google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter">NetworkConnectivityPolicyBasedRouteFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.name">Name</a></code> | <code>*string</code> | The name of the policy based route. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.network">Network</a></code> | <code>*string</code> | Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_connectivity_policy_based_route#id NetworkConnectivityPolicyBasedRoute#id}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.interconnectAttachment">InterconnectAttachment</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment">NetworkConnectivityPolicyBasedRouteInterconnectAttachment</a></code> | interconnect_attachment block. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.nextHopIlbIp">NextHopIlbIp</a></code> | <code>*string</code> | The IP address of a global-access-enabled L4 ILB that is the next hop for matching packets. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.nextHopOtherRoutes">NextHopOtherRoutes</a></code> | <code>*string</code> | Other routes that will be referenced to determine the next hop of the packet. Possible values: ["DEFAULT_ROUTING"]. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.priority">Priority</a></code> | <code>*f64</code> | The priority of this policy-based route. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_connectivity_policy_based_route#project NetworkConnectivityPolicyBasedRoute#project}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts">NetworkConnectivityPolicyBasedRouteTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.virtualMachine">VirtualMachine</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine">NetworkConnectivityPolicyBasedRouteVirtualMachine</a></code> | virtual_machine block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.filter"></a>

```go
Filter NetworkConnectivityPolicyBasedRouteFilter
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter">NetworkConnectivityPolicyBasedRouteFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_connectivity_policy_based_route#filter NetworkConnectivityPolicyBasedRoute#filter}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the policy based route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_connectivity_policy_based_route#name NetworkConnectivityPolicyBasedRoute#name}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_connectivity_policy_based_route#network NetworkConnectivityPolicyBasedRoute#network}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_connectivity_policy_based_route#description NetworkConnectivityPolicyBasedRoute#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_connectivity_policy_based_route#id NetworkConnectivityPolicyBasedRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InterconnectAttachment`<sup>Optional</sup> <a name="InterconnectAttachment" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.interconnectAttachment"></a>

```go
InterconnectAttachment NetworkConnectivityPolicyBasedRouteInterconnectAttachment
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment">NetworkConnectivityPolicyBasedRouteInterconnectAttachment</a>

interconnect_attachment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_connectivity_policy_based_route#interconnect_attachment NetworkConnectivityPolicyBasedRoute#interconnect_attachment}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_connectivity_policy_based_route#labels NetworkConnectivityPolicyBasedRoute#labels}

---

##### `NextHopIlbIp`<sup>Optional</sup> <a name="NextHopIlbIp" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.nextHopIlbIp"></a>

```go
NextHopIlbIp *string
```

- *Type:* *string

The IP address of a global-access-enabled L4 ILB that is the next hop for matching packets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_connectivity_policy_based_route#next_hop_ilb_ip NetworkConnectivityPolicyBasedRoute#next_hop_ilb_ip}

---

##### `NextHopOtherRoutes`<sup>Optional</sup> <a name="NextHopOtherRoutes" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.nextHopOtherRoutes"></a>

```go
NextHopOtherRoutes *string
```

- *Type:* *string

Other routes that will be referenced to determine the next hop of the packet. Possible values: ["DEFAULT_ROUTING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_connectivity_policy_based_route#next_hop_other_routes NetworkConnectivityPolicyBasedRoute#next_hop_other_routes}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

The priority of this policy-based route.

Priority is used to break ties in cases where there are more than one matching policy-based routes found. In cases where multiple policy-based routes are matched, the one with the lowest-numbered priority value wins. The default value is 1000. The priority value must be from 1 to 65535, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_connectivity_policy_based_route#priority NetworkConnectivityPolicyBasedRoute#priority}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_connectivity_policy_based_route#project NetworkConnectivityPolicyBasedRoute#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.timeouts"></a>

```go
Timeouts NetworkConnectivityPolicyBasedRouteTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts">NetworkConnectivityPolicyBasedRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_connectivity_policy_based_route#timeouts NetworkConnectivityPolicyBasedRoute#timeouts}

---

##### `VirtualMachine`<sup>Optional</sup> <a name="VirtualMachine" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.virtualMachine"></a>

```go
VirtualMachine NetworkConnectivityPolicyBasedRouteVirtualMachine
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine">NetworkConnectivityPolicyBasedRouteVirtualMachine</a>

virtual_machine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_connectivity_policy_based_route#virtual_machine NetworkConnectivityPolicyBasedRoute#virtual_machine}

---

### NetworkConnectivityPolicyBasedRouteFilter <a name="NetworkConnectivityPolicyBasedRouteFilter" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivitypolicybasedroute"

&networkconnectivitypolicybasedroute.NetworkConnectivityPolicyBasedRouteFilter {
	ProtocolVersion: *string,
	DestRange: *string,
	IpProtocol: *string,
	SrcRange: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter.property.protocolVersion">ProtocolVersion</a></code> | <code>*string</code> | Internet protocol versions this policy-based route applies to. Possible values: ["IPV4"]. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter.property.destRange">DestRange</a></code> | <code>*string</code> | The destination IP range of outgoing packets that this policy-based route applies to. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | The IP protocol that this policy-based route applies to. Valid values are 'TCP', 'UDP', and 'ALL'. Default is 'ALL'. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter.property.srcRange">SrcRange</a></code> | <code>*string</code> | The source IP range of outgoing packets that this policy-based route applies to. |

---

##### `ProtocolVersion`<sup>Required</sup> <a name="ProtocolVersion" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter.property.protocolVersion"></a>

```go
ProtocolVersion *string
```

- *Type:* *string

Internet protocol versions this policy-based route applies to. Possible values: ["IPV4"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_connectivity_policy_based_route#protocol_version NetworkConnectivityPolicyBasedRoute#protocol_version}

---

##### `DestRange`<sup>Optional</sup> <a name="DestRange" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter.property.destRange"></a>

```go
DestRange *string
```

- *Type:* *string

The destination IP range of outgoing packets that this policy-based route applies to.

Default is "0.0.0.0/0" if protocol version is IPv4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_connectivity_policy_based_route#dest_range NetworkConnectivityPolicyBasedRoute#dest_range}

---

##### `IpProtocol`<sup>Optional</sup> <a name="IpProtocol" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter.property.ipProtocol"></a>

```go
IpProtocol *string
```

- *Type:* *string

The IP protocol that this policy-based route applies to. Valid values are 'TCP', 'UDP', and 'ALL'. Default is 'ALL'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_connectivity_policy_based_route#ip_protocol NetworkConnectivityPolicyBasedRoute#ip_protocol}

---

##### `SrcRange`<sup>Optional</sup> <a name="SrcRange" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter.property.srcRange"></a>

```go
SrcRange *string
```

- *Type:* *string

The source IP range of outgoing packets that this policy-based route applies to.

Default is "0.0.0.0/0" if protocol version is IPv4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_connectivity_policy_based_route#src_range NetworkConnectivityPolicyBasedRoute#src_range}

---

### NetworkConnectivityPolicyBasedRouteInterconnectAttachment <a name="NetworkConnectivityPolicyBasedRouteInterconnectAttachment" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivitypolicybasedroute"

&networkconnectivitypolicybasedroute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment {
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment.property.region">Region</a></code> | <code>*string</code> | Cloud region to install this policy-based route on for Interconnect attachments. |

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment.property.region"></a>

```go
Region *string
```

- *Type:* *string

Cloud region to install this policy-based route on for Interconnect attachments.

Use 'all' to install it on all Interconnect attachments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_connectivity_policy_based_route#region NetworkConnectivityPolicyBasedRoute#region}

---

### NetworkConnectivityPolicyBasedRouteTimeouts <a name="NetworkConnectivityPolicyBasedRouteTimeouts" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivitypolicybasedroute"

&networkconnectivitypolicybasedroute.NetworkConnectivityPolicyBasedRouteTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_connectivity_policy_based_route#create NetworkConnectivityPolicyBasedRoute#create}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_connectivity_policy_based_route#delete NetworkConnectivityPolicyBasedRoute#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_connectivity_policy_based_route#create NetworkConnectivityPolicyBasedRoute#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_connectivity_policy_based_route#delete NetworkConnectivityPolicyBasedRoute#delete}.

---

### NetworkConnectivityPolicyBasedRouteVirtualMachine <a name="NetworkConnectivityPolicyBasedRouteVirtualMachine" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivitypolicybasedroute"

&networkconnectivitypolicybasedroute.NetworkConnectivityPolicyBasedRouteVirtualMachine {
	Tags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine.property.tags">Tags</a></code> | <code>*[]*string</code> | A list of VM instance tags that this policy-based route applies to. |

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

A list of VM instance tags that this policy-based route applies to.

VM instances that have ANY of tags specified here will install this PBR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/network_connectivity_policy_based_route#tags NetworkConnectivityPolicyBasedRoute#tags}

---

### NetworkConnectivityPolicyBasedRouteWarnings <a name="NetworkConnectivityPolicyBasedRouteWarnings" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarnings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarnings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivitypolicybasedroute"

&networkconnectivitypolicybasedroute.NetworkConnectivityPolicyBasedRouteWarnings {

}
```


## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectivityPolicyBasedRouteFilterOutputReference <a name="NetworkConnectivityPolicyBasedRouteFilterOutputReference" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivitypolicybasedroute"

networkconnectivitypolicybasedroute.NewNetworkConnectivityPolicyBasedRouteFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkConnectivityPolicyBasedRouteFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.resetDestRange">ResetDestRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.resetIpProtocol">ResetIpProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.resetSrcRange">ResetSrcRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestRange` <a name="ResetDestRange" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.resetDestRange"></a>

```go
func ResetDestRange()
```

##### `ResetIpProtocol` <a name="ResetIpProtocol" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.resetIpProtocol"></a>

```go
func ResetIpProtocol()
```

##### `ResetSrcRange` <a name="ResetSrcRange" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.resetSrcRange"></a>

```go
func ResetSrcRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.destRangeInput">DestRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.ipProtocolInput">IpProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.protocolVersionInput">ProtocolVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.srcRangeInput">SrcRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.destRange">DestRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.protocolVersion">ProtocolVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.srcRange">SrcRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter">NetworkConnectivityPolicyBasedRouteFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestRangeInput`<sup>Optional</sup> <a name="DestRangeInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.destRangeInput"></a>

```go
func DestRangeInput() *string
```

- *Type:* *string

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.ipProtocolInput"></a>

```go
func IpProtocolInput() *string
```

- *Type:* *string

---

##### `ProtocolVersionInput`<sup>Optional</sup> <a name="ProtocolVersionInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.protocolVersionInput"></a>

```go
func ProtocolVersionInput() *string
```

- *Type:* *string

---

##### `SrcRangeInput`<sup>Optional</sup> <a name="SrcRangeInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.srcRangeInput"></a>

```go
func SrcRangeInput() *string
```

- *Type:* *string

---

##### `DestRange`<sup>Required</sup> <a name="DestRange" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.destRange"></a>

```go
func DestRange() *string
```

- *Type:* *string

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.ipProtocol"></a>

```go
func IpProtocol() *string
```

- *Type:* *string

---

##### `ProtocolVersion`<sup>Required</sup> <a name="ProtocolVersion" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.protocolVersion"></a>

```go
func ProtocolVersion() *string
```

- *Type:* *string

---

##### `SrcRange`<sup>Required</sup> <a name="SrcRange" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.srcRange"></a>

```go
func SrcRange() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkConnectivityPolicyBasedRouteFilter
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter">NetworkConnectivityPolicyBasedRouteFilter</a>

---


### NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference <a name="NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivitypolicybasedroute"

networkconnectivitypolicybasedroute.NewNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment">NetworkConnectivityPolicyBasedRouteInterconnectAttachment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkConnectivityPolicyBasedRouteInterconnectAttachment
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment">NetworkConnectivityPolicyBasedRouteInterconnectAttachment</a>

---


### NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference <a name="NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivitypolicybasedroute"

networkconnectivitypolicybasedroute.NewNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference <a name="NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivitypolicybasedroute"

networkconnectivitypolicybasedroute.NewNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine">NetworkConnectivityPolicyBasedRouteVirtualMachine</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkConnectivityPolicyBasedRouteVirtualMachine
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine">NetworkConnectivityPolicyBasedRouteVirtualMachine</a>

---


### NetworkConnectivityPolicyBasedRouteWarningsList <a name="NetworkConnectivityPolicyBasedRouteWarningsList" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivitypolicybasedroute"

networkconnectivitypolicybasedroute.NewNetworkConnectivityPolicyBasedRouteWarningsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkConnectivityPolicyBasedRouteWarningsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.get"></a>

```go
func Get(index *f64) NetworkConnectivityPolicyBasedRouteWarningsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### NetworkConnectivityPolicyBasedRouteWarningsOutputReference <a name="NetworkConnectivityPolicyBasedRouteWarningsOutputReference" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivitypolicybasedroute"

networkconnectivitypolicybasedroute.NewNetworkConnectivityPolicyBasedRouteWarningsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkConnectivityPolicyBasedRouteWarningsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.data">Data</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.warningMessage">WarningMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarnings">NetworkConnectivityPolicyBasedRouteWarnings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.data"></a>

```go
func Data() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `WarningMessage`<sup>Required</sup> <a name="WarningMessage" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.warningMessage"></a>

```go
func WarningMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkConnectivityPolicyBasedRouteWarnings
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarnings">NetworkConnectivityPolicyBasedRouteWarnings</a>

---



