# `computeRouterPeer` Submodule <a name="`computeRouterPeer` Submodule" id="@cdktf/provider-google.computeRouterPeer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRouterPeer <a name="ComputeRouterPeer" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer google_compute_router_peer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computerouterpeer"

computerouterpeer.NewComputeRouterPeer(scope Construct, id *string, config ComputeRouterPeerConfig) ComputeRouterPeer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig">ComputeRouterPeerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig">ComputeRouterPeerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.putAdvertisedIpRanges">PutAdvertisedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.putBfd">PutBfd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetAdvertisedGroups">ResetAdvertisedGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetAdvertisedIpRanges">ResetAdvertisedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetAdvertisedRoutePriority">ResetAdvertisedRoutePriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetAdvertiseMode">ResetAdvertiseMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetBfd">ResetBfd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetRouterApplianceInstance">ResetRouterApplianceInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAdvertisedIpRanges` <a name="PutAdvertisedIpRanges" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.putAdvertisedIpRanges"></a>

```go
func PutAdvertisedIpRanges(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.putAdvertisedIpRanges.parameter.value"></a>

- *Type:* interface{}

---

##### `PutBfd` <a name="PutBfd" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.putBfd"></a>

```go
func PutBfd(value ComputeRouterPeerBfd)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.putBfd.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd">ComputeRouterPeerBfd</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.putTimeouts"></a>

```go
func PutTimeouts(value ComputeRouterPeerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeouts">ComputeRouterPeerTimeouts</a>

---

##### `ResetAdvertisedGroups` <a name="ResetAdvertisedGroups" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetAdvertisedGroups"></a>

```go
func ResetAdvertisedGroups()
```

##### `ResetAdvertisedIpRanges` <a name="ResetAdvertisedIpRanges" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetAdvertisedIpRanges"></a>

```go
func ResetAdvertisedIpRanges()
```

##### `ResetAdvertisedRoutePriority` <a name="ResetAdvertisedRoutePriority" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetAdvertisedRoutePriority"></a>

```go
func ResetAdvertisedRoutePriority()
```

##### `ResetAdvertiseMode` <a name="ResetAdvertiseMode" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetAdvertiseMode"></a>

```go
func ResetAdvertiseMode()
```

##### `ResetBfd` <a name="ResetBfd" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetBfd"></a>

```go
func ResetBfd()
```

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetEnable"></a>

```go
func ResetEnable()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetId"></a>

```go
func ResetId()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetIpAddress"></a>

```go
func ResetIpAddress()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRouterApplianceInstance` <a name="ResetRouterApplianceInstance" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetRouterApplianceInstance"></a>

```go
func ResetRouterApplianceInstance()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computerouterpeer"

computerouterpeer.ComputeRouterPeer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computerouterpeer"

computerouterpeer.ComputeRouterPeer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computerouterpeer"

computerouterpeer.ComputeRouterPeer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.advertisedIpRanges">AdvertisedIpRanges</a></code> | <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList">ComputeRouterPeerAdvertisedIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.bfd">Bfd</a></code> | <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference">ComputeRouterPeerBfdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.managementType">ManagementType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference">ComputeRouterPeerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.advertisedGroupsInput">AdvertisedGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.advertisedIpRangesInput">AdvertisedIpRangesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.advertisedRoutePriorityInput">AdvertisedRoutePriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.advertiseModeInput">AdvertiseModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.bfdInput">BfdInput</a></code> | <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd">ComputeRouterPeerBfd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.enableInput">EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.interfaceInput">InterfaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.peerAsnInput">PeerAsnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.peerIpAddressInput">PeerIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.routerApplianceInstanceInput">RouterApplianceInstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.routerInput">RouterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.advertisedGroups">AdvertisedGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.advertisedRoutePriority">AdvertisedRoutePriority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.advertiseMode">AdvertiseMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.enable">Enable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.interface">Interface</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.peerAsn">PeerAsn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.peerIpAddress">PeerIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.router">Router</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.routerApplianceInstance">RouterApplianceInstance</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdvertisedIpRanges`<sup>Required</sup> <a name="AdvertisedIpRanges" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.advertisedIpRanges"></a>

```go
func AdvertisedIpRanges() ComputeRouterPeerAdvertisedIpRangesList
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList">ComputeRouterPeerAdvertisedIpRangesList</a>

---

##### `Bfd`<sup>Required</sup> <a name="Bfd" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.bfd"></a>

```go
func Bfd() ComputeRouterPeerBfdOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference">ComputeRouterPeerBfdOutputReference</a>

---

##### `ManagementType`<sup>Required</sup> <a name="ManagementType" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.managementType"></a>

```go
func ManagementType() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.timeouts"></a>

```go
func Timeouts() ComputeRouterPeerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference">ComputeRouterPeerTimeoutsOutputReference</a>

---

##### `AdvertisedGroupsInput`<sup>Optional</sup> <a name="AdvertisedGroupsInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.advertisedGroupsInput"></a>

```go
func AdvertisedGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AdvertisedIpRangesInput`<sup>Optional</sup> <a name="AdvertisedIpRangesInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.advertisedIpRangesInput"></a>

```go
func AdvertisedIpRangesInput() interface{}
```

- *Type:* interface{}

---

##### `AdvertisedRoutePriorityInput`<sup>Optional</sup> <a name="AdvertisedRoutePriorityInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.advertisedRoutePriorityInput"></a>

```go
func AdvertisedRoutePriorityInput() *f64
```

- *Type:* *f64

---

##### `AdvertiseModeInput`<sup>Optional</sup> <a name="AdvertiseModeInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.advertiseModeInput"></a>

```go
func AdvertiseModeInput() *string
```

- *Type:* *string

---

##### `BfdInput`<sup>Optional</sup> <a name="BfdInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.bfdInput"></a>

```go
func BfdInput() ComputeRouterPeerBfd
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd">ComputeRouterPeerBfd</a>

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.enableInput"></a>

```go
func EnableInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InterfaceInput`<sup>Optional</sup> <a name="InterfaceInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.interfaceInput"></a>

```go
func InterfaceInput() *string
```

- *Type:* *string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PeerAsnInput`<sup>Optional</sup> <a name="PeerAsnInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.peerAsnInput"></a>

```go
func PeerAsnInput() *f64
```

- *Type:* *f64

---

##### `PeerIpAddressInput`<sup>Optional</sup> <a name="PeerIpAddressInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.peerIpAddressInput"></a>

```go
func PeerIpAddressInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RouterApplianceInstanceInput`<sup>Optional</sup> <a name="RouterApplianceInstanceInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.routerApplianceInstanceInput"></a>

```go
func RouterApplianceInstanceInput() *string
```

- *Type:* *string

---

##### `RouterInput`<sup>Optional</sup> <a name="RouterInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.routerInput"></a>

```go
func RouterInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AdvertisedGroups`<sup>Required</sup> <a name="AdvertisedGroups" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.advertisedGroups"></a>

```go
func AdvertisedGroups() *[]*string
```

- *Type:* *[]*string

---

##### `AdvertisedRoutePriority`<sup>Required</sup> <a name="AdvertisedRoutePriority" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.advertisedRoutePriority"></a>

```go
func AdvertisedRoutePriority() *f64
```

- *Type:* *f64

---

##### `AdvertiseMode`<sup>Required</sup> <a name="AdvertiseMode" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.advertiseMode"></a>

```go
func AdvertiseMode() *string
```

- *Type:* *string

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.enable"></a>

```go
func Enable() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.interface"></a>

```go
func Interface() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PeerAsn`<sup>Required</sup> <a name="PeerAsn" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.peerAsn"></a>

```go
func PeerAsn() *f64
```

- *Type:* *f64

---

##### `PeerIpAddress`<sup>Required</sup> <a name="PeerIpAddress" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.peerIpAddress"></a>

```go
func PeerIpAddress() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Router`<sup>Required</sup> <a name="Router" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.router"></a>

```go
func Router() *string
```

- *Type:* *string

---

##### `RouterApplianceInstance`<sup>Required</sup> <a name="RouterApplianceInstance" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.routerApplianceInstance"></a>

```go
func RouterApplianceInstance() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRouterPeerAdvertisedIpRanges <a name="ComputeRouterPeerAdvertisedIpRanges" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRanges.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computerouterpeer"

&computerouterpeer.ComputeRouterPeerAdvertisedIpRanges {
	Range: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRanges.property.range">Range</a></code> | <code>*string</code> | The IP range to advertise. The value must be a CIDR-formatted string. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRanges.property.description">Description</a></code> | <code>*string</code> | User-specified description for the IP range. |

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRanges.property.range"></a>

```go
Range *string
```

- *Type:* *string

The IP range to advertise. The value must be a CIDR-formatted string.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#range ComputeRouterPeer#range}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRanges.property.description"></a>

```go
Description *string
```

- *Type:* *string

User-specified description for the IP range.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#description ComputeRouterPeer#description}

---

### ComputeRouterPeerBfd <a name="ComputeRouterPeerBfd" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computerouterpeer"

&computerouterpeer.ComputeRouterPeerBfd {
	SessionInitializationMode: *string,
	MinReceiveInterval: *f64,
	MinTransmitInterval: *f64,
	Multiplier: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd.property.sessionInitializationMode">SessionInitializationMode</a></code> | <code>*string</code> | The BFD session initialization mode for this BGP peer. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd.property.minReceiveInterval">MinReceiveInterval</a></code> | <code>*f64</code> | The minimum interval, in milliseconds, between BFD control packets received from the peer router. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd.property.minTransmitInterval">MinTransmitInterval</a></code> | <code>*f64</code> | The minimum interval, in milliseconds, between BFD control packets transmitted to the peer router. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd.property.multiplier">Multiplier</a></code> | <code>*f64</code> | The number of consecutive BFD packets that must be missed before BFD declares that a peer is unavailable. |

---

##### `SessionInitializationMode`<sup>Required</sup> <a name="SessionInitializationMode" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd.property.sessionInitializationMode"></a>

```go
SessionInitializationMode *string
```

- *Type:* *string

The BFD session initialization mode for this BGP peer.

If set to 'ACTIVE', the Cloud Router will initiate the BFD session
for this BGP peer. If set to 'PASSIVE', the Cloud Router will wait
for the peer router to initiate the BFD session for this BGP peer.
If set to 'DISABLED', BFD is disabled for this BGP peer. Possible values: ["ACTIVE", "DISABLED", "PASSIVE"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#session_initialization_mode ComputeRouterPeer#session_initialization_mode}

---

##### `MinReceiveInterval`<sup>Optional</sup> <a name="MinReceiveInterval" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd.property.minReceiveInterval"></a>

```go
MinReceiveInterval *f64
```

- *Type:* *f64

The minimum interval, in milliseconds, between BFD control packets received from the peer router.

The actual value is negotiated
between the two routers and is equal to the greater of this value
and the transmit interval of the other router. If set, this value
must be between 1000 and 30000.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#min_receive_interval ComputeRouterPeer#min_receive_interval}

---

##### `MinTransmitInterval`<sup>Optional</sup> <a name="MinTransmitInterval" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd.property.minTransmitInterval"></a>

```go
MinTransmitInterval *f64
```

- *Type:* *f64

The minimum interval, in milliseconds, between BFD control packets transmitted to the peer router.

The actual value is negotiated
between the two routers and is equal to the greater of this value
and the corresponding receive interval of the other router. If set,
this value must be between 1000 and 30000.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#min_transmit_interval ComputeRouterPeer#min_transmit_interval}

---

##### `Multiplier`<sup>Optional</sup> <a name="Multiplier" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd.property.multiplier"></a>

```go
Multiplier *f64
```

- *Type:* *f64

The number of consecutive BFD packets that must be missed before BFD declares that a peer is unavailable.

If set, the value must
be a value between 5 and 16.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#multiplier ComputeRouterPeer#multiplier}

---

### ComputeRouterPeerConfig <a name="ComputeRouterPeerConfig" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computerouterpeer"

&computerouterpeer.ComputeRouterPeerConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Interface: *string,
	Name: *string,
	PeerAsn: *f64,
	PeerIpAddress: *string,
	Router: *string,
	AdvertisedGroups: *[]*string,
	AdvertisedIpRanges: interface{},
	AdvertisedRoutePriority: *f64,
	AdvertiseMode: *string,
	Bfd: github.com/cdktf/cdktf-provider-google-go/google.computeRouterPeer.ComputeRouterPeerBfd,
	Enable: interface{},
	Id: *string,
	IpAddress: *string,
	Project: *string,
	Region: *string,
	RouterApplianceInstance: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeRouterPeer.ComputeRouterPeerTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.interface">Interface</a></code> | <code>*string</code> | Name of the interface the BGP peer is associated with. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.name">Name</a></code> | <code>*string</code> | Name of this BGP peer. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.peerAsn">PeerAsn</a></code> | <code>*f64</code> | Peer BGP Autonomous System Number (ASN). Each BGP interface may use a different value. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.peerIpAddress">PeerIpAddress</a></code> | <code>*string</code> | IP address of the BGP interface outside Google Cloud Platform. Only IPv4 is supported. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.router">Router</a></code> | <code>*string</code> | The name of the Cloud Router in which this BgpPeer will be configured. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.advertisedGroups">AdvertisedGroups</a></code> | <code>*[]*string</code> | User-specified list of prefix groups to advertise in custom mode, which can take one of the following options:. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.advertisedIpRanges">AdvertisedIpRanges</a></code> | <code>interface{}</code> | advertised_ip_ranges block. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.advertisedRoutePriority">AdvertisedRoutePriority</a></code> | <code>*f64</code> | The priority of routes advertised to this BGP peer. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.advertiseMode">AdvertiseMode</a></code> | <code>*string</code> | User-specified flag to indicate which mode to use for advertisement. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.bfd">Bfd</a></code> | <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd">ComputeRouterPeerBfd</a></code> | bfd block. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.enable">Enable</a></code> | <code>interface{}</code> | The status of the BGP peer connection. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#id ComputeRouterPeer#id}. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.ipAddress">IpAddress</a></code> | <code>*string</code> | IP address of the interface inside Google Cloud Platform. Only IPv4 is supported. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#project ComputeRouterPeer#project}. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.region">Region</a></code> | <code>*string</code> | Region where the router and BgpPeer reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.routerApplianceInstance">RouterApplianceInstance</a></code> | <code>*string</code> | The URI of the VM instance that is used as third-party router appliances such as Next Gen Firewalls, Virtual Routers, or Router Appliances. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeouts">ComputeRouterPeerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.interface"></a>

```go
Interface *string
```

- *Type:* *string

Name of the interface the BGP peer is associated with.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#interface ComputeRouterPeer#interface}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of this BGP peer.

The name must be 1-63 characters long,
and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#name ComputeRouterPeer#name}

---

##### `PeerAsn`<sup>Required</sup> <a name="PeerAsn" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.peerAsn"></a>

```go
PeerAsn *f64
```

- *Type:* *f64

Peer BGP Autonomous System Number (ASN). Each BGP interface may use a different value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#peer_asn ComputeRouterPeer#peer_asn}

---

##### `PeerIpAddress`<sup>Required</sup> <a name="PeerIpAddress" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.peerIpAddress"></a>

```go
PeerIpAddress *string
```

- *Type:* *string

IP address of the BGP interface outside Google Cloud Platform. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#peer_ip_address ComputeRouterPeer#peer_ip_address}

---

##### `Router`<sup>Required</sup> <a name="Router" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.router"></a>

```go
Router *string
```

- *Type:* *string

The name of the Cloud Router in which this BgpPeer will be configured.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#router ComputeRouterPeer#router}

---

##### `AdvertisedGroups`<sup>Optional</sup> <a name="AdvertisedGroups" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.advertisedGroups"></a>

```go
AdvertisedGroups *[]*string
```

- *Type:* *[]*string

User-specified list of prefix groups to advertise in custom mode, which can take one of the following options:.

'ALL_SUBNETS': Advertises all available subnets, including peer VPC subnets.
'ALL_VPC_SUBNETS': Advertises the router's own VPC subnets.
'ALL_PEER_VPC_SUBNETS': Advertises peer subnets of the router's VPC network.

Note that this field can only be populated if advertiseMode is 'CUSTOM'
and overrides the list defined for the router (in the "bgp" message).
These groups are advertised in addition to any specified prefixes.
Leave this field blank to advertise no custom groups.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#advertised_groups ComputeRouterPeer#advertised_groups}

---

##### `AdvertisedIpRanges`<sup>Optional</sup> <a name="AdvertisedIpRanges" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.advertisedIpRanges"></a>

```go
AdvertisedIpRanges interface{}
```

- *Type:* interface{}

advertised_ip_ranges block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#advertised_ip_ranges ComputeRouterPeer#advertised_ip_ranges}

---

##### `AdvertisedRoutePriority`<sup>Optional</sup> <a name="AdvertisedRoutePriority" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.advertisedRoutePriority"></a>

```go
AdvertisedRoutePriority *f64
```

- *Type:* *f64

The priority of routes advertised to this BGP peer.

Where there is more than one matching route of maximum
length, the routes with the lowest priority value win.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#advertised_route_priority ComputeRouterPeer#advertised_route_priority}

---

##### `AdvertiseMode`<sup>Optional</sup> <a name="AdvertiseMode" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.advertiseMode"></a>

```go
AdvertiseMode *string
```

- *Type:* *string

User-specified flag to indicate which mode to use for advertisement.

Valid values of this enum field are: 'DEFAULT', 'CUSTOM' Default value: "DEFAULT" Possible values: ["DEFAULT", "CUSTOM"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#advertise_mode ComputeRouterPeer#advertise_mode}

---

##### `Bfd`<sup>Optional</sup> <a name="Bfd" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.bfd"></a>

```go
Bfd ComputeRouterPeerBfd
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd">ComputeRouterPeerBfd</a>

bfd block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#bfd ComputeRouterPeer#bfd}

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.enable"></a>

```go
Enable interface{}
```

- *Type:* interface{}

The status of the BGP peer connection.

If set to false, any active session
with the peer is terminated and all associated routing information is removed.
If set to true, the peer connection can be established with routing information.
The default is true.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#enable ComputeRouterPeer#enable}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#id ComputeRouterPeer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

IP address of the interface inside Google Cloud Platform. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#ip_address ComputeRouterPeer#ip_address}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#project ComputeRouterPeer#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where the router and BgpPeer reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#region ComputeRouterPeer#region}

---

##### `RouterApplianceInstance`<sup>Optional</sup> <a name="RouterApplianceInstance" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.routerApplianceInstance"></a>

```go
RouterApplianceInstance *string
```

- *Type:* *string

The URI of the VM instance that is used as third-party router appliances such as Next Gen Firewalls, Virtual Routers, or Router Appliances.

The VM instance must be located in zones contained in the same region as
this Cloud Router. The VM instance is the peer side of the BGP session.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#router_appliance_instance ComputeRouterPeer#router_appliance_instance}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerConfig.property.timeouts"></a>

```go
Timeouts ComputeRouterPeerTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeouts">ComputeRouterPeerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#timeouts ComputeRouterPeer#timeouts}

---

### ComputeRouterPeerTimeouts <a name="ComputeRouterPeerTimeouts" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computerouterpeer"

&computerouterpeer.ComputeRouterPeerTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#create ComputeRouterPeer#create}. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#delete ComputeRouterPeer#delete}. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#update ComputeRouterPeer#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#create ComputeRouterPeer#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#delete ComputeRouterPeer#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_peer#update ComputeRouterPeer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRouterPeerAdvertisedIpRangesList <a name="ComputeRouterPeerAdvertisedIpRangesList" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computerouterpeer"

computerouterpeer.NewComputeRouterPeerAdvertisedIpRangesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRouterPeerAdvertisedIpRangesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.get"></a>

```go
func Get(index *f64) ComputeRouterPeerAdvertisedIpRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRouterPeerAdvertisedIpRangesOutputReference <a name="ComputeRouterPeerAdvertisedIpRangesOutputReference" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computerouterpeer"

computerouterpeer.NewComputeRouterPeerAdvertisedIpRangesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRouterPeerAdvertisedIpRangesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.property.rangeInput">RangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.property.range">Range</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.property.rangeInput"></a>

```go
func RangeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.property.range"></a>

```go
func Range() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerAdvertisedIpRangesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRouterPeerBfdOutputReference <a name="ComputeRouterPeerBfdOutputReference" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computerouterpeer"

computerouterpeer.NewComputeRouterPeerBfdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRouterPeerBfdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.resetMinReceiveInterval">ResetMinReceiveInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.resetMinTransmitInterval">ResetMinTransmitInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.resetMultiplier">ResetMultiplier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMinReceiveInterval` <a name="ResetMinReceiveInterval" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.resetMinReceiveInterval"></a>

```go
func ResetMinReceiveInterval()
```

##### `ResetMinTransmitInterval` <a name="ResetMinTransmitInterval" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.resetMinTransmitInterval"></a>

```go
func ResetMinTransmitInterval()
```

##### `ResetMultiplier` <a name="ResetMultiplier" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.resetMultiplier"></a>

```go
func ResetMultiplier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.minReceiveIntervalInput">MinReceiveIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.minTransmitIntervalInput">MinTransmitIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.multiplierInput">MultiplierInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.sessionInitializationModeInput">SessionInitializationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.minReceiveInterval">MinReceiveInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.minTransmitInterval">MinTransmitInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.multiplier">Multiplier</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.sessionInitializationMode">SessionInitializationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd">ComputeRouterPeerBfd</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MinReceiveIntervalInput`<sup>Optional</sup> <a name="MinReceiveIntervalInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.minReceiveIntervalInput"></a>

```go
func MinReceiveIntervalInput() *f64
```

- *Type:* *f64

---

##### `MinTransmitIntervalInput`<sup>Optional</sup> <a name="MinTransmitIntervalInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.minTransmitIntervalInput"></a>

```go
func MinTransmitIntervalInput() *f64
```

- *Type:* *f64

---

##### `MultiplierInput`<sup>Optional</sup> <a name="MultiplierInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.multiplierInput"></a>

```go
func MultiplierInput() *f64
```

- *Type:* *f64

---

##### `SessionInitializationModeInput`<sup>Optional</sup> <a name="SessionInitializationModeInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.sessionInitializationModeInput"></a>

```go
func SessionInitializationModeInput() *string
```

- *Type:* *string

---

##### `MinReceiveInterval`<sup>Required</sup> <a name="MinReceiveInterval" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.minReceiveInterval"></a>

```go
func MinReceiveInterval() *f64
```

- *Type:* *f64

---

##### `MinTransmitInterval`<sup>Required</sup> <a name="MinTransmitInterval" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.minTransmitInterval"></a>

```go
func MinTransmitInterval() *f64
```

- *Type:* *f64

---

##### `Multiplier`<sup>Required</sup> <a name="Multiplier" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.multiplier"></a>

```go
func Multiplier() *f64
```

- *Type:* *f64

---

##### `SessionInitializationMode`<sup>Required</sup> <a name="SessionInitializationMode" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.sessionInitializationMode"></a>

```go
func SessionInitializationMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfdOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRouterPeerBfd
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerBfd">ComputeRouterPeerBfd</a>

---


### ComputeRouterPeerTimeoutsOutputReference <a name="ComputeRouterPeerTimeoutsOutputReference" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computerouterpeer"

computerouterpeer.NewComputeRouterPeerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRouterPeerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRouterPeer.ComputeRouterPeerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



