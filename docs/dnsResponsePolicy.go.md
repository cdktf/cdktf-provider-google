# `google_dns_response_policy`

Refer to the Terraform Registory for docs: [`google_dns_response_policy`](https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dns_response_policy).

# `dnsResponsePolicy` Submodule <a name="`dnsResponsePolicy` Submodule" id="@cdktf/provider-google.dnsResponsePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsResponsePolicy <a name="DnsResponsePolicy" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dns_response_policy google_dns_response_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsresponsepolicy"

dnsresponsepolicy.NewDnsResponsePolicy(scope Construct, id *string, config DnsResponsePolicyConfig) DnsResponsePolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig">DnsResponsePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig">DnsResponsePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.putGkeClusters">PutGkeClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.putNetworks">PutNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetGkeClusters">ResetGkeClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetNetworks">ResetNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutGkeClusters` <a name="PutGkeClusters" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.putGkeClusters"></a>

```go
func PutGkeClusters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.putGkeClusters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNetworks` <a name="PutNetworks" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.putNetworks"></a>

```go
func PutNetworks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.putNetworks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.putTimeouts"></a>

```go
func PutTimeouts(value DnsResponsePolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts">DnsResponsePolicyTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetGkeClusters` <a name="ResetGkeClusters" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetGkeClusters"></a>

```go
func ResetGkeClusters()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetNetworks` <a name="ResetNetworks" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetNetworks"></a>

```go
func ResetNetworks()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsresponsepolicy"

dnsresponsepolicy.DnsResponsePolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsresponsepolicy"

dnsresponsepolicy.DnsResponsePolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsresponsepolicy"

dnsresponsepolicy.DnsResponsePolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.gkeClusters">GkeClusters</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList">DnsResponsePolicyGkeClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.networks">Networks</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList">DnsResponsePolicyNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference">DnsResponsePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.gkeClustersInput">GkeClustersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.networksInput">NetworksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.responsePolicyNameInput">ResponsePolicyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.responsePolicyName">ResponsePolicyName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GkeClusters`<sup>Required</sup> <a name="GkeClusters" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.gkeClusters"></a>

```go
func GkeClusters() DnsResponsePolicyGkeClustersList
```

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList">DnsResponsePolicyGkeClustersList</a>

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.networks"></a>

```go
func Networks() DnsResponsePolicyNetworksList
```

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList">DnsResponsePolicyNetworksList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.timeouts"></a>

```go
func Timeouts() DnsResponsePolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference">DnsResponsePolicyTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `GkeClustersInput`<sup>Optional</sup> <a name="GkeClustersInput" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.gkeClustersInput"></a>

```go
func GkeClustersInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NetworksInput`<sup>Optional</sup> <a name="NetworksInput" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.networksInput"></a>

```go
func NetworksInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ResponsePolicyNameInput`<sup>Optional</sup> <a name="ResponsePolicyNameInput" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.responsePolicyNameInput"></a>

```go
func ResponsePolicyNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ResponsePolicyName`<sup>Required</sup> <a name="ResponsePolicyName" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.responsePolicyName"></a>

```go
func ResponsePolicyName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsResponsePolicyConfig <a name="DnsResponsePolicyConfig" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsresponsepolicy"

&dnsresponsepolicy.DnsResponsePolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ResponsePolicyName: *string,
	Description: *string,
	GkeClusters: interface{},
	Id: *string,
	Networks: interface{},
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.dnsResponsePolicy.DnsResponsePolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.responsePolicyName">ResponsePolicyName</a></code> | <code>*string</code> | The user assigned name for this Response Policy, such as 'myresponsepolicy'. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.description">Description</a></code> | <code>*string</code> | The description of the response policy, such as 'My new response policy'. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.gkeClusters">GkeClusters</a></code> | <code>interface{}</code> | gke_clusters block. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dns_response_policy#id DnsResponsePolicy#id}. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.networks">Networks</a></code> | <code>interface{}</code> | networks block. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dns_response_policy#project DnsResponsePolicy#project}. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts">DnsResponsePolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ResponsePolicyName`<sup>Required</sup> <a name="ResponsePolicyName" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.responsePolicyName"></a>

```go
ResponsePolicyName *string
```

- *Type:* *string

The user assigned name for this Response Policy, such as 'myresponsepolicy'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dns_response_policy#response_policy_name DnsResponsePolicy#response_policy_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the response policy, such as 'My new response policy'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dns_response_policy#description DnsResponsePolicy#description}

---

##### `GkeClusters`<sup>Optional</sup> <a name="GkeClusters" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.gkeClusters"></a>

```go
GkeClusters interface{}
```

