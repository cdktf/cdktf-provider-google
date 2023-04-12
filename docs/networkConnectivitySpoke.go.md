# `networkConnectivitySpoke` Submodule <a name="`networkConnectivitySpoke` Submodule" id="@cdktf/provider-google.networkConnectivitySpoke"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectivitySpoke <a name="NetworkConnectivitySpoke" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke google_network_connectivity_spoke}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivityspoke"

networkconnectivityspoke.NewNetworkConnectivitySpoke(scope Construct, id *string, config NetworkConnectivitySpokeConfig) NetworkConnectivitySpoke
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig">NetworkConnectivitySpokeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig">NetworkConnectivitySpokeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedInterconnectAttachments">PutLinkedInterconnectAttachments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedRouterApplianceInstances">PutLinkedRouterApplianceInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedVpnTunnels">PutLinkedVpnTunnels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLinkedInterconnectAttachments">ResetLinkedInterconnectAttachments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLinkedRouterApplianceInstances">ResetLinkedRouterApplianceInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLinkedVpnTunnels">ResetLinkedVpnTunnels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutLinkedInterconnectAttachments` <a name="PutLinkedInterconnectAttachments" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedInterconnectAttachments"></a>

```go
func PutLinkedInterconnectAttachments(value NetworkConnectivitySpokeLinkedInterconnectAttachments)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedInterconnectAttachments.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments">NetworkConnectivitySpokeLinkedInterconnectAttachments</a>

---

##### `PutLinkedRouterApplianceInstances` <a name="PutLinkedRouterApplianceInstances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedRouterApplianceInstances"></a>

```go
func PutLinkedRouterApplianceInstances(value NetworkConnectivitySpokeLinkedRouterApplianceInstances)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedRouterApplianceInstances.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstances</a>

---

##### `PutLinkedVpnTunnels` <a name="PutLinkedVpnTunnels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedVpnTunnels"></a>

```go
func PutLinkedVpnTunnels(value NetworkConnectivitySpokeLinkedVpnTunnels)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedVpnTunnels.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels">NetworkConnectivitySpokeLinkedVpnTunnels</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putTimeouts"></a>

```go
func PutTimeouts(value NetworkConnectivitySpokeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts">NetworkConnectivitySpokeTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLinkedInterconnectAttachments` <a name="ResetLinkedInterconnectAttachments" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLinkedInterconnectAttachments"></a>

```go
func ResetLinkedInterconnectAttachments()
```

##### `ResetLinkedRouterApplianceInstances` <a name="ResetLinkedRouterApplianceInstances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLinkedRouterApplianceInstances"></a>

```go
func ResetLinkedRouterApplianceInstances()
```

##### `ResetLinkedVpnTunnels` <a name="ResetLinkedVpnTunnels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLinkedVpnTunnels"></a>

```go
func ResetLinkedVpnTunnels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivityspoke"

networkconnectivityspoke.NetworkConnectivitySpoke_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivityspoke"

networkconnectivityspoke.NetworkConnectivitySpoke_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivityspoke"

networkconnectivityspoke.NetworkConnectivitySpoke_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedInterconnectAttachments">LinkedInterconnectAttachments</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference">NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedRouterApplianceInstances">LinkedRouterApplianceInstances</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference">NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedVpnTunnels">LinkedVpnTunnels</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference">NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference">NetworkConnectivitySpokeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.uniqueId">UniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.hubInput">HubInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedInterconnectAttachmentsInput">LinkedInterconnectAttachmentsInput</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments">NetworkConnectivitySpokeLinkedInterconnectAttachments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedRouterApplianceInstancesInput">LinkedRouterApplianceInstancesInput</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedVpnTunnelsInput">LinkedVpnTunnelsInput</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels">NetworkConnectivitySpokeLinkedVpnTunnels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.hub">Hub</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `LinkedInterconnectAttachments`<sup>Required</sup> <a name="LinkedInterconnectAttachments" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedInterconnectAttachments"></a>

```go
func LinkedInterconnectAttachments() NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference">NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference</a>

