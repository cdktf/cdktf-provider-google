# `computeRegionNetworkFirewallPolicy` Submodule <a name="`computeRegionNetworkFirewallPolicy` Submodule" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionNetworkFirewallPolicy <a name="ComputeRegionNetworkFirewallPolicy" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_firewall_policy google_compute_region_network_firewall_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionnetworkfirewallpolicy"

computeregionnetworkfirewallpolicy.NewComputeRegionNetworkFirewallPolicy(scope Construct, id *string, config ComputeRegionNetworkFirewallPolicyConfig) ComputeRegionNetworkFirewallPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyConfig">ComputeRegionNetworkFirewallPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyConfig">ComputeRegionNetworkFirewallPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.putTimeouts"></a>

```go
func PutTimeouts(value ComputeRegionNetworkFirewallPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeouts">ComputeRegionNetworkFirewallPolicyTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionnetworkfirewallpolicy"

computeregionnetworkfirewallpolicy.ComputeRegionNetworkFirewallPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionnetworkfirewallpolicy"

computeregionnetworkfirewallpolicy.ComputeRegionNetworkFirewallPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionnetworkfirewallpolicy"

computeregionnetworkfirewallpolicy.ComputeRegionNetworkFirewallPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.regionNetworkFirewallPolicyId">RegionNetworkFirewallPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.ruleTupleCount">RuleTupleCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.selfLinkWithId">SelfLinkWithId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference">ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `RegionNetworkFirewallPolicyId`<sup>Required</sup> <a name="RegionNetworkFirewallPolicyId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.regionNetworkFirewallPolicyId"></a>

```go
func RegionNetworkFirewallPolicyId() *string
```

- *Type:* *string

---

##### `RuleTupleCount`<sup>Required</sup> <a name="RuleTupleCount" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.ruleTupleCount"></a>

```go
func RuleTupleCount() *f64
```

- *Type:* *f64

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `SelfLinkWithId`<sup>Required</sup> <a name="SelfLinkWithId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.selfLinkWithId"></a>

```go
func SelfLinkWithId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.timeouts"></a>

```go
func Timeouts() ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference">ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionNetworkFirewallPolicyConfig <a name="ComputeRegionNetworkFirewallPolicyConfig" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionnetworkfirewallpolicy"

&computeregionnetworkfirewallpolicy.ComputeRegionNetworkFirewallPolicyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Description: *string,
	Id: *string,
	Project: *string,
	Region: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyConfig.property.name">Name</a></code> | <code>*string</code> | User-provided name of the Network firewall policy. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_firewall_policy#id ComputeRegionNetworkFirewallPolicy#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyConfig.property.project">Project</a></code> | <code>*string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyConfig.property.region">Region</a></code> | <code>*string</code> | The location of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeouts">ComputeRegionNetworkFirewallPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

User-provided name of the Network firewall policy.

The name should be unique in the project in which the firewall policy is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_firewall_policy#name ComputeRegionNetworkFirewallPolicy#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_firewall_policy#description ComputeRegionNetworkFirewallPolicy#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_firewall_policy#id ComputeRegionNetworkFirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_firewall_policy#project ComputeRegionNetworkFirewallPolicy#project}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The location of this resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_firewall_policy#region ComputeRegionNetworkFirewallPolicy#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyConfig.property.timeouts"></a>

```go
Timeouts ComputeRegionNetworkFirewallPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeouts">ComputeRegionNetworkFirewallPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_firewall_policy#timeouts ComputeRegionNetworkFirewallPolicy#timeouts}

---

### ComputeRegionNetworkFirewallPolicyTimeouts <a name="ComputeRegionNetworkFirewallPolicyTimeouts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionnetworkfirewallpolicy"

&computeregionnetworkfirewallpolicy.ComputeRegionNetworkFirewallPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_firewall_policy#create ComputeRegionNetworkFirewallPolicy#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_firewall_policy#delete ComputeRegionNetworkFirewallPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_firewall_policy#update ComputeRegionNetworkFirewallPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_firewall_policy#create ComputeRegionNetworkFirewallPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_firewall_policy#delete ComputeRegionNetworkFirewallPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_firewall_policy#update ComputeRegionNetworkFirewallPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference <a name="ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionnetworkfirewallpolicy"

computeregionnetworkfirewallpolicy.NewComputeRegionNetworkFirewallPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicy.ComputeRegionNetworkFirewallPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