- *Type:* interface{}

gke_clusters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dns_response_policy#gke_clusters DnsResponsePolicy#gke_clusters}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dns_response_policy#id DnsResponsePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Networks`<sup>Optional</sup> <a name="Networks" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.networks"></a>

```go
Networks interface{}
```

- *Type:* interface{}

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dns_response_policy#networks DnsResponsePolicy#networks}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dns_response_policy#project DnsResponsePolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.timeouts"></a>

```go
Timeouts DnsResponsePolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts">DnsResponsePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dns_response_policy#timeouts DnsResponsePolicy#timeouts}

---

### DnsResponsePolicyGkeClusters <a name="DnsResponsePolicyGkeClusters" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsresponsepolicy"

&dnsresponsepolicy.DnsResponsePolicyGkeClusters {
	GkeClusterName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters.property.gkeClusterName">GkeClusterName</a></code> | <code>*string</code> | The resource name of the cluster to bind this ManagedZone to. This should be specified in the format like 'projects/*\/locations/*\/clusters/*'. |

---

##### `GkeClusterName`<sup>Required</sup> <a name="GkeClusterName" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters.property.gkeClusterName"></a>

```go
GkeClusterName *string
```

- *Type:* *string

The resource name of the cluster to bind this ManagedZone to. This should be specified in the format like 'projects/*\/locations/*\/clusters/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dns_response_policy#gke_cluster_name DnsResponsePolicy#gke_cluster_name}

---

### DnsResponsePolicyNetworks <a name="DnsResponsePolicyNetworks" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsresponsepolicy"

&dnsresponsepolicy.DnsResponsePolicyNetworks {
	NetworkUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks.property.networkUrl">NetworkUrl</a></code> | <code>*string</code> | The fully qualified URL of the VPC network to bind to. This should be formatted like 'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'. |

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks.property.networkUrl"></a>

```go
NetworkUrl *string
```

- *Type:* *string

The fully qualified URL of the VPC network to bind to. This should be formatted like 'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dns_response_policy#network_url DnsResponsePolicy#network_url}

---

### DnsResponsePolicyTimeouts <a name="DnsResponsePolicyTimeouts" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsresponsepolicy"

&dnsresponsepolicy.DnsResponsePolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dns_response_policy#create DnsResponsePolicy#create}. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dns_response_policy#delete DnsResponsePolicy#delete}. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dns_response_policy#update DnsResponsePolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dns_response_policy#create DnsResponsePolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dns_response_policy#delete DnsResponsePolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dns_response_policy#update DnsResponsePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DnsResponsePolicyGkeClustersList <a name="DnsResponsePolicyGkeClustersList" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsresponsepolicy"

dnsresponsepolicy.NewDnsResponsePolicyGkeClustersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DnsResponsePolicyGkeClustersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.get"></a>

```go
func Get(index *f64) DnsResponsePolicyGkeClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DnsResponsePolicyGkeClustersOutputReference <a name="DnsResponsePolicyGkeClustersOutputReference" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsresponsepolicy"

dnsresponsepolicy.NewDnsResponsePolicyGkeClustersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DnsResponsePolicyGkeClustersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.gkeClusterNameInput">GkeClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.gkeClusterName">GkeClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GkeClusterNameInput`<sup>Optional</sup> <a name="GkeClusterNameInput" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.gkeClusterNameInput"></a>

```go
func GkeClusterNameInput() *string
```

- *Type:* *string

---

##### `GkeClusterName`<sup>Required</sup> <a name="GkeClusterName" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.gkeClusterName"></a>

```go
func GkeClusterName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DnsResponsePolicyNetworksList <a name="DnsResponsePolicyNetworksList" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsresponsepolicy"

dnsresponsepolicy.NewDnsResponsePolicyNetworksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DnsResponsePolicyNetworksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.get"></a>

```go
func Get(index *f64) DnsResponsePolicyNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DnsResponsePolicyNetworksOutputReference <a name="DnsResponsePolicyNetworksOutputReference" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsresponsepolicy"

dnsresponsepolicy.NewDnsResponsePolicyNetworksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DnsResponsePolicyNetworksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.networkUrlInput">NetworkUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.networkUrl">NetworkUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkUrlInput`<sup>Optional</sup> <a name="NetworkUrlInput" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.networkUrlInput"></a>

```go
func NetworkUrlInput() *string
```

- *Type:* *string

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.networkUrl"></a>

```go
func NetworkUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DnsResponsePolicyTimeoutsOutputReference <a name="DnsResponsePolicyTimeoutsOutputReference" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsresponsepolicy"

dnsresponsepolicy.NewDnsResponsePolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DnsResponsePolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



