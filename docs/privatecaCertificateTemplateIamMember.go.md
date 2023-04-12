# `privatecaCertificateTemplateIamMember` Submodule <a name="`privatecaCertificateTemplateIamMember` Submodule" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivatecaCertificateTemplateIamMember <a name="PrivatecaCertificateTemplateIamMember" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template_iam_member google_privateca_certificate_template_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacertificatetemplateiammember"

privatecacertificatetemplateiammember.NewPrivatecaCertificateTemplateIamMember(scope Construct, id *string, config PrivatecaCertificateTemplateIamMemberConfig) PrivatecaCertificateTemplateIamMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig">PrivatecaCertificateTemplateIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig">PrivatecaCertificateTemplateIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.putCondition"></a>

```go
func PutCondition(value PrivatecaCertificateTemplateIamMemberCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition">PrivatecaCertificateTemplateIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacertificatetemplateiammember"

privatecacertificatetemplateiammember.PrivatecaCertificateTemplateIamMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacertificatetemplateiammember"

privatecacertificatetemplateiammember.PrivatecaCertificateTemplateIamMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacertificatetemplateiammember"

privatecacertificatetemplateiammember.PrivatecaCertificateTemplateIamMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference">PrivatecaCertificateTemplateIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.certificateTemplateInput">CertificateTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition">PrivatecaCertificateTemplateIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.memberInput">MemberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.certificateTemplate">CertificateTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.member">Member</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.condition"></a>

```go
func Condition() PrivatecaCertificateTemplateIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference">PrivatecaCertificateTemplateIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `CertificateTemplateInput`<sup>Optional</sup> <a name="CertificateTemplateInput" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.certificateTemplateInput"></a>

```go
func CertificateTemplateInput() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.conditionInput"></a>

```go
func ConditionInput() PrivatecaCertificateTemplateIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition">PrivatecaCertificateTemplateIamMemberCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.memberInput"></a>

```go
func MemberInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `CertificateTemplate`<sup>Required</sup> <a name="CertificateTemplate" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.certificateTemplate"></a>

```go
func CertificateTemplate() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.member"></a>

```go
func Member() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivatecaCertificateTemplateIamMemberCondition <a name="PrivatecaCertificateTemplateIamMemberCondition" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacertificatetemplateiammember"

&privatecacertificatetemplateiammember.PrivatecaCertificateTemplateIamMemberCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template_iam_member#expression PrivatecaCertificateTemplateIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template_iam_member#title PrivatecaCertificateTemplateIamMember#title}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template_iam_member#description PrivatecaCertificateTemplateIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template_iam_member#expression PrivatecaCertificateTemplateIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template_iam_member#title PrivatecaCertificateTemplateIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template_iam_member#description PrivatecaCertificateTemplateIamMember#description}.

---

### PrivatecaCertificateTemplateIamMemberConfig <a name="PrivatecaCertificateTemplateIamMemberConfig" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacertificatetemplateiammember"

&privatecacertificatetemplateiammember.PrivatecaCertificateTemplateIamMemberConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CertificateTemplate: *string,
	Member: *string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.certificateTemplate">CertificateTemplate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template_iam_member#certificate_template PrivatecaCertificateTemplateIamMember#certificate_template}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.member">Member</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template_iam_member#member PrivatecaCertificateTemplateIamMember#member}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template_iam_member#role PrivatecaCertificateTemplateIamMember#role}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition">PrivatecaCertificateTemplateIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template_iam_member#id PrivatecaCertificateTemplateIamMember#id}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template_iam_member#location PrivatecaCertificateTemplateIamMember#location}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template_iam_member#project PrivatecaCertificateTemplateIamMember#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CertificateTemplate`<sup>Required</sup> <a name="CertificateTemplate" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.certificateTemplate"></a>

```go
CertificateTemplate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template_iam_member#certificate_template PrivatecaCertificateTemplateIamMember#certificate_template}.

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.member"></a>

```go
Member *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template_iam_member#member PrivatecaCertificateTemplateIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template_iam_member#role PrivatecaCertificateTemplateIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.condition"></a>

```go
Condition PrivatecaCertificateTemplateIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition">PrivatecaCertificateTemplateIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template_iam_member#condition PrivatecaCertificateTemplateIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template_iam_member#id PrivatecaCertificateTemplateIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template_iam_member#location PrivatecaCertificateTemplateIamMember#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template_iam_member#project PrivatecaCertificateTemplateIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivatecaCertificateTemplateIamMemberConditionOutputReference <a name="PrivatecaCertificateTemplateIamMemberConditionOutputReference" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacertificatetemplateiammember"

privatecacertificatetemplateiammember.NewPrivatecaCertificateTemplateIamMemberConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivatecaCertificateTemplateIamMemberConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition">PrivatecaCertificateTemplateIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() PrivatecaCertificateTemplateIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition">PrivatecaCertificateTemplateIamMemberCondition</a>

---



