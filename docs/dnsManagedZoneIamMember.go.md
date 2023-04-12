# `dnsManagedZoneIamMember` Submodule <a name="`dnsManagedZoneIamMember` Submodule" id="@cdktf/provider-google.dnsManagedZoneIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsManagedZoneIamMember <a name="DnsManagedZoneIamMember" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_member google_dns_managed_zone_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzoneiammember"

dnsmanagedzoneiammember.NewDnsManagedZoneIamMember(scope Construct, id *string, config DnsManagedZoneIamMemberConfig) DnsManagedZoneIamMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig">DnsManagedZoneIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig">DnsManagedZoneIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.putCondition"></a>

```go
func PutCondition(value DnsManagedZoneIamMemberCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberCondition">DnsManagedZoneIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzoneiammember"

dnsmanagedzoneiammember.DnsManagedZoneIamMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzoneiammember"

dnsmanagedzoneiammember.DnsManagedZoneIamMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzoneiammember"

dnsmanagedzoneiammember.DnsManagedZoneIamMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference">DnsManagedZoneIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberCondition">DnsManagedZoneIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.managedZoneInput">ManagedZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.memberInput">MemberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.managedZone">ManagedZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.member">Member</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.condition"></a>

```go
func Condition() DnsManagedZoneIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference">DnsManagedZoneIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.conditionInput"></a>

```go
func ConditionInput() DnsManagedZoneIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberCondition">DnsManagedZoneIamMemberCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedZoneInput`<sup>Optional</sup> <a name="ManagedZoneInput" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.managedZoneInput"></a>

```go
func ManagedZoneInput() *string
```

- *Type:* *string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.memberInput"></a>

```go
func MemberInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedZone`<sup>Required</sup> <a name="ManagedZone" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.managedZone"></a>

```go
func ManagedZone() *string
```

- *Type:* *string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.member"></a>

```go
func Member() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsManagedZoneIamMemberCondition <a name="DnsManagedZoneIamMemberCondition" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzoneiammember"

&dnsmanagedzoneiammember.DnsManagedZoneIamMemberCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_member#expression DnsManagedZoneIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_member#title DnsManagedZoneIamMember#title}. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_member#description DnsManagedZoneIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_member#expression DnsManagedZoneIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_member#title DnsManagedZoneIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_member#description DnsManagedZoneIamMember#description}.

---

### DnsManagedZoneIamMemberConfig <a name="DnsManagedZoneIamMemberConfig" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzoneiammember"

&dnsmanagedzoneiammember.DnsManagedZoneIamMemberConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagedZone: *string,
	Member: *string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberCondition,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.managedZone">ManagedZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_member#managed_zone DnsManagedZoneIamMember#managed_zone}. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.member">Member</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_member#member DnsManagedZoneIamMember#member}. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_member#role DnsManagedZoneIamMember#role}. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberCondition">DnsManagedZoneIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_member#id DnsManagedZoneIamMember#id}. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_member#project DnsManagedZoneIamMember#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedZone`<sup>Required</sup> <a name="ManagedZone" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.managedZone"></a>

```go
ManagedZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_member#managed_zone DnsManagedZoneIamMember#managed_zone}.

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.member"></a>

```go
Member *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_member#member DnsManagedZoneIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_member#role DnsManagedZoneIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.condition"></a>

```go
Condition DnsManagedZoneIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberCondition">DnsManagedZoneIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_member#condition DnsManagedZoneIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_member#id DnsManagedZoneIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_member#project DnsManagedZoneIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### DnsManagedZoneIamMemberConditionOutputReference <a name="DnsManagedZoneIamMemberConditionOutputReference" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzoneiammember"

dnsmanagedzoneiammember.NewDnsManagedZoneIamMemberConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DnsManagedZoneIamMemberConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberCondition">DnsManagedZoneIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() DnsManagedZoneIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZoneIamMember.DnsManagedZoneIamMemberCondition">DnsManagedZoneIamMemberCondition</a>

---



