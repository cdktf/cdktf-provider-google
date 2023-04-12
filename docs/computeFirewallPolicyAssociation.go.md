# `computeFirewallPolicyAssociation` Submodule <a name="`computeFirewallPolicyAssociation` Submodule" id="@cdktf/provider-google.computeFirewallPolicyAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeFirewallPolicyAssociation <a name="ComputeFirewallPolicyAssociation" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_firewall_policy_association google_compute_firewall_policy_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computefirewallpolicyassociation"

computefirewallpolicyassociation.NewComputeFirewallPolicyAssociation(scope Construct, id *string, config ComputeFirewallPolicyAssociationConfig) ComputeFirewallPolicyAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationConfig">ComputeFirewallPolicyAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationConfig">ComputeFirewallPolicyAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.putTimeouts"></a>

```go
func PutTimeouts(value ComputeFirewallPolicyAssociationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeouts">ComputeFirewallPolicyAssociationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computefirewallpolicyassociation"

computefirewallpolicyassociation.ComputeFirewallPolicyAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computefirewallpolicyassociation"

computefirewallpolicyassociation.ComputeFirewallPolicyAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computefirewallpolicyassociation"

computefirewallpolicyassociation.ComputeFirewallPolicyAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.shortName">ShortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference">ComputeFirewallPolicyAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.attachmentTargetInput">AttachmentTargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.firewallPolicyInput">FirewallPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.attachmentTarget">AttachmentTarget</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.firewallPolicy">FirewallPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ShortName`<sup>Required</sup> <a name="ShortName" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.shortName"></a>

```go
func ShortName() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.timeouts"></a>

```go
func Timeouts() ComputeFirewallPolicyAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference">ComputeFirewallPolicyAssociationTimeoutsOutputReference</a>

---

##### `AttachmentTargetInput`<sup>Optional</sup> <a name="AttachmentTargetInput" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.attachmentTargetInput"></a>

```go
func AttachmentTargetInput() *string
```

- *Type:* *string

---

##### `FirewallPolicyInput`<sup>Optional</sup> <a name="FirewallPolicyInput" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.firewallPolicyInput"></a>

```go
func FirewallPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AttachmentTarget`<sup>Required</sup> <a name="AttachmentTarget" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.attachmentTarget"></a>

```go
func AttachmentTarget() *string
```

- *Type:* *string

---

##### `FirewallPolicy`<sup>Required</sup> <a name="FirewallPolicy" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.firewallPolicy"></a>

```go
func FirewallPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeFirewallPolicyAssociationConfig <a name="ComputeFirewallPolicyAssociationConfig" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computefirewallpolicyassociation"

&computefirewallpolicyassociation.ComputeFirewallPolicyAssociationConfig {
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
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationConfig.property.attachmentTarget">AttachmentTarget</a></code> | <code>*string</code> | The target that the firewall policy is attached to. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationConfig.property.firewallPolicy">FirewallPolicy</a></code> | <code>*string</code> | The firewall policy ID of the association. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationConfig.property.name">Name</a></code> | <code>*string</code> | The name for an association. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall_policy_association#id ComputeFirewallPolicyAssociation#id}. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeouts">ComputeFirewallPolicyAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttachmentTarget`<sup>Required</sup> <a name="AttachmentTarget" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationConfig.property.attachmentTarget"></a>

```go
AttachmentTarget *string
```

- *Type:* *string

The target that the firewall policy is attached to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall_policy_association#attachment_target ComputeFirewallPolicyAssociation#attachment_target}

---

##### `FirewallPolicy`<sup>Required</sup> <a name="FirewallPolicy" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationConfig.property.firewallPolicy"></a>

```go
FirewallPolicy *string
```

- *Type:* *string

The firewall policy ID of the association.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall_policy_association#firewall_policy ComputeFirewallPolicyAssociation#firewall_policy}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name for an association.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall_policy_association#name ComputeFirewallPolicyAssociation#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall_policy_association#id ComputeFirewallPolicyAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationConfig.property.timeouts"></a>

```go
Timeouts ComputeFirewallPolicyAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeouts">ComputeFirewallPolicyAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall_policy_association#timeouts ComputeFirewallPolicyAssociation#timeouts}

---

### ComputeFirewallPolicyAssociationTimeouts <a name="ComputeFirewallPolicyAssociationTimeouts" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computefirewallpolicyassociation"

&computefirewallpolicyassociation.ComputeFirewallPolicyAssociationTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall_policy_association#create ComputeFirewallPolicyAssociation#create}. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall_policy_association#delete ComputeFirewallPolicyAssociation#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall_policy_association#create ComputeFirewallPolicyAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall_policy_association#delete ComputeFirewallPolicyAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeFirewallPolicyAssociationTimeoutsOutputReference <a name="ComputeFirewallPolicyAssociationTimeoutsOutputReference" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computefirewallpolicyassociation"

computefirewallpolicyassociation.NewComputeFirewallPolicyAssociationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeFirewallPolicyAssociationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeFirewallPolicyAssociation.ComputeFirewallPolicyAssociationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



