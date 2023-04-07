# `computeRegionNetworkFirewallPolicyAssociation` Submodule <a name="`computeRegionNetworkFirewallPolicyAssociation` Submodule" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionNetworkFirewallPolicyAssociation <a name="ComputeRegionNetworkFirewallPolicyAssociation" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_firewall_policy_association google_compute_region_network_firewall_policy_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionnetworkfirewallpolicyassociation"

computeregionnetworkfirewallpolicyassociation.NewComputeRegionNetworkFirewallPolicyAssociation(scope Construct, id *string, config ComputeRegionNetworkFirewallPolicyAssociationConfig) ComputeRegionNetworkFirewallPolicyAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig">ComputeRegionNetworkFirewallPolicyAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig">ComputeRegionNetworkFirewallPolicyAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.putTimeouts"></a>

```go
func PutTimeouts(value ComputeRegionNetworkFirewallPolicyAssociationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts">ComputeRegionNetworkFirewallPolicyAssociationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionnetworkfirewallpolicyassociation"

computeregionnetworkfirewallpolicyassociation.ComputeRegionNetworkFirewallPolicyAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionnetworkfirewallpolicyassociation"

computeregionnetworkfirewallpolicyassociation.ComputeRegionNetworkFirewallPolicyAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionnetworkfirewallpolicyassociation"

computeregionnetworkfirewallpolicyassociation.ComputeRegionNetworkFirewallPolicyAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.shortName">ShortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference">ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.attachmentTargetInput">AttachmentTargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.firewallPolicyInput">FirewallPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.attachmentTarget">AttachmentTarget</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.firewallPolicy">FirewallPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ShortName`<sup>Required</sup> <a name="ShortName" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.shortName"></a>

```go
func ShortName() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.timeouts"></a>

```go
func Timeouts() ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference">ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference</a>

---

##### `AttachmentTargetInput`<sup>Optional</sup> <a name="AttachmentTargetInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.attachmentTargetInput"></a>

```go
func AttachmentTargetInput() *string
```

- *Type:* *string

---

##### `FirewallPolicyInput`<sup>Optional</sup> <a name="FirewallPolicyInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.firewallPolicyInput"></a>

```go
func FirewallPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AttachmentTarget`<sup>Required</sup> <a name="AttachmentTarget" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.attachmentTarget"></a>

```go
func AttachmentTarget() *string
```

- *Type:* *string

---

##### `FirewallPolicy`<sup>Required</sup> <a name="FirewallPolicy" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.firewallPolicy"></a>

```go
func FirewallPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionNetworkFirewallPolicyAssociationConfig <a name="ComputeRegionNetworkFirewallPolicyAssociationConfig" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionnetworkfirewallpolicyassociation"

&computeregionnetworkfirewallpolicyassociation.ComputeRegionNetworkFirewallPolicyAssociationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AttachmentTarget: *string,
	FirewallPolicy: *string,
	Name: *string,
	Id: *string,
	Project: *string,
	Region: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.attachmentTarget">AttachmentTarget</a></code> | <code>*string</code> | The target that the firewall policy is attached to. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.firewallPolicy">FirewallPolicy</a></code> | <code>*string</code> | The firewall policy ID of the association. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.name">Name</a></code> | <code>*string</code> | The name for an association. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_firewall_policy_association#id ComputeRegionNetworkFirewallPolicyAssociation#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.project">Project</a></code> | <code>*string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.region">Region</a></code> | <code>*string</code> | The location of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts">ComputeRegionNetworkFirewallPolicyAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttachmentTarget`<sup>Required</sup> <a name="AttachmentTarget" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.attachmentTarget"></a>

```go
AttachmentTarget *string
```

- *Type:* *string

The target that the firewall policy is attached to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_firewall_policy_association#attachment_target ComputeRegionNetworkFirewallPolicyAssociation#attachment_target}

---

##### `FirewallPolicy`<sup>Required</sup> <a name="FirewallPolicy" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.firewallPolicy"></a>

```go
FirewallPolicy *string
```

- *Type:* *string

The firewall policy ID of the association.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_firewall_policy_association#firewall_policy ComputeRegionNetworkFirewallPolicyAssociation#firewall_policy}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name for an association.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_firewall_policy_association#name ComputeRegionNetworkFirewallPolicyAssociation#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_firewall_policy_association#id ComputeRegionNetworkFirewallPolicyAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_firewall_policy_association#project ComputeRegionNetworkFirewallPolicyAssociation#project}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The location of this resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_firewall_policy_association#region ComputeRegionNetworkFirewallPolicyAssociation#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.timeouts"></a>

```go
Timeouts ComputeRegionNetworkFirewallPolicyAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts">ComputeRegionNetworkFirewallPolicyAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_firewall_policy_association#timeouts ComputeRegionNetworkFirewallPolicyAssociation#timeouts}

---

### ComputeRegionNetworkFirewallPolicyAssociationTimeouts <a name="ComputeRegionNetworkFirewallPolicyAssociationTimeouts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionnetworkfirewallpolicyassociation"

&computeregionnetworkfirewallpolicyassociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_firewall_policy_association#create ComputeRegionNetworkFirewallPolicyAssociation#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_firewall_policy_association#delete ComputeRegionNetworkFirewallPolicyAssociation#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_firewall_policy_association#create ComputeRegionNetworkFirewallPolicyAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_network_firewall_policy_association#delete ComputeRegionNetworkFirewallPolicyAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference <a name="ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionnetworkfirewallpolicyassociation"

computeregionnetworkfirewallpolicyassociation.NewComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



