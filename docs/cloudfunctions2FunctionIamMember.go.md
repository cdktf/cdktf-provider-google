# `cloudfunctions2FunctionIamMember` Submodule <a name="`cloudfunctions2FunctionIamMember` Submodule" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cloudfunctions2FunctionIamMember <a name="Cloudfunctions2FunctionIamMember" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function_iam_member google_cloudfunctions2_function_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2functioniammember"

cloudfunctions2functioniammember.NewCloudfunctions2FunctionIamMember(scope Construct, id *string, config Cloudfunctions2FunctionIamMemberConfig) Cloudfunctions2FunctionIamMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConfig">Cloudfunctions2FunctionIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConfig">Cloudfunctions2FunctionIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.putCondition"></a>

```go
func PutCondition(value Cloudfunctions2FunctionIamMemberCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberCondition">Cloudfunctions2FunctionIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2functioniammember"

cloudfunctions2functioniammember.Cloudfunctions2FunctionIamMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2functioniammember"

cloudfunctions2functioniammember.Cloudfunctions2FunctionIamMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2functioniammember"

cloudfunctions2functioniammember.Cloudfunctions2FunctionIamMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference">Cloudfunctions2FunctionIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.cloudFunctionInput">CloudFunctionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberCondition">Cloudfunctions2FunctionIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.memberInput">MemberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.cloudFunction">CloudFunction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.member">Member</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.condition"></a>

```go
func Condition() Cloudfunctions2FunctionIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference">Cloudfunctions2FunctionIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `CloudFunctionInput`<sup>Optional</sup> <a name="CloudFunctionInput" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.cloudFunctionInput"></a>

```go
func CloudFunctionInput() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.conditionInput"></a>

```go
func ConditionInput() Cloudfunctions2FunctionIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberCondition">Cloudfunctions2FunctionIamMemberCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.memberInput"></a>

```go
func MemberInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `CloudFunction`<sup>Required</sup> <a name="CloudFunction" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.cloudFunction"></a>

```go
func CloudFunction() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.member"></a>

```go
func Member() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Cloudfunctions2FunctionIamMemberCondition <a name="Cloudfunctions2FunctionIamMemberCondition" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2functioniammember"

&cloudfunctions2functioniammember.Cloudfunctions2FunctionIamMemberCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function_iam_member#expression Cloudfunctions2FunctionIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function_iam_member#title Cloudfunctions2FunctionIamMember#title}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function_iam_member#description Cloudfunctions2FunctionIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function_iam_member#expression Cloudfunctions2FunctionIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function_iam_member#title Cloudfunctions2FunctionIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function_iam_member#description Cloudfunctions2FunctionIamMember#description}.

---

### Cloudfunctions2FunctionIamMemberConfig <a name="Cloudfunctions2FunctionIamMemberConfig" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2functioniammember"

&cloudfunctions2functioniammember.Cloudfunctions2FunctionIamMemberConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CloudFunction: *string,
	Member: *string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberCondition,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConfig.property.cloudFunction">CloudFunction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function_iam_member#cloud_function Cloudfunctions2FunctionIamMember#cloud_function}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConfig.property.member">Member</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function_iam_member#member Cloudfunctions2FunctionIamMember#member}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function_iam_member#role Cloudfunctions2FunctionIamMember#role}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberCondition">Cloudfunctions2FunctionIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function_iam_member#id Cloudfunctions2FunctionIamMember#id}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function_iam_member#location Cloudfunctions2FunctionIamMember#location}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function_iam_member#project Cloudfunctions2FunctionIamMember#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudFunction`<sup>Required</sup> <a name="CloudFunction" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConfig.property.cloudFunction"></a>

```go
CloudFunction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function_iam_member#cloud_function Cloudfunctions2FunctionIamMember#cloud_function}.

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConfig.property.member"></a>

```go
Member *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function_iam_member#member Cloudfunctions2FunctionIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function_iam_member#role Cloudfunctions2FunctionIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConfig.property.condition"></a>

```go
Condition Cloudfunctions2FunctionIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberCondition">Cloudfunctions2FunctionIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function_iam_member#condition Cloudfunctions2FunctionIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function_iam_member#id Cloudfunctions2FunctionIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function_iam_member#location Cloudfunctions2FunctionIamMember#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions2_function_iam_member#project Cloudfunctions2FunctionIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### Cloudfunctions2FunctionIamMemberConditionOutputReference <a name="Cloudfunctions2FunctionIamMemberConditionOutputReference" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctions2functioniammember"

cloudfunctions2functioniammember.NewCloudfunctions2FunctionIamMemberConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Cloudfunctions2FunctionIamMemberConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberCondition">Cloudfunctions2FunctionIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() Cloudfunctions2FunctionIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2FunctionIamMember.Cloudfunctions2FunctionIamMemberCondition">Cloudfunctions2FunctionIamMemberCondition</a>

---



