# `containerAnalysisOccurrence` Submodule <a name="`containerAnalysisOccurrence` Submodule" id="@cdktf/provider-google.containerAnalysisOccurrence"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAnalysisOccurrence <a name="ContainerAnalysisOccurrence" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence google_container_analysis_occurrence}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containeranalysisoccurrence"

containeranalysisoccurrence.NewContainerAnalysisOccurrence(scope Construct, id *string, config ContainerAnalysisOccurrenceConfig) ContainerAnalysisOccurrence
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig">ContainerAnalysisOccurrenceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig">ContainerAnalysisOccurrenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.putAttestation">PutAttestation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetRemediation">ResetRemediation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAttestation` <a name="PutAttestation" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.putAttestation"></a>

```go
func PutAttestation(value ContainerAnalysisOccurrenceAttestation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.putAttestation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation">ContainerAnalysisOccurrenceAttestation</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.putTimeouts"></a>

```go
func PutTimeouts(value ContainerAnalysisOccurrenceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts">ContainerAnalysisOccurrenceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRemediation` <a name="ResetRemediation" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetRemediation"></a>

```go
func ResetRemediation()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containeranalysisoccurrence"

containeranalysisoccurrence.ContainerAnalysisOccurrence_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containeranalysisoccurrence"

containeranalysisoccurrence.ContainerAnalysisOccurrence_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containeranalysisoccurrence"

containeranalysisoccurrence.ContainerAnalysisOccurrence_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.attestation">Attestation</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference">ContainerAnalysisOccurrenceAttestationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference">ContainerAnalysisOccurrenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.attestationInput">AttestationInput</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation">ContainerAnalysisOccurrenceAttestation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.noteNameInput">NoteNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.remediationInput">RemediationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.resourceUriInput">ResourceUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.noteName">NoteName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.remediation">Remediation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.resourceUri">ResourceUri</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Attestation`<sup>Required</sup> <a name="Attestation" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.attestation"></a>

```go
func Attestation() ContainerAnalysisOccurrenceAttestationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference">ContainerAnalysisOccurrenceAttestationOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.timeouts"></a>

```go
func Timeouts() ContainerAnalysisOccurrenceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference">ContainerAnalysisOccurrenceTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AttestationInput`<sup>Optional</sup> <a name="AttestationInput" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.attestationInput"></a>

```go
func AttestationInput() ContainerAnalysisOccurrenceAttestation
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation">ContainerAnalysisOccurrenceAttestation</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NoteNameInput`<sup>Optional</sup> <a name="NoteNameInput" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.noteNameInput"></a>

```go
func NoteNameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RemediationInput`<sup>Optional</sup> <a name="RemediationInput" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.remediationInput"></a>

```go
func RemediationInput() *string
```

- *Type:* *string

---

##### `ResourceUriInput`<sup>Optional</sup> <a name="ResourceUriInput" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.resourceUriInput"></a>

```go
func ResourceUriInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NoteName`<sup>Required</sup> <a name="NoteName" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.noteName"></a>

```go
func NoteName() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Remediation`<sup>Required</sup> <a name="Remediation" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.remediation"></a>

```go
func Remediation() *string
```

- *Type:* *string

---

##### `ResourceUri`<sup>Required</sup> <a name="ResourceUri" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.resourceUri"></a>

```go
func ResourceUri() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAnalysisOccurrenceAttestation <a name="ContainerAnalysisOccurrenceAttestation" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containeranalysisoccurrence"

&containeranalysisoccurrence.ContainerAnalysisOccurrenceAttestation {
	SerializedPayload: *string,
	Signatures: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation.property.serializedPayload">SerializedPayload</a></code> | <code>*string</code> | The serialized payload that is verified by one or more signatures. A base64-encoded string. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation.property.signatures">Signatures</a></code> | <code>interface{}</code> | signatures block. |

---

##### `SerializedPayload`<sup>Required</sup> <a name="SerializedPayload" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation.property.serializedPayload"></a>

```go
SerializedPayload *string
```

- *Type:* *string

The serialized payload that is verified by one or more signatures. A base64-encoded string.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence#serialized_payload ContainerAnalysisOccurrence#serialized_payload}

---

##### `Signatures`<sup>Required</sup> <a name="Signatures" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation.property.signatures"></a>

```go
Signatures interface{}
```

- *Type:* interface{}

signatures block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence#signatures ContainerAnalysisOccurrence#signatures}

---

### ContainerAnalysisOccurrenceAttestationSignatures <a name="ContainerAnalysisOccurrenceAttestationSignatures" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containeranalysisoccurrence"

&containeranalysisoccurrence.ContainerAnalysisOccurrenceAttestationSignatures {
	PublicKeyId: *string,
	Signature: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures.property.publicKeyId">PublicKeyId</a></code> | <code>*string</code> | The identifier for the public key that verifies this signature. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures.property.signature">Signature</a></code> | <code>*string</code> | The content of the signature, an opaque bytestring. |

---

##### `PublicKeyId`<sup>Required</sup> <a name="PublicKeyId" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures.property.publicKeyId"></a>

```go
PublicKeyId *string
```

- *Type:* *string

The identifier for the public key that verifies this signature.

MUST be an RFC3986 conformant
URI. * When possible, the key id should be an
immutable reference, such as a cryptographic digest.
Examples of valid values:

OpenPGP V4 public key fingerprint. See https://www.iana.org/assignments/uri-schemes/prov/openpgp4fpr
for more details on this scheme.
'openpgp4fpr:74FAF3B861BDA0870C7B6DEF607E48D2A663AEEA'
RFC6920 digest-named SubjectPublicKeyInfo (digest of the DER serialization):
"ni:///sha-256;cD9o9Cq6LG3jD0iKXqEi_vdjJGecm_iXkbqVoScViaU"

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence#public_key_id ContainerAnalysisOccurrence#public_key_id}

---

##### `Signature`<sup>Optional</sup> <a name="Signature" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures.property.signature"></a>

```go
Signature *string
```

- *Type:* *string

The content of the signature, an opaque bytestring.

The payload that this signature verifies MUST be
unambiguously provided with the Signature during
verification. A wrapper message might provide the
payload explicitly. Alternatively, a message might
have a canonical serialization that can always be
unambiguously computed to derive the payload.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence#signature ContainerAnalysisOccurrence#signature}

---

### ContainerAnalysisOccurrenceConfig <a name="ContainerAnalysisOccurrenceConfig" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containeranalysisoccurrence"

&containeranalysisoccurrence.ContainerAnalysisOccurrenceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Attestation: github.com/cdktf/cdktf-provider-google-go/google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation,
	NoteName: *string,
	ResourceUri: *string,
	Id: *string,
	Project: *string,
	Remediation: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.attestation">Attestation</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation">ContainerAnalysisOccurrenceAttestation</a></code> | attestation block. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.noteName">NoteName</a></code> | <code>*string</code> | The analysis note associated with this occurrence, in the form of projects/[PROJECT]/notes/[NOTE_ID]. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.resourceUri">ResourceUri</a></code> | <code>*string</code> | Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, https://gcr.io/project/image@sha256:123abc for a Docker image. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence#id ContainerAnalysisOccurrence#id}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence#project ContainerAnalysisOccurrence#project}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.remediation">Remediation</a></code> | <code>*string</code> | A description of actions that can be taken to remedy the note. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts">ContainerAnalysisOccurrenceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Attestation`<sup>Required</sup> <a name="Attestation" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.attestation"></a>

```go
Attestation ContainerAnalysisOccurrenceAttestation
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation">ContainerAnalysisOccurrenceAttestation</a>

attestation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence#attestation ContainerAnalysisOccurrence#attestation}

---

##### `NoteName`<sup>Required</sup> <a name="NoteName" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.noteName"></a>

```go
NoteName *string
```

- *Type:* *string

The analysis note associated with this occurrence, in the form of projects/[PROJECT]/notes/[NOTE_ID].

This field can be used as a
filter in list requests.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence#note_name ContainerAnalysisOccurrence#note_name}

---

##### `ResourceUri`<sup>Required</sup> <a name="ResourceUri" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.resourceUri"></a>

```go
ResourceUri *string
```

- *Type:* *string

Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, https://gcr.io/project/image@sha256:123abc for a Docker image.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence#resource_uri ContainerAnalysisOccurrence#resource_uri}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence#id ContainerAnalysisOccurrence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence#project ContainerAnalysisOccurrence#project}.

---

##### `Remediation`<sup>Optional</sup> <a name="Remediation" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.remediation"></a>

```go
Remediation *string
```

- *Type:* *string

A description of actions that can be taken to remedy the note.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence#remediation ContainerAnalysisOccurrence#remediation}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.timeouts"></a>

```go
Timeouts ContainerAnalysisOccurrenceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts">ContainerAnalysisOccurrenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence#timeouts ContainerAnalysisOccurrence#timeouts}

---

### ContainerAnalysisOccurrenceTimeouts <a name="ContainerAnalysisOccurrenceTimeouts" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containeranalysisoccurrence"

&containeranalysisoccurrence.ContainerAnalysisOccurrenceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence#create ContainerAnalysisOccurrence#create}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence#delete ContainerAnalysisOccurrence#delete}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence#update ContainerAnalysisOccurrence#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence#create ContainerAnalysisOccurrence#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence#delete ContainerAnalysisOccurrence#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence#update ContainerAnalysisOccurrence#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAnalysisOccurrenceAttestationOutputReference <a name="ContainerAnalysisOccurrenceAttestationOutputReference" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containeranalysisoccurrence"

containeranalysisoccurrence.NewContainerAnalysisOccurrenceAttestationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerAnalysisOccurrenceAttestationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.putSignatures">PutSignatures</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSignatures` <a name="PutSignatures" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.putSignatures"></a>

```go
func PutSignatures(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.putSignatures.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.signatures">Signatures</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList">ContainerAnalysisOccurrenceAttestationSignaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.serializedPayloadInput">SerializedPayloadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.signaturesInput">SignaturesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.serializedPayload">SerializedPayload</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation">ContainerAnalysisOccurrenceAttestation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Signatures`<sup>Required</sup> <a name="Signatures" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.signatures"></a>

```go
func Signatures() ContainerAnalysisOccurrenceAttestationSignaturesList
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList">ContainerAnalysisOccurrenceAttestationSignaturesList</a>

---

##### `SerializedPayloadInput`<sup>Optional</sup> <a name="SerializedPayloadInput" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.serializedPayloadInput"></a>

```go
func SerializedPayloadInput() *string
```

- *Type:* *string

---

##### `SignaturesInput`<sup>Optional</sup> <a name="SignaturesInput" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.signaturesInput"></a>

```go
func SignaturesInput() interface{}
```

- *Type:* interface{}

---

##### `SerializedPayload`<sup>Required</sup> <a name="SerializedPayload" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.serializedPayload"></a>

```go
func SerializedPayload() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerAnalysisOccurrenceAttestation
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation">ContainerAnalysisOccurrenceAttestation</a>

---


### ContainerAnalysisOccurrenceAttestationSignaturesList <a name="ContainerAnalysisOccurrenceAttestationSignaturesList" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containeranalysisoccurrence"

containeranalysisoccurrence.NewContainerAnalysisOccurrenceAttestationSignaturesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerAnalysisOccurrenceAttestationSignaturesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.get"></a>

```go
func Get(index *f64) ContainerAnalysisOccurrenceAttestationSignaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAnalysisOccurrenceAttestationSignaturesOutputReference <a name="ContainerAnalysisOccurrenceAttestationSignaturesOutputReference" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containeranalysisoccurrence"

containeranalysisoccurrence.NewContainerAnalysisOccurrenceAttestationSignaturesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerAnalysisOccurrenceAttestationSignaturesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resetSignature">ResetSignature</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSignature` <a name="ResetSignature" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resetSignature"></a>

```go
func ResetSignature()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.publicKeyIdInput">PublicKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.signatureInput">SignatureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.publicKeyId">PublicKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.signature">Signature</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublicKeyIdInput`<sup>Optional</sup> <a name="PublicKeyIdInput" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.publicKeyIdInput"></a>

```go
func PublicKeyIdInput() *string
```

- *Type:* *string

---

##### `SignatureInput`<sup>Optional</sup> <a name="SignatureInput" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.signatureInput"></a>

```go
func SignatureInput() *string
```

- *Type:* *string

---

##### `PublicKeyId`<sup>Required</sup> <a name="PublicKeyId" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.publicKeyId"></a>

```go
func PublicKeyId() *string
```

- *Type:* *string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.signature"></a>

```go
func Signature() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAnalysisOccurrenceTimeoutsOutputReference <a name="ContainerAnalysisOccurrenceTimeoutsOutputReference" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/containeranalysisoccurrence"

containeranalysisoccurrence.NewContainerAnalysisOccurrenceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerAnalysisOccurrenceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



