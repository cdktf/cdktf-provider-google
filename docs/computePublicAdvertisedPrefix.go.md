# `google_compute_public_advertised_prefix`

Refer to the Terraform Registory for docs: [`google_compute_public_advertised_prefix`](https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/compute_public_advertised_prefix).

# `computePublicAdvertisedPrefix` Submodule <a name="`computePublicAdvertisedPrefix` Submodule" id="@cdktf/provider-google.computePublicAdvertisedPrefix"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputePublicAdvertisedPrefix <a name="ComputePublicAdvertisedPrefix" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/compute_public_advertised_prefix google_compute_public_advertised_prefix}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computepublicadvertisedprefix"

computepublicadvertisedprefix.NewComputePublicAdvertisedPrefix(scope Construct, id *string, config ComputePublicAdvertisedPrefixConfig) ComputePublicAdvertisedPrefix
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig">ComputePublicAdvertisedPrefixConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig">ComputePublicAdvertisedPrefixConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.putTimeouts"></a>

```go
func PutTimeouts(value ComputePublicAdvertisedPrefixTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts">ComputePublicAdvertisedPrefixTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computepublicadvertisedprefix"

computepublicadvertisedprefix.ComputePublicAdvertisedPrefix_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computepublicadvertisedprefix"

computepublicadvertisedprefix.ComputePublicAdvertisedPrefix_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computepublicadvertisedprefix"

computepublicadvertisedprefix.ComputePublicAdvertisedPrefix_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference">ComputePublicAdvertisedPrefixTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.dnsVerificationIpInput">DnsVerificationIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.ipCidrRangeInput">IpCidrRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.dnsVerificationIp">DnsVerificationIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.ipCidrRange">IpCidrRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.timeouts"></a>

```go
func Timeouts() ComputePublicAdvertisedPrefixTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference">ComputePublicAdvertisedPrefixTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DnsVerificationIpInput`<sup>Optional</sup> <a name="DnsVerificationIpInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.dnsVerificationIpInput"></a>

```go
func DnsVerificationIpInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpCidrRangeInput`<sup>Optional</sup> <a name="IpCidrRangeInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.ipCidrRangeInput"></a>

```go
func IpCidrRangeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DnsVerificationIp`<sup>Required</sup> <a name="DnsVerificationIp" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.dnsVerificationIp"></a>

```go
func DnsVerificationIp() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.ipCidrRange"></a>

```go
func IpCidrRange() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputePublicAdvertisedPrefixConfig <a name="ComputePublicAdvertisedPrefixConfig" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computepublicadvertisedprefix"

&computepublicadvertisedprefix.ComputePublicAdvertisedPrefixConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DnsVerificationIp: *string,
	IpCidrRange: *string,
	Name: *string,
	Description: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.dnsVerificationIp">DnsVerificationIp</a></code> | <code>*string</code> | The IPv4 address to be used for reverse DNS verification. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.ipCidrRange">IpCidrRange</a></code> | <code>*string</code> | The IPv4 address range, in CIDR format, represented by this public advertised prefix. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/compute_public_advertised_prefix#id ComputePublicAdvertisedPrefix#id}. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/compute_public_advertised_prefix#project ComputePublicAdvertisedPrefix#project}. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts">ComputePublicAdvertisedPrefixTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DnsVerificationIp`<sup>Required</sup> <a name="DnsVerificationIp" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.dnsVerificationIp"></a>

```go
DnsVerificationIp *string
```

- *Type:* *string

The IPv4 address to be used for reverse DNS verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/compute_public_advertised_prefix#dns_verification_ip ComputePublicAdvertisedPrefix#dns_verification_ip}

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.ipCidrRange"></a>

```go
IpCidrRange *string
```

- *Type:* *string

The IPv4 address range, in CIDR format, represented by this public advertised prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/compute_public_advertised_prefix#ip_cidr_range ComputePublicAdvertisedPrefix#ip_cidr_range}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/compute_public_advertised_prefix#name ComputePublicAdvertisedPrefix#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/compute_public_advertised_prefix#description ComputePublicAdvertisedPrefix#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/compute_public_advertised_prefix#id ComputePublicAdvertisedPrefix#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/compute_public_advertised_prefix#project ComputePublicAdvertisedPrefix#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.timeouts"></a>

```go
Timeouts ComputePublicAdvertisedPrefixTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts">ComputePublicAdvertisedPrefixTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/compute_public_advertised_prefix#timeouts ComputePublicAdvertisedPrefix#timeouts}

---

### ComputePublicAdvertisedPrefixTimeouts <a name="ComputePublicAdvertisedPrefixTimeouts" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computepublicadvertisedprefix"

&computepublicadvertisedprefix.ComputePublicAdvertisedPrefixTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/compute_public_advertised_prefix#create ComputePublicAdvertisedPrefix#create}. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/compute_public_advertised_prefix#delete ComputePublicAdvertisedPrefix#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/compute_public_advertised_prefix#create ComputePublicAdvertisedPrefix#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/compute_public_advertised_prefix#delete ComputePublicAdvertisedPrefix#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputePublicAdvertisedPrefixTimeoutsOutputReference <a name="ComputePublicAdvertisedPrefixTimeoutsOutputReference" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computepublicadvertisedprefix"

computepublicadvertisedprefix.NewComputePublicAdvertisedPrefixTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputePublicAdvertisedPrefixTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



