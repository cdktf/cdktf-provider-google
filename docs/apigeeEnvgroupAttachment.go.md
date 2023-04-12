# `apigeeEnvgroupAttachment` Submodule <a name="`apigeeEnvgroupAttachment` Submodule" id="@cdktf/provider-google.apigeeEnvgroupAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeEnvgroupAttachment <a name="ApigeeEnvgroupAttachment" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/apigee_envgroup_attachment google_apigee_envgroup_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeenvgroupattachment"

apigeeenvgroupattachment.NewApigeeEnvgroupAttachment(scope Construct, id *string, config ApigeeEnvgroupAttachmentConfig) ApigeeEnvgroupAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig">ApigeeEnvgroupAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig">ApigeeEnvgroupAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.putTimeouts"></a>

```go
func PutTimeouts(value ApigeeEnvgroupAttachmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts">ApigeeEnvgroupAttachmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeenvgroupattachment"

apigeeenvgroupattachment.ApigeeEnvgroupAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeenvgroupattachment"

apigeeenvgroupattachment.ApigeeEnvgroupAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeenvgroupattachment"

apigeeenvgroupattachment.ApigeeEnvgroupAttachment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference">ApigeeEnvgroupAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.envgroupIdInput">EnvgroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.envgroupId">EnvgroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.timeouts"></a>

```go
func Timeouts() ApigeeEnvgroupAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference">ApigeeEnvgroupAttachmentTimeoutsOutputReference</a>

---

##### `EnvgroupIdInput`<sup>Optional</sup> <a name="EnvgroupIdInput" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.envgroupIdInput"></a>

```go
func EnvgroupIdInput() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `EnvgroupId`<sup>Required</sup> <a name="EnvgroupId" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.envgroupId"></a>

```go
func EnvgroupId() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeEnvgroupAttachmentConfig <a name="ApigeeEnvgroupAttachmentConfig" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeenvgroupattachment"

&apigeeenvgroupattachment.ApigeeEnvgroupAttachmentConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EnvgroupId: *string,
	Environment: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.envgroupId">EnvgroupId</a></code> | <code>*string</code> | The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/envgroups/{{envgroup_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.environment">Environment</a></code> | <code>*string</code> | The resource ID of the environment. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_envgroup_attachment#id ApigeeEnvgroupAttachment#id}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts">ApigeeEnvgroupAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnvgroupId`<sup>Required</sup> <a name="EnvgroupId" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.envgroupId"></a>

```go
EnvgroupId *string
```

- *Type:* *string

The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/envgroups/{{envgroup_name}}'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_envgroup_attachment#envgroup_id ApigeeEnvgroupAttachment#envgroup_id}

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

The resource ID of the environment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_envgroup_attachment#environment ApigeeEnvgroupAttachment#environment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_envgroup_attachment#id ApigeeEnvgroupAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.timeouts"></a>

```go
Timeouts ApigeeEnvgroupAttachmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts">ApigeeEnvgroupAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_envgroup_attachment#timeouts ApigeeEnvgroupAttachment#timeouts}

---

### ApigeeEnvgroupAttachmentTimeouts <a name="ApigeeEnvgroupAttachmentTimeouts" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeenvgroupattachment"

&apigeeenvgroupattachment.ApigeeEnvgroupAttachmentTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_envgroup_attachment#create ApigeeEnvgroupAttachment#create}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_envgroup_attachment#delete ApigeeEnvgroupAttachment#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_envgroup_attachment#create ApigeeEnvgroupAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_envgroup_attachment#delete ApigeeEnvgroupAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeEnvgroupAttachmentTimeoutsOutputReference <a name="ApigeeEnvgroupAttachmentTimeoutsOutputReference" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeenvgroupattachment"

apigeeenvgroupattachment.NewApigeeEnvgroupAttachmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigeeEnvgroupAttachmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