---

##### `LinkedRouterApplianceInstances`<sup>Required</sup> <a name="LinkedRouterApplianceInstances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedRouterApplianceInstances"></a>

```go
func LinkedRouterApplianceInstances() NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference">NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference</a>

---

##### `LinkedVpnTunnels`<sup>Required</sup> <a name="LinkedVpnTunnels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedVpnTunnels"></a>

```go
func LinkedVpnTunnels() NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference">NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.timeouts"></a>

```go
func Timeouts() NetworkConnectivitySpokeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference">NetworkConnectivitySpokeTimeoutsOutputReference</a>

---

##### `UniqueId`<sup>Required</sup> <a name="UniqueId" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.uniqueId"></a>

```go
func UniqueId() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HubInput`<sup>Optional</sup> <a name="HubInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.hubInput"></a>

```go
func HubInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LinkedInterconnectAttachmentsInput`<sup>Optional</sup> <a name="LinkedInterconnectAttachmentsInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedInterconnectAttachmentsInput"></a>

```go
func LinkedInterconnectAttachmentsInput() NetworkConnectivitySpokeLinkedInterconnectAttachments
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments">NetworkConnectivitySpokeLinkedInterconnectAttachments</a>

---

##### `LinkedRouterApplianceInstancesInput`<sup>Optional</sup> <a name="LinkedRouterApplianceInstancesInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedRouterApplianceInstancesInput"></a>

```go
func LinkedRouterApplianceInstancesInput() NetworkConnectivitySpokeLinkedRouterApplianceInstances
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstances</a>

---

##### `LinkedVpnTunnelsInput`<sup>Optional</sup> <a name="LinkedVpnTunnelsInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedVpnTunnelsInput"></a>

```go
func LinkedVpnTunnelsInput() NetworkConnectivitySpokeLinkedVpnTunnels
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels">NetworkConnectivitySpokeLinkedVpnTunnels</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Hub`<sup>Required</sup> <a name="Hub" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.hub"></a>

```go
func Hub() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectivitySpokeConfig <a name="NetworkConnectivitySpokeConfig" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivityspoke"

&networkconnectivityspoke.NetworkConnectivitySpokeConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Hub: *string,
	Location: *string,
	Name: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	LinkedInterconnectAttachments: github.com/cdktf/cdktf-provider-google-go/google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments,
	LinkedRouterApplianceInstances: github.com/cdktf/cdktf-provider-google-go/google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances,
	LinkedVpnTunnels: github.com/cdktf/cdktf-provider-google-go/google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.hub">Hub</a></code> | <code>*string</code> | Immutable. The URI of the hub that this spoke is attached to. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.name">Name</a></code> | <code>*string</code> | Immutable. The name of the spoke. Spoke names must be unique. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of the spoke. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#id NetworkConnectivitySpoke#id}. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.linkedInterconnectAttachments">LinkedInterconnectAttachments</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments">NetworkConnectivitySpokeLinkedInterconnectAttachments</a></code> | linked_interconnect_attachments block. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.linkedRouterApplianceInstances">LinkedRouterApplianceInstances</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstances</a></code> | linked_router_appliance_instances block. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.linkedVpnTunnels">LinkedVpnTunnels</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels">NetworkConnectivitySpokeLinkedVpnTunnels</a></code> | linked_vpn_tunnels block. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.project">Project</a></code> | <code>*string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts">NetworkConnectivitySpokeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Hub`<sup>Required</sup> <a name="Hub" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.hub"></a>

```go
Hub *string
```

- *Type:* *string

Immutable. The URI of the hub that this spoke is attached to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#hub NetworkConnectivitySpoke#hub}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#location NetworkConnectivitySpoke#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Immutable. The name of the spoke. Spoke names must be unique.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#name NetworkConnectivitySpoke#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of the spoke.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#description NetworkConnectivitySpoke#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#id NetworkConnectivitySpoke#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#labels NetworkConnectivitySpoke#labels}

