# `artifactRegistryRepositoryIamMember` Submodule <a name="`artifactRegistryRepositoryIamMember` Submodule" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArtifactRegistryRepositoryIamMember <a name="ArtifactRegistryRepositoryIamMember" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository_iam_member google_artifact_registry_repository_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/artifactregistryrepositoryiammember"

artifactregistryrepositoryiammember.NewArtifactRegistryRepositoryIamMember(scope Construct, id *string, config ArtifactRegistryRepositoryIamMemberConfig) ArtifactRegistryRepositoryIamMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig">ArtifactRegistryRepositoryIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig">ArtifactRegistryRepositoryIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.putCondition"></a>

```go
func PutCondition(value ArtifactRegistryRepositoryIamMemberCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition">ArtifactRegistryRepositoryIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/artifactregistryrepositoryiammember"

artifactregistryrepositoryiammember.ArtifactRegistryRepositoryIamMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/artifactregistryrepositoryiammember"

artifactregistryrepositoryiammember.ArtifactRegistryRepositoryIamMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/artifactregistryrepositoryiammember"

artifactregistryrepositoryiammember.ArtifactRegistryRepositoryIamMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference">ArtifactRegistryRepositoryIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition">ArtifactRegistryRepositoryIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.memberInput">MemberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.member">Member</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.condition"></a>

```go
func Condition() ArtifactRegistryRepositoryIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference">ArtifactRegistryRepositoryIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.conditionInput"></a>

```go
func ConditionInput() ArtifactRegistryRepositoryIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition">ArtifactRegistryRepositoryIamMemberCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.memberInput"></a>

```go
func MemberInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.member"></a>

```go
func Member() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ArtifactRegistryRepositoryIamMemberCondition <a name="ArtifactRegistryRepositoryIamMemberCondition" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/artifactregistryrepositoryiammember"

&artifactregistryrepositoryiammember.ArtifactRegistryRepositoryIamMemberCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository_iam_member#expression ArtifactRegistryRepositoryIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository_iam_member#title ArtifactRegistryRepositoryIamMember#title}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository_iam_member#description ArtifactRegistryRepositoryIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository_iam_member#expression ArtifactRegistryRepositoryIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository_iam_member#title ArtifactRegistryRepositoryIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository_iam_member#description ArtifactRegistryRepositoryIamMember#description}.

---

### ArtifactRegistryRepositoryIamMemberConfig <a name="ArtifactRegistryRepositoryIamMemberConfig" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/artifactregistryrepositoryiammember"

&artifactregistryrepositoryiammember.ArtifactRegistryRepositoryIamMemberConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Member: *string,
	Repository: *string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.member">Member</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository_iam_member#member ArtifactRegistryRepositoryIamMember#member}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.repository">Repository</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository_iam_member#repository ArtifactRegistryRepositoryIamMember#repository}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository_iam_member#role ArtifactRegistryRepositoryIamMember#role}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition">ArtifactRegistryRepositoryIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository_iam_member#id ArtifactRegistryRepositoryIamMember#id}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository_iam_member#location ArtifactRegistryRepositoryIamMember#location}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository_iam_member#project ArtifactRegistryRepositoryIamMember#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.member"></a>

```go
Member *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository_iam_member#member ArtifactRegistryRepositoryIamMember#member}.

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository_iam_member#repository ArtifactRegistryRepositoryIamMember#repository}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository_iam_member#role ArtifactRegistryRepositoryIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.condition"></a>

```go
Condition ArtifactRegistryRepositoryIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition">ArtifactRegistryRepositoryIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository_iam_member#condition ArtifactRegistryRepositoryIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository_iam_member#id ArtifactRegistryRepositoryIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository_iam_member#location ArtifactRegistryRepositoryIamMember#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/artifact_registry_repository_iam_member#project ArtifactRegistryRepositoryIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArtifactRegistryRepositoryIamMemberConditionOutputReference <a name="ArtifactRegistryRepositoryIamMemberConditionOutputReference" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/artifactregistryrepositoryiammember"

artifactregistryrepositoryiammember.NewArtifactRegistryRepositoryIamMemberConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArtifactRegistryRepositoryIamMemberConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition">ArtifactRegistryRepositoryIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() ArtifactRegistryRepositoryIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition">ArtifactRegistryRepositoryIamMemberCondition</a>

---



