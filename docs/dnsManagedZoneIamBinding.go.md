# `dnsManagedZoneIamBinding` Submodule <a name="`dnsManagedZoneIamBinding` Submodule" id="@cdktf/provider-google.dnsManagedZoneIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsManagedZoneIamBinding <a name="DnsManagedZoneIamBinding" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_binding google_dns_managed_zone_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzoneiambinding"

dnsmanagedzoneiambinding.NewDnsManagedZoneIamBinding(scope Construct, id *string, config DnsManagedZoneIamBindingConfig) DnsManagedZoneIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConfig">DnsManagedZoneIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConfig">DnsManagedZoneIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.putCondition"></a>

```go
func PutCondition(value DnsManagedZoneIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingCondition">DnsManagedZoneIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzoneiambinding"

dnsmanagedzoneiambinding.DnsManagedZoneIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzoneiambinding"

dnsmanagedzoneiambinding.DnsManagedZoneIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzoneiambinding"

dnsmanagedzoneiambinding.DnsManagedZoneIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference">DnsManagedZoneIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingCondition">DnsManagedZoneIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.managedZoneInput">ManagedZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.managedZone">ManagedZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.condition"></a>

```go
func Condition() DnsManagedZoneIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference">DnsManagedZoneIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.conditionInput"></a>

```go
func ConditionInput() DnsManagedZoneIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingCondition">DnsManagedZoneIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedZoneInput`<sup>Optional</sup> <a name="ManagedZoneInput" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.managedZoneInput"></a>

```go
func ManagedZoneInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedZone`<sup>Required</sup> <a name="ManagedZone" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.managedZone"></a>

```go
func ManagedZone() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsManagedZoneIamBindingCondition <a name="DnsManagedZoneIamBindingCondition" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzoneiambinding"

&dnsmanagedzoneiambinding.DnsManagedZoneIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_binding#expression DnsManagedZoneIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_binding#title DnsManagedZoneIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_binding#description DnsManagedZoneIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_binding#expression DnsManagedZoneIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_binding#title DnsManagedZoneIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_binding#description DnsManagedZoneIamBinding#description}.

---

### DnsManagedZoneIamBindingConfig <a name="DnsManagedZoneIamBindingConfig" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzoneiambinding"

&dnsmanagedzoneiambinding.DnsManagedZoneIamBindingConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagedZone: *string,
	Members: *[]*string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingCondition,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConfig.property.managedZone">ManagedZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_binding#managed_zone DnsManagedZoneIamBinding#managed_zone}. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_binding#members DnsManagedZoneIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_binding#role DnsManagedZoneIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingCondition">DnsManagedZoneIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_binding#id DnsManagedZoneIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_binding#project DnsManagedZoneIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedZone`<sup>Required</sup> <a name="ManagedZone" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConfig.property.managedZone"></a>

```go
ManagedZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_binding#managed_zone DnsManagedZoneIamBinding#managed_zone}.

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_binding#members DnsManagedZoneIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_binding#role DnsManagedZoneIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConfig.property.condition"></a>

```go
Condition DnsManagedZoneIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingCondition">DnsManagedZoneIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_binding#condition DnsManagedZoneIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_binding#id DnsManagedZoneIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone_iam_binding#project DnsManagedZoneIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### DnsManagedZoneIamBindingConditionOutputReference <a name="DnsManagedZoneIamBindingConditionOutputReference" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzoneiambinding"

dnsmanagedzoneiambinding.NewDnsManagedZoneIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DnsManagedZoneIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingCondition">DnsManagedZoneIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() DnsManagedZoneIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZoneIamBinding.DnsManagedZoneIamBindingCondition">DnsManagedZoneIamBindingCondition</a>

---



