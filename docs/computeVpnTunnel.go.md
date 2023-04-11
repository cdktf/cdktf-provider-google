# `computeVpnTunnel` Submodule <a name="`computeVpnTunnel` Submodule" id="@cdktf/provider-google.computeVpnTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeVpnTunnel <a name="ComputeVpnTunnel" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel google_compute_vpn_tunnel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computevpntunnel"

computevpntunnel.NewComputeVpnTunnel(scope Construct, id *string, config ComputeVpnTunnelConfig) ComputeVpnTunnel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig">ComputeVpnTunnelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig">ComputeVpnTunnelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetIkeVersion">ResetIkeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetLocalTrafficSelector">ResetLocalTrafficSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerExternalGateway">ResetPeerExternalGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerExternalGatewayInterface">ResetPeerExternalGatewayInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerGcpGateway">ResetPeerGcpGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerIp">ResetPeerIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRemoteTrafficSelector">ResetRemoteTrafficSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRouter">ResetRouter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetTargetVpnGateway">ResetTargetVpnGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetVpnGateway">ResetVpnGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetVpnGatewayInterface">ResetVpnGatewayInterface</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.putTimeouts"></a>

```go
func PutTimeouts(value ComputeVpnTunnelTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetId"></a>

```go
func ResetId()
```

##### `ResetIkeVersion` <a name="ResetIkeVersion" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetIkeVersion"></a>

```go
func ResetIkeVersion()
```

##### `ResetLocalTrafficSelector` <a name="ResetLocalTrafficSelector" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetLocalTrafficSelector"></a>

```go
func ResetLocalTrafficSelector()
```

##### `ResetPeerExternalGateway` <a name="ResetPeerExternalGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerExternalGateway"></a>

```go
func ResetPeerExternalGateway()
```

##### `ResetPeerExternalGatewayInterface` <a name="ResetPeerExternalGatewayInterface" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerExternalGatewayInterface"></a>

```go
func ResetPeerExternalGatewayInterface()
```

##### `ResetPeerGcpGateway` <a name="ResetPeerGcpGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerGcpGateway"></a>

```go
func ResetPeerGcpGateway()
```

##### `ResetPeerIp` <a name="ResetPeerIp" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerIp"></a>

```go
func ResetPeerIp()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRemoteTrafficSelector` <a name="ResetRemoteTrafficSelector" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRemoteTrafficSelector"></a>

```go
func ResetRemoteTrafficSelector()
```

##### `ResetRouter` <a name="ResetRouter" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRouter"></a>

```go
func ResetRouter()
```

##### `ResetTargetVpnGateway` <a name="ResetTargetVpnGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetTargetVpnGateway"></a>

```go
func ResetTargetVpnGateway()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVpnGateway` <a name="ResetVpnGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetVpnGateway"></a>

```go
func ResetVpnGateway()
```

##### `ResetVpnGatewayInterface` <a name="ResetVpnGatewayInterface" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetVpnGatewayInterface"></a>

```go
func ResetVpnGatewayInterface()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computevpntunnel"

computevpntunnel.ComputeVpnTunnel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computevpntunnel"

computevpntunnel.ComputeVpnTunnel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computevpntunnel"

computevpntunnel.ComputeVpnTunnel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.detailedStatus">DetailedStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretHash">SharedSecretHash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference">ComputeVpnTunnelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.tunnelId">TunnelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.ikeVersionInput">IkeVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.localTrafficSelectorInput">LocalTrafficSelectorInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInput">PeerExternalGatewayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInterfaceInput">PeerExternalGatewayInterfaceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerGcpGatewayInput">PeerGcpGatewayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerIpInput">PeerIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.remoteTrafficSelectorInput">RemoteTrafficSelectorInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.routerInput">RouterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretInput">SharedSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.targetVpnGatewayInput">TargetVpnGatewayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInput">VpnGatewayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInterfaceInput">VpnGatewayInterfaceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.ikeVersion">IkeVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.localTrafficSelector">LocalTrafficSelector</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGateway">PeerExternalGateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInterface">PeerExternalGatewayInterface</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerGcpGateway">PeerGcpGateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerIp">PeerIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.remoteTrafficSelector">RemoteTrafficSelector</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.router">Router</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecret">SharedSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.targetVpnGateway">TargetVpnGateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGateway">VpnGateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInterface">VpnGatewayInterface</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `DetailedStatus`<sup>Required</sup> <a name="DetailedStatus" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.detailedStatus"></a>

