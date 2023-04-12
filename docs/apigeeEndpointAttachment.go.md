# `apigeeEndpointAttachment` Submodule <a name="`apigeeEndpointAttachment` Submodule" id="@cdktf/provider-google.apigeeEndpointAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeEndpointAttachment <a name="ApigeeEndpointAttachment" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/apigee_endpoint_attachment google_apigee_endpoint_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeendpointattachment"

apigeeendpointattachment.NewApigeeEndpointAttachment(scope Construct, id *string, config ApigeeEndpointAttachmentConfig) ApigeeEndpointAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig">ApigeeEndpointAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig">ApigeeEndpointAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.putTimeouts"></a>

```go
func PutTimeouts(value ApigeeEndpointAttachmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeouts">ApigeeEndpointAttachmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeendpointattachment"

apigeeendpointattachment.ApigeeEndpointAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeendpointattachment"

apigeeendpointattachment.ApigeeEndpointAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeendpointattachment"

apigeeendpointattachment.ApigeeEndpointAttachment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.connectionState">ConnectionState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference">ApigeeEndpointAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.endpointAttachmentIdInput">EndpointAttachmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.orgIdInput">OrgIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.serviceAttachmentInput">ServiceAttachmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.endpointAttachmentId">EndpointAttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.orgId">OrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.serviceAttachment">ServiceAttachment</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionState`<sup>Required</sup> <a name="ConnectionState" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.connectionState"></a>

```go
func ConnectionState() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.timeouts"></a>

```go
func Timeouts() ApigeeEndpointAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference">ApigeeEndpointAttachmentTimeoutsOutputReference</a>

---

##### `EndpointAttachmentIdInput`<sup>Optional</sup> <a name="EndpointAttachmentIdInput" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.endpointAttachmentIdInput"></a>

```go
func EndpointAttachmentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.orgIdInput"></a>

```go
func OrgIdInput() *string
```

- *Type:* *string

---

##### `ServiceAttachmentInput`<sup>Optional</sup> <a name="ServiceAttachmentInput" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.serviceAttachmentInput"></a>

```go
func ServiceAttachmentInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointAttachmentId`<sup>Required</sup> <a name="EndpointAttachmentId" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.endpointAttachmentId"></a>

```go
func EndpointAttachmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.orgId"></a>

```go
func OrgId() *string
```

- *Type:* *string

---

##### `ServiceAttachment`<sup>Required</sup> <a name="ServiceAttachment" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.serviceAttachment"></a>

```go
func ServiceAttachment() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeEndpointAttachmentConfig <a name="ApigeeEndpointAttachmentConfig" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeendpointattachment"

&apigeeendpointattachment.ApigeeEndpointAttachmentConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EndpointAttachmentId: *string,
	Location: *string,
	OrgId: *string,
	ServiceAttachment: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.endpointAttachmentId">EndpointAttachmentId</a></code> | <code>*string</code> | ID of the endpoint attachment. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.location">Location</a></code> | <code>*string</code> | Location of the endpoint attachment. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.orgId">OrgId</a></code> | <code>*string</code> | The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.serviceAttachment">ServiceAttachment</a></code> | <code>*string</code> | Format: projects/*\/regions/*\/serviceAttachments/*. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_endpoint_attachment#id ApigeeEndpointAttachment#id}. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeouts">ApigeeEndpointAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EndpointAttachmentId`<sup>Required</sup> <a name="EndpointAttachmentId" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.endpointAttachmentId"></a>

```go
EndpointAttachmentId *string
```

- *Type:* *string

ID of the endpoint attachment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_endpoint_attachment#endpoint_attachment_id ApigeeEndpointAttachment#endpoint_attachment_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Location of the endpoint attachment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_endpoint_attachment#location ApigeeEndpointAttachment#location}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.orgId"></a>

```go
OrgId *string
```

- *Type:* *string

The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_endpoint_attachment#org_id ApigeeEndpointAttachment#org_id}

---

##### `ServiceAttachment`<sup>Required</sup> <a name="ServiceAttachment" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.serviceAttachment"></a>

```go
ServiceAttachment *string
```

- *Type:* *string

Format: projects/*\/regions/*\/serviceAttachments/*.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_endpoint_attachment#service_attachment ApigeeEndpointAttachment#service_attachment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_endpoint_attachment#id ApigeeEndpointAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.timeouts"></a>

```go
Timeouts ApigeeEndpointAttachmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeouts">ApigeeEndpointAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_endpoint_attachment#timeouts ApigeeEndpointAttachment#timeouts}

---

### ApigeeEndpointAttachmentTimeouts <a name="ApigeeEndpointAttachmentTimeouts" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeendpointattachment"

&apigeeendpointattachment.ApigeeEndpointAttachmentTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_endpoint_attachment#create ApigeeEndpointAttachment#create}. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_endpoint_attachment#delete ApigeeEndpointAttachment#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_endpoint_attachment#create ApigeeEndpointAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_endpoint_attachment#delete ApigeeEndpointAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeEndpointAttachmentTimeoutsOutputReference <a name="ApigeeEndpointAttachmentTimeoutsOutputReference" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeendpointattachment"

apigeeendpointattachment.NewApigeeEndpointAttachmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigeeEndpointAttachmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