---

##### `LinkedInterconnectAttachments`<sup>Optional</sup> <a name="LinkedInterconnectAttachments" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.linkedInterconnectAttachments"></a>

```go
LinkedInterconnectAttachments NetworkConnectivitySpokeLinkedInterconnectAttachments
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments">NetworkConnectivitySpokeLinkedInterconnectAttachments</a>

linked_interconnect_attachments block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#linked_interconnect_attachments NetworkConnectivitySpoke#linked_interconnect_attachments}

---

##### `LinkedRouterApplianceInstances`<sup>Optional</sup> <a name="LinkedRouterApplianceInstances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.linkedRouterApplianceInstances"></a>

```go
LinkedRouterApplianceInstances NetworkConnectivitySpokeLinkedRouterApplianceInstances
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstances</a>

linked_router_appliance_instances block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#linked_router_appliance_instances NetworkConnectivitySpoke#linked_router_appliance_instances}

---

##### `LinkedVpnTunnels`<sup>Optional</sup> <a name="LinkedVpnTunnels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.linkedVpnTunnels"></a>

```go
LinkedVpnTunnels NetworkConnectivitySpokeLinkedVpnTunnels
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels">NetworkConnectivitySpokeLinkedVpnTunnels</a>

linked_vpn_tunnels block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#linked_vpn_tunnels NetworkConnectivitySpoke#linked_vpn_tunnels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#project NetworkConnectivitySpoke#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.timeouts"></a>

```go
Timeouts NetworkConnectivitySpokeTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts">NetworkConnectivitySpokeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#timeouts NetworkConnectivitySpoke#timeouts}

---

### NetworkConnectivitySpokeLinkedInterconnectAttachments <a name="NetworkConnectivitySpokeLinkedInterconnectAttachments" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivityspoke"