```go
func DetailedStatus() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `SharedSecretHash`<sup>Required</sup> <a name="SharedSecretHash" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretHash"></a>

```go
func SharedSecretHash() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.timeouts"></a>

```go
func Timeouts() ComputeVpnTunnelTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference">ComputeVpnTunnelTimeoutsOutputReference</a>

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.tunnelId"></a>

```go
func TunnelId() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IkeVersionInput`<sup>Optional</sup> <a name="IkeVersionInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.ikeVersionInput"></a>

```go
func IkeVersionInput() *f64
```

- *Type:* *f64

---

##### `LocalTrafficSelectorInput`<sup>Optional</sup> <a name="LocalTrafficSelectorInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.localTrafficSelectorInput"></a>

```go
func LocalTrafficSelectorInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PeerExternalGatewayInput`<sup>Optional</sup> <a name="PeerExternalGatewayInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInput"></a>

```go
func PeerExternalGatewayInput() *string
```

- *Type:* *string

---

##### `PeerExternalGatewayInterfaceInput`<sup>Optional</sup> <a name="PeerExternalGatewayInterfaceInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInterfaceInput"></a>

```go
func PeerExternalGatewayInterfaceInput() *f64
```

- *Type:* *f64

---

##### `PeerGcpGatewayInput`<sup>Optional</sup> <a name="PeerGcpGatewayInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerGcpGatewayInput"></a>

```go
func PeerGcpGatewayInput() *string
```

- *Type:* *string

---

##### `PeerIpInput`<sup>Optional</sup> <a name="PeerIpInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerIpInput"></a>

```go
func PeerIpInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RemoteTrafficSelectorInput`<sup>Optional</sup> <a name="RemoteTrafficSelectorInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.remoteTrafficSelectorInput"></a>

```go
func RemoteTrafficSelectorInput() *[]*string
```

- *Type:* *[]*string

---

##### `RouterInput`<sup>Optional</sup> <a name="RouterInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.routerInput"></a>

```go
func RouterInput() *string
```

- *Type:* *string

---

##### `SharedSecretInput`<sup>Optional</sup> <a name="SharedSecretInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretInput"></a>

```go
func SharedSecretInput() *string
```

- *Type:* *string

---

##### `TargetVpnGatewayInput`<sup>Optional</sup> <a name="TargetVpnGatewayInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.targetVpnGatewayInput"></a>

```go
func TargetVpnGatewayInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpnGatewayInput`<sup>Optional</sup> <a name="VpnGatewayInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInput"></a>

```go
func VpnGatewayInput() *string
```

- *Type:* *string

---

##### `VpnGatewayInterfaceInput`<sup>Optional</sup> <a name="VpnGatewayInterfaceInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInterfaceInput"></a>

```go
func VpnGatewayInterfaceInput() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IkeVersion`<sup>Required</sup> <a name="IkeVersion" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.ikeVersion"></a>

```go
func IkeVersion() *f64
```

- *Type:* *f64

---

##### `LocalTrafficSelector`<sup>Required</sup> <a name="LocalTrafficSelector" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.localTrafficSelector"></a>

```go
func LocalTrafficSelector() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PeerExternalGateway`<sup>Required</sup> <a name="PeerExternalGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGateway"></a>

```go
func PeerExternalGateway() *string
```

- *Type:* *string

---

##### `PeerExternalGatewayInterface`<sup>Required</sup> <a name="PeerExternalGatewayInterface" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInterface"></a>

```go
func PeerExternalGatewayInterface() *f64
```

- *Type:* *f64

---

##### `PeerGcpGateway`<sup>Required</sup> <a name="PeerGcpGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerGcpGateway"></a>

```go
func PeerGcpGateway() *string
```

- *Type:* *string

---

##### `PeerIp`<sup>Required</sup> <a name="PeerIp" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerIp"></a>

```go
func PeerIp() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RemoteTrafficSelector`<sup>Required</sup> <a name="RemoteTrafficSelector" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.remoteTrafficSelector"></a>

```go
func RemoteTrafficSelector() *[]*string
```

- *Type:* *[]*string

---

##### `Router`<sup>Required</sup> <a name="Router" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.router"></a>

```go
func Router() *string
```

- *Type:* *string

---

##### `SharedSecret`<sup>Required</sup> <a name="SharedSecret" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecret"></a>

```go
func SharedSecret() *string
```

- *Type:* *string

---

##### `TargetVpnGateway`<sup>Required</sup> <a name="TargetVpnGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.targetVpnGateway"></a>

```go
func TargetVpnGateway() *string
```

- *Type:* *string

---

##### `VpnGateway`<sup>Required</sup> <a name="VpnGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGateway"></a>

```go
func VpnGateway() *string
```

- *Type:* *string

---

##### `VpnGatewayInterface`<sup>Required</sup> <a name="VpnGatewayInterface" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInterface"></a>

```go
func VpnGatewayInterface() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeVpnTunnelConfig <a name="ComputeVpnTunnelConfig" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computevpntunnel"

