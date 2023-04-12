# `dnsPolicy` Submodule <a name="`dnsPolicy` Submodule" id="@cdktf/provider-google.dnsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsPolicy <a name="DnsPolicy" id="@cdktf/provider-google.dnsPolicy.DnsPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/dns_policy google_dns_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnspolicy"

dnspolicy.NewDnsPolicy(scope Construct, id *string, config DnsPolicyConfig) DnsPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig">DnsPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig">DnsPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.putAlternativeNameServerConfig">PutAlternativeNameServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.putNetworks">PutNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.resetAlternativeNameServerConfig">ResetAlternativeNameServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.resetEnableInboundForwarding">ResetEnableInboundForwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.resetEnableLogging">ResetEnableLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.resetNetworks">ResetNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAlternativeNameServerConfig` <a name="PutAlternativeNameServerConfig" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.putAlternativeNameServerConfig"></a>

```go
func PutAlternativeNameServerConfig(value DnsPolicyAlternativeNameServerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.putAlternativeNameServerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig">DnsPolicyAlternativeNameServerConfig</a>

---

##### `PutNetworks` <a name="PutNetworks" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.putNetworks"></a>

```go
func PutNetworks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.putNetworks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.putTimeouts"></a>

```go
func PutTimeouts(value DnsPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts">DnsPolicyTimeouts</a>

---

##### `ResetAlternativeNameServerConfig` <a name="ResetAlternativeNameServerConfig" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.resetAlternativeNameServerConfig"></a>

```go
func ResetAlternativeNameServerConfig()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnableInboundForwarding` <a name="ResetEnableInboundForwarding" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.resetEnableInboundForwarding"></a>

```go
func ResetEnableInboundForwarding()
```

##### `ResetEnableLogging` <a name="ResetEnableLogging" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.resetEnableLogging"></a>

```go
func ResetEnableLogging()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetNetworks` <a name="ResetNetworks" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.resetNetworks"></a>

```go
func ResetNetworks()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnspolicy"

dnspolicy.DnsPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnspolicy"

dnspolicy.DnsPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnspolicy"

dnspolicy.DnsPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.alternativeNameServerConfig">AlternativeNameServerConfig</a></code> | <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference">DnsPolicyAlternativeNameServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.networks">Networks</a></code> | <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList">DnsPolicyNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference">DnsPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.alternativeNameServerConfigInput">AlternativeNameServerConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig">DnsPolicyAlternativeNameServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.enableInboundForwardingInput">EnableInboundForwardingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.enableLoggingInput">EnableLoggingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.networksInput">NetworksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.enableInboundForwarding">EnableInboundForwarding</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.enableLogging">EnableLogging</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AlternativeNameServerConfig`<sup>Required</sup> <a name="AlternativeNameServerConfig" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.alternativeNameServerConfig"></a>

```go
func AlternativeNameServerConfig() DnsPolicyAlternativeNameServerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference">DnsPolicyAlternativeNameServerConfigOutputReference</a>

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.networks"></a>

```go
func Networks() DnsPolicyNetworksList
```

- *Type:* <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList">DnsPolicyNetworksList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.timeouts"></a>

```go
func Timeouts() DnsPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference">DnsPolicyTimeoutsOutputReference</a>

---

##### `AlternativeNameServerConfigInput`<sup>Optional</sup> <a name="AlternativeNameServerConfigInput" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.alternativeNameServerConfigInput"></a>

```go
func AlternativeNameServerConfigInput() DnsPolicyAlternativeNameServerConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig">DnsPolicyAlternativeNameServerConfig</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnableInboundForwardingInput`<sup>Optional</sup> <a name="EnableInboundForwardingInput" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.enableInboundForwardingInput"></a>

```go
func EnableInboundForwardingInput() interface{}
```

- *Type:* interface{}

---

##### `EnableLoggingInput`<sup>Optional</sup> <a name="EnableLoggingInput" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.enableLoggingInput"></a>

```go
func EnableLoggingInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworksInput`<sup>Optional</sup> <a name="NetworksInput" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.networksInput"></a>

```go
func NetworksInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnableInboundForwarding`<sup>Required</sup> <a name="EnableInboundForwarding" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.enableInboundForwarding"></a>

```go
func EnableInboundForwarding() interface{}
```

- *Type:* interface{}

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.enableLogging"></a>

```go
func EnableLogging() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsPolicyAlternativeNameServerConfig <a name="DnsPolicyAlternativeNameServerConfig" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnspolicy"

&dnspolicy.DnsPolicyAlternativeNameServerConfig {
	TargetNameServers: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig.property.targetNameServers">TargetNameServers</a></code> | <code>interface{}</code> | target_name_servers block. |

---

##### `TargetNameServers`<sup>Required</sup> <a name="TargetNameServers" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig.property.targetNameServers"></a>

```go
TargetNameServers interface{}
```

- *Type:* interface{}

target_name_servers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy#target_name_servers DnsPolicy#target_name_servers}

---

### DnsPolicyAlternativeNameServerConfigTargetNameServers <a name="DnsPolicyAlternativeNameServerConfigTargetNameServers" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnspolicy"

&dnspolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers {
	Ipv4Address: *string,
	ForwardingPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers.property.ipv4Address">Ipv4Address</a></code> | <code>*string</code> | IPv4 address to forward to. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers.property.forwardingPath">ForwardingPath</a></code> | <code>*string</code> | Forwarding path for this TargetNameServer. |

---

##### `Ipv4Address`<sup>Required</sup> <a name="Ipv4Address" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers.property.ipv4Address"></a>

```go
Ipv4Address *string
```

- *Type:* *string

IPv4 address to forward to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy#ipv4_address DnsPolicy#ipv4_address}

---

##### `ForwardingPath`<sup>Optional</sup> <a name="ForwardingPath" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers.property.forwardingPath"></a>

```go
ForwardingPath *string
```

- *Type:* *string

Forwarding path for this TargetNameServer.

If unset or 'default' Cloud DNS will make forwarding
decision based on address ranges, i.e. RFC1918 addresses go to the VPC, Non-RFC1918 addresses go
to the Internet. When set to 'private', Cloud DNS will always send queries through VPC for this target Possible values: ["default", "private"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy#forwarding_path DnsPolicy#forwarding_path}

---

### DnsPolicyConfig <a name="DnsPolicyConfig" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnspolicy"

&dnspolicy.DnsPolicyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AlternativeNameServerConfig: github.com/cdktf/cdktf-provider-google-go/google.dnsPolicy.DnsPolicyAlternativeNameServerConfig,
	Description: *string,
	EnableInboundForwarding: interface{},
	EnableLogging: interface{},
	Id: *string,
	Networks: interface{},
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.dnsPolicy.DnsPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.name">Name</a></code> | <code>*string</code> | User assigned name for this policy. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.alternativeNameServerConfig">AlternativeNameServerConfig</a></code> | <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig">DnsPolicyAlternativeNameServerConfig</a></code> | alternative_name_server_config block. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.description">Description</a></code> | <code>*string</code> | A textual description field. Defaults to 'Managed by Terraform'. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.enableInboundForwarding">EnableInboundForwarding</a></code> | <code>interface{}</code> | Allows networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.enableLogging">EnableLogging</a></code> | <code>interface{}</code> | Controls whether logging is enabled for the networks bound to this policy. Defaults to no logging if not set. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy#id DnsPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.networks">Networks</a></code> | <code>interface{}</code> | networks block. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy#project DnsPolicy#project}. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts">DnsPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

User assigned name for this policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy#name DnsPolicy#name}

---

##### `AlternativeNameServerConfig`<sup>Optional</sup> <a name="AlternativeNameServerConfig" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.alternativeNameServerConfig"></a>

```go
AlternativeNameServerConfig DnsPolicyAlternativeNameServerConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig">DnsPolicyAlternativeNameServerConfig</a>

alternative_name_server_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy#alternative_name_server_config DnsPolicy#alternative_name_server_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A textual description field. Defaults to 'Managed by Terraform'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy#description DnsPolicy#description}

---

##### `EnableInboundForwarding`<sup>Optional</sup> <a name="EnableInboundForwarding" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.enableInboundForwarding"></a>

```go
EnableInboundForwarding interface{}
```

- *Type:* interface{}

Allows networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections.

When enabled, a
virtual IP address will be allocated from each of the sub-networks
that are bound to this policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy#enable_inbound_forwarding DnsPolicy#enable_inbound_forwarding}

---

##### `EnableLogging`<sup>Optional</sup> <a name="EnableLogging" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.enableLogging"></a>

```go
EnableLogging interface{}
```

- *Type:* interface{}

Controls whether logging is enabled for the networks bound to this policy. Defaults to no logging if not set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy#enable_logging DnsPolicy#enable_logging}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy#id DnsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Networks`<sup>Optional</sup> <a name="Networks" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.networks"></a>

```go
Networks interface{}
```

- *Type:* interface{}

networks block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy#networks DnsPolicy#networks}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy#project DnsPolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.timeouts"></a>

```go
Timeouts DnsPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts">DnsPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy#timeouts DnsPolicy#timeouts}

---

### DnsPolicyNetworks <a name="DnsPolicyNetworks" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnspolicy"

&dnspolicy.DnsPolicyNetworks {
	NetworkUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworks.property.networkUrl">NetworkUrl</a></code> | <code>*string</code> | The id or fully qualified URL of the VPC network to forward queries to. |

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworks.property.networkUrl"></a>

```go
NetworkUrl *string
```

- *Type:* *string

The id or fully qualified URL of the VPC network to forward queries to.

This should be formatted like 'projects/{project}/global/networks/{network}' or
'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy#network_url DnsPolicy#network_url}

---

### DnsPolicyTimeouts <a name="DnsPolicyTimeouts" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnspolicy"

&dnspolicy.DnsPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy#create DnsPolicy#create}. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy#delete DnsPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy#update DnsPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy#create DnsPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy#delete DnsPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_policy#update DnsPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DnsPolicyAlternativeNameServerConfigOutputReference <a name="DnsPolicyAlternativeNameServerConfigOutputReference" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnspolicy"

dnspolicy.NewDnsPolicyAlternativeNameServerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DnsPolicyAlternativeNameServerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.putTargetNameServers">PutTargetNameServers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetNameServers` <a name="PutTargetNameServers" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.putTargetNameServers"></a>

```go
func PutTargetNameServers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.putTargetNameServers.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.property.targetNameServers">TargetNameServers</a></code> | <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList">DnsPolicyAlternativeNameServerConfigTargetNameServersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.property.targetNameServersInput">TargetNameServersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig">DnsPolicyAlternativeNameServerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetNameServers`<sup>Required</sup> <a name="TargetNameServers" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.property.targetNameServers"></a>

```go
func TargetNameServers() DnsPolicyAlternativeNameServerConfigTargetNameServersList
```

- *Type:* <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList">DnsPolicyAlternativeNameServerConfigTargetNameServersList</a>

---

##### `TargetNameServersInput`<sup>Optional</sup> <a name="TargetNameServersInput" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.property.targetNameServersInput"></a>

```go
func TargetNameServersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DnsPolicyAlternativeNameServerConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig">DnsPolicyAlternativeNameServerConfig</a>

---


### DnsPolicyAlternativeNameServerConfigTargetNameServersList <a name="DnsPolicyAlternativeNameServerConfigTargetNameServersList" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnspolicy"

dnspolicy.NewDnsPolicyAlternativeNameServerConfigTargetNameServersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DnsPolicyAlternativeNameServerConfigTargetNameServersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.get"></a>

```go
func Get(index *f64) DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference <a name="DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnspolicy"

dnspolicy.NewDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.resetForwardingPath">ResetForwardingPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetForwardingPath` <a name="ResetForwardingPath" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.resetForwardingPath"></a>

```go
func ResetForwardingPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.forwardingPathInput">ForwardingPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.ipv4AddressInput">Ipv4AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.forwardingPath">ForwardingPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.ipv4Address">Ipv4Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ForwardingPathInput`<sup>Optional</sup> <a name="ForwardingPathInput" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.forwardingPathInput"></a>

```go
func ForwardingPathInput() *string
```

- *Type:* *string

---

##### `Ipv4AddressInput`<sup>Optional</sup> <a name="Ipv4AddressInput" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.ipv4AddressInput"></a>

```go
func Ipv4AddressInput() *string
```

- *Type:* *string

---

##### `ForwardingPath`<sup>Required</sup> <a name="ForwardingPath" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.forwardingPath"></a>

```go
func ForwardingPath() *string
```

- *Type:* *string

---

##### `Ipv4Address`<sup>Required</sup> <a name="Ipv4Address" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.ipv4Address"></a>

```go
func Ipv4Address() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DnsPolicyNetworksList <a name="DnsPolicyNetworksList" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnspolicy"

dnspolicy.NewDnsPolicyNetworksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DnsPolicyNetworksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.get"></a>

```go
func Get(index *f64) DnsPolicyNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DnsPolicyNetworksOutputReference <a name="DnsPolicyNetworksOutputReference" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnspolicy"

dnspolicy.NewDnsPolicyNetworksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DnsPolicyNetworksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.property.networkUrlInput">NetworkUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.property.networkUrl">NetworkUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkUrlInput`<sup>Optional</sup> <a name="NetworkUrlInput" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.property.networkUrlInput"></a>

```go
func NetworkUrlInput() *string
```

- *Type:* *string

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.property.networkUrl"></a>

```go
func NetworkUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DnsPolicyTimeoutsOutputReference <a name="DnsPolicyTimeoutsOutputReference" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnspolicy"

dnspolicy.NewDnsPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DnsPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