&networkconnectivityspoke.NetworkConnectivitySpokeLinkedInterconnectAttachments {
	SiteToSiteDataTransfer: interface{},
	Uris: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments.property.siteToSiteDataTransfer">SiteToSiteDataTransfer</a></code> | <code>interface{}</code> | A value that controls whether site-to-site data transfer is enabled for these resources. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments.property.uris">Uris</a></code> | <code>*[]*string</code> | The URIs of linked interconnect attachment resources. |

---

##### `SiteToSiteDataTransfer`<sup>Required</sup> <a name="SiteToSiteDataTransfer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments.property.siteToSiteDataTransfer"></a>

```go
SiteToSiteDataTransfer interface{}
```

- *Type:* interface{}

A value that controls whether site-to-site data transfer is enabled for these resources.

Note that data transfer is available only in supported locations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#site_to_site_data_transfer NetworkConnectivitySpoke#site_to_site_data_transfer}

---

##### `Uris`<sup>Required</sup> <a name="Uris" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments.property.uris"></a>

```go
Uris *[]*string
```

- *Type:* *[]*string

The URIs of linked interconnect attachment resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#uris NetworkConnectivitySpoke#uris}

---

### NetworkConnectivitySpokeLinkedRouterApplianceInstances <a name="NetworkConnectivitySpokeLinkedRouterApplianceInstances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivityspoke"

&networkconnectivityspoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances {
	Instances: interface{},
	SiteToSiteDataTransfer: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances.property.instances">Instances</a></code> | <code>interface{}</code> | instances block. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances.property.siteToSiteDataTransfer">SiteToSiteDataTransfer</a></code> | <code>interface{}</code> | A value that controls whether site-to-site data transfer is enabled for these resources. |

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances.property.instances"></a>

```go
Instances interface{}
```

- *Type:* interface{}

instances block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#instances NetworkConnectivitySpoke#instances}

---

##### `SiteToSiteDataTransfer`<sup>Required</sup> <a name="SiteToSiteDataTransfer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances.property.siteToSiteDataTransfer"></a>

```go
SiteToSiteDataTransfer interface{}
```

- *Type:* interface{}

A value that controls whether site-to-site data transfer is enabled for these resources.

Note that data transfer is available only in supported locations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#site_to_site_data_transfer NetworkConnectivitySpoke#site_to_site_data_transfer}

---

### NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances <a name="NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivityspoke"

&networkconnectivityspoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances {
	IpAddress: *string,
	VirtualMachine: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances.property.ipAddress">IpAddress</a></code> | <code>*string</code> | The IP address on the VM to use for peering. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances.property.virtualMachine">VirtualMachine</a></code> | <code>*string</code> | The URI of the virtual machine resource. |

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

The IP address on the VM to use for peering.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#ip_address NetworkConnectivitySpoke#ip_address}

---

##### `VirtualMachine`<sup>Optional</sup> <a name="VirtualMachine" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances.property.virtualMachine"></a>

```go
VirtualMachine *string
```

- *Type:* *string

The URI of the virtual machine resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#virtual_machine NetworkConnectivitySpoke#virtual_machine}

---

### NetworkConnectivitySpokeLinkedVpnTunnels <a name="NetworkConnectivitySpokeLinkedVpnTunnels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivityspoke"

&networkconnectivityspoke.NetworkConnectivitySpokeLinkedVpnTunnels {
	SiteToSiteDataTransfer: interface{},
	Uris: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels.property.siteToSiteDataTransfer">SiteToSiteDataTransfer</a></code> | <code>interface{}</code> | A value that controls whether site-to-site data transfer is enabled for these resources. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels.property.uris">Uris</a></code> | <code>*[]*string</code> | The URIs of linked VPN tunnel resources. |

---

##### `SiteToSiteDataTransfer`<sup>Required</sup> <a name="SiteToSiteDataTransfer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels.property.siteToSiteDataTransfer"></a>

```go
SiteToSiteDataTransfer interface{}
```

- *Type:* interface{}

A value that controls whether site-to-site data transfer is enabled for these resources.

Note that data transfer is available only in supported locations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#site_to_site_data_transfer NetworkConnectivitySpoke#site_to_site_data_transfer}

---

##### `Uris`<sup>Required</sup> <a name="Uris" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels.property.uris"></a>

```go
Uris *[]*string
```

- *Type:* *[]*string

The URIs of linked VPN tunnel resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#uris NetworkConnectivitySpoke#uris}

---

### NetworkConnectivitySpokeTimeouts <a name="NetworkConnectivitySpokeTimeouts" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivityspoke"

&networkconnectivityspoke.NetworkConnectivitySpokeTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#create NetworkConnectivitySpoke#create}. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#delete NetworkConnectivitySpoke#delete}. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#update NetworkConnectivitySpoke#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#create NetworkConnectivitySpoke#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#delete NetworkConnectivitySpoke#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_connectivity_spoke#update NetworkConnectivitySpoke#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference <a name="NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivityspoke"

networkconnectivityspoke.NewNetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.siteToSiteDataTransferInput">SiteToSiteDataTransferInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.urisInput">UrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.siteToSiteDataTransfer">SiteToSiteDataTransfer</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.uris">Uris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments">NetworkConnectivitySpokeLinkedInterconnectAttachments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SiteToSiteDataTransferInput`<sup>Optional</sup> <a name="SiteToSiteDataTransferInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.siteToSiteDataTransferInput"></a>

```go
func SiteToSiteDataTransferInput() interface{}
```

- *Type:* interface{}

---

##### `UrisInput`<sup>Optional</sup> <a name="UrisInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.urisInput"></a>

```go
func UrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `SiteToSiteDataTransfer`<sup>Required</sup> <a name="SiteToSiteDataTransfer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.siteToSiteDataTransfer"></a>

```go
func SiteToSiteDataTransfer() interface{}
```

- *Type:* interface{}

---

##### `Uris`<sup>Required</sup> <a name="Uris" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.uris"></a>

```go
func Uris() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkConnectivitySpokeLinkedInterconnectAttachments
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments">NetworkConnectivitySpokeLinkedInterconnectAttachments</a>

---


### NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList <a name="NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivityspoke"

networkconnectivityspoke.NewNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.get"></a>

```go
func Get(index *f64) NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference <a name="NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivityspoke"

networkconnectivityspoke.NewNetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resetVirtualMachine">ResetVirtualMachine</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resetIpAddress"></a>

```go
func ResetIpAddress()
```

##### `ResetVirtualMachine` <a name="ResetVirtualMachine" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resetVirtualMachine"></a>

```go
func ResetVirtualMachine()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.virtualMachineInput">VirtualMachineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.virtualMachine">VirtualMachine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `VirtualMachineInput`<sup>Optional</sup> <a name="VirtualMachineInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.virtualMachineInput"></a>

```go
func VirtualMachineInput() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `VirtualMachine`<sup>Required</sup> <a name="VirtualMachine" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.virtualMachine"></a>

```go
func VirtualMachine() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference <a name="NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivityspoke"

networkconnectivityspoke.NewNetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.putInstances">PutInstances</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInstances` <a name="PutInstances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.putInstances"></a>

```go
func PutInstances(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.putInstances.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.instances">Instances</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.instancesInput">InstancesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.siteToSiteDataTransferInput">SiteToSiteDataTransferInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.siteToSiteDataTransfer">SiteToSiteDataTransfer</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.instances"></a>

```go
func Instances() NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList</a>

---

##### `InstancesInput`<sup>Optional</sup> <a name="InstancesInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.instancesInput"></a>

```go
func InstancesInput() interface{}
```

- *Type:* interface{}

---

##### `SiteToSiteDataTransferInput`<sup>Optional</sup> <a name="SiteToSiteDataTransferInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.siteToSiteDataTransferInput"></a>

```go
func SiteToSiteDataTransferInput() interface{}
```

- *Type:* interface{}

---

##### `SiteToSiteDataTransfer`<sup>Required</sup> <a name="SiteToSiteDataTransfer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.siteToSiteDataTransfer"></a>

```go
func SiteToSiteDataTransfer() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkConnectivitySpokeLinkedRouterApplianceInstances
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstances</a>

---


### NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference <a name="NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivityspoke"

networkconnectivityspoke.NewNetworkConnectivitySpokeLinkedVpnTunnelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.siteToSiteDataTransferInput">SiteToSiteDataTransferInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.urisInput">UrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.siteToSiteDataTransfer">SiteToSiteDataTransfer</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.uris">Uris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels">NetworkConnectivitySpokeLinkedVpnTunnels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SiteToSiteDataTransferInput`<sup>Optional</sup> <a name="SiteToSiteDataTransferInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.siteToSiteDataTransferInput"></a>

```go
func SiteToSiteDataTransferInput() interface{}
```

- *Type:* interface{}

---

##### `UrisInput`<sup>Optional</sup> <a name="UrisInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.urisInput"></a>

```go
func UrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `SiteToSiteDataTransfer`<sup>Required</sup> <a name="SiteToSiteDataTransfer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.siteToSiteDataTransfer"></a>

```go
func SiteToSiteDataTransfer() interface{}
```

- *Type:* interface{}

---

##### `Uris`<sup>Required</sup> <a name="Uris" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.uris"></a>

```go
func Uris() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkConnectivitySpokeLinkedVpnTunnels
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels">NetworkConnectivitySpokeLinkedVpnTunnels</a>

---


### NetworkConnectivitySpokeTimeoutsOutputReference <a name="NetworkConnectivitySpokeTimeoutsOutputReference" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivityspoke"

networkconnectivityspoke.NewNetworkConnectivitySpokeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkConnectivitySpokeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