&computevpntunnel.ComputeVpnTunnelConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	SharedSecret: *string,
	Description: *string,
	Id: *string,
	IkeVersion: *f64,
	LocalTrafficSelector: *[]*string,
	PeerExternalGateway: *string,
	PeerExternalGatewayInterface: *f64,
	PeerGcpGateway: *string,
	PeerIp: *string,
	Project: *string,
	Region: *string,
	RemoteTrafficSelector: *[]*string,
	Router: *string,
	TargetVpnGateway: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeVpnTunnel.ComputeVpnTunnelTimeouts,
	VpnGateway: *string,
	VpnGatewayInterface: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.sharedSecret">SharedSecret</a></code> | <code>*string</code> | Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel#id ComputeVpnTunnel#id}. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.ikeVersion">IkeVersion</a></code> | <code>*f64</code> | IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.localTrafficSelector">LocalTrafficSelector</a></code> | <code>*[]*string</code> | Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerExternalGateway">PeerExternalGateway</a></code> | <code>*string</code> | URL of the peer side external VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerExternalGatewayInterface">PeerExternalGatewayInterface</a></code> | <code>*f64</code> | The interface ID of the external VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerGcpGateway">PeerGcpGateway</a></code> | <code>*string</code> | URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerIp">PeerIp</a></code> | <code>*string</code> | IP address of the peer VPN gateway. Only IPv4 is supported. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel#project ComputeVpnTunnel#project}. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.region">Region</a></code> | <code>*string</code> | The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.remoteTrafficSelector">RemoteTrafficSelector</a></code> | <code>*[]*string</code> | Remote traffic selector to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.router">Router</a></code> | <code>*string</code> | URL of router resource to be used for dynamic routing. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.targetVpnGateway">TargetVpnGateway</a></code> | <code>*string</code> | URL of the Target VPN gateway with which this VPN tunnel is associated. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.vpnGateway">VpnGateway</a></code> | <code>*string</code> | URL of the VPN gateway with which this VPN tunnel is associated. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.vpnGatewayInterface">VpnGatewayInterface</a></code> | <code>*f64</code> | The interface ID of the VPN gateway with which this VPN tunnel is associated. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63
characters long and match the regular expression
'[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first character
must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel#name ComputeVpnTunnel#name}

---

##### `SharedSecret`<sup>Required</sup> <a name="SharedSecret" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.sharedSecret"></a>

```go
SharedSecret *string
```

- *Type:* *string

Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel#shared_secret ComputeVpnTunnel#shared_secret}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel#description ComputeVpnTunnel#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel#id ComputeVpnTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IkeVersion`<sup>Optional</sup> <a name="IkeVersion" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.ikeVersion"></a>

```go
IkeVersion *f64
```

- *Type:* *f64

IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway.

Acceptable IKE versions are 1 or 2. Default version is 2.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel#ike_version ComputeVpnTunnel#ike_version}

---

##### `LocalTrafficSelector`<sup>Optional</sup> <a name="LocalTrafficSelector" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.localTrafficSelector"></a>

```go
LocalTrafficSelector *[]*string
```

- *Type:* *[]*string

Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway.

The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel#local_traffic_selector ComputeVpnTunnel#local_traffic_selector}

---

##### `PeerExternalGateway`<sup>Optional</sup> <a name="PeerExternalGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerExternalGateway"></a>

```go
PeerExternalGateway *string
```

- *Type:* *string

URL of the peer side external VPN gateway to which this VPN tunnel is connected.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel#peer_external_gateway ComputeVpnTunnel#peer_external_gateway}

---

##### `PeerExternalGatewayInterface`<sup>Optional</sup> <a name="PeerExternalGatewayInterface" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerExternalGatewayInterface"></a>

```go
PeerExternalGatewayInterface *f64
```

- *Type:* *f64

The interface ID of the external VPN gateway to which this VPN tunnel is connected.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel#peer_external_gateway_interface ComputeVpnTunnel#peer_external_gateway_interface}

---

##### `PeerGcpGateway`<sup>Optional</sup> <a name="PeerGcpGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerGcpGateway"></a>

```go
PeerGcpGateway *string
```

- *Type:* *string

URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected.

If provided, the VPN tunnel will automatically use the same vpn_gateway_interface
ID in the peer GCP VPN gateway.
This field must reference a 'google_compute_ha_vpn_gateway' resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel#peer_gcp_gateway ComputeVpnTunnel#peer_gcp_gateway}

---

##### `PeerIp`<sup>Optional</sup> <a name="PeerIp" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerIp"></a>

```go
PeerIp *string
```

- *Type:* *string

IP address of the peer VPN gateway. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel#peer_ip ComputeVpnTunnel#peer_ip}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel#project ComputeVpnTunnel#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel#region ComputeVpnTunnel#region}

---

##### `RemoteTrafficSelector`<sup>Optional</sup> <a name="RemoteTrafficSelector" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.remoteTrafficSelector"></a>

```go
RemoteTrafficSelector *[]*string
```

- *Type:* *[]*string

Remote traffic selector to use when establishing the VPN tunnel with peer VPN gateway.

The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel#remote_traffic_selector ComputeVpnTunnel#remote_traffic_selector}

---

##### `Router`<sup>Optional</sup> <a name="Router" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.router"></a>

```go
Router *string
```

- *Type:* *string

URL of router resource to be used for dynamic routing.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel#router ComputeVpnTunnel#router}

---

##### `TargetVpnGateway`<sup>Optional</sup> <a name="TargetVpnGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.targetVpnGateway"></a>

```go
TargetVpnGateway *string
```

- *Type:* *string

URL of the Target VPN gateway with which this VPN tunnel is associated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel#target_vpn_gateway ComputeVpnTunnel#target_vpn_gateway}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.timeouts"></a>

```go
Timeouts ComputeVpnTunnelTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel#timeouts ComputeVpnTunnel#timeouts}

---

##### `VpnGateway`<sup>Optional</sup> <a name="VpnGateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.vpnGateway"></a>

```go
VpnGateway *string
```

- *Type:* *string

URL of the VPN gateway with which this VPN tunnel is associated.

This must be used if a High Availability VPN gateway resource is created.
This field must reference a 'google_compute_ha_vpn_gateway' resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel#vpn_gateway ComputeVpnTunnel#vpn_gateway}

---

##### `VpnGatewayInterface`<sup>Optional</sup> <a name="VpnGatewayInterface" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.vpnGatewayInterface"></a>

```go
VpnGatewayInterface *f64
```

- *Type:* *f64

The interface ID of the VPN gateway with which this VPN tunnel is associated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel#vpn_gateway_interface ComputeVpnTunnel#vpn_gateway_interface}

---

### ComputeVpnTunnelTimeouts <a name="ComputeVpnTunnelTimeouts" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computevpntunnel"

&computevpntunnel.ComputeVpnTunnelTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel#create ComputeVpnTunnel#create}. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel#delete ComputeVpnTunnel#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel#create ComputeVpnTunnel#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel#delete ComputeVpnTunnel#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeVpnTunnelTimeoutsOutputReference <a name="ComputeVpnTunnelTimeoutsOutputReference" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computevpntunnel"

computevpntunnel.NewComputeVpnTunnelTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeVpnTunnelTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



