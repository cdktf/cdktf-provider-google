# `google_healthcare_fhir_store_iam_binding`

Refer to the Terraform Registory for docs: [`google_healthcare_fhir_store_iam_binding`](https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_fhir_store_iam_binding).

# `healthcareFhirStoreIamBinding` Submodule <a name="`healthcareFhirStoreIamBinding` Submodule" id="@cdktf/provider-google.healthcareFhirStoreIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareFhirStoreIamBinding <a name="HealthcareFhirStoreIamBinding" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_fhir_store_iam_binding google_healthcare_fhir_store_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.Initializer"></a>

```typescript
import { healthcareFhirStoreIamBinding } from '@cdktf/provider-google'

new healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding(scope: Construct, id: string, config: HealthcareFhirStoreIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConfig">HealthcareFhirStoreIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConfig">HealthcareFhirStoreIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.putCondition"></a>

```typescript
public putCondition(value: HealthcareFhirStoreIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingCondition">HealthcareFhirStoreIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.isConstruct"></a>

```typescript
import { healthcareFhirStoreIamBinding } from '@cdktf/provider-google'

healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.isTerraformElement"></a>

```typescript
import { healthcareFhirStoreIamBinding } from '@cdktf/provider-google'

healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.isTerraformResource"></a>

```typescript
import { healthcareFhirStoreIamBinding } from '@cdktf/provider-google'

healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference">HealthcareFhirStoreIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingCondition">HealthcareFhirStoreIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.fhirStoreIdInput">fhirStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.fhirStoreId">fhirStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.condition"></a>

```typescript
public readonly condition: HealthcareFhirStoreIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference">HealthcareFhirStoreIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: HealthcareFhirStoreIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingCondition">HealthcareFhirStoreIamBindingCondition</a>

---

##### `fhirStoreIdInput`<sup>Optional</sup> <a name="fhirStoreIdInput" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.fhirStoreIdInput"></a>

```typescript
public readonly fhirStoreIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `fhirStoreId`<sup>Required</sup> <a name="fhirStoreId" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.fhirStoreId"></a>

```typescript
public readonly fhirStoreId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareFhirStoreIamBindingCondition <a name="HealthcareFhirStoreIamBindingCondition" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingCondition.Initializer"></a>

```typescript
import { healthcareFhirStoreIamBinding } from '@cdktf/provider-google'

const healthcareFhirStoreIamBindingCondition: healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_fhir_store_iam_binding#expression HealthcareFhirStoreIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_fhir_store_iam_binding#title HealthcareFhirStoreIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_fhir_store_iam_binding#description HealthcareFhirStoreIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_fhir_store_iam_binding#expression HealthcareFhirStoreIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_fhir_store_iam_binding#title HealthcareFhirStoreIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_fhir_store_iam_binding#description HealthcareFhirStoreIamBinding#description}.

---

### HealthcareFhirStoreIamBindingConfig <a name="HealthcareFhirStoreIamBindingConfig" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConfig.Initializer"></a>

```typescript
import { healthcareFhirStoreIamBinding } from '@cdktf/provider-google'

const healthcareFhirStoreIamBindingConfig: healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConfig.property.fhirStoreId">fhirStoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_fhir_store_iam_binding#fhir_store_id HealthcareFhirStoreIamBinding#fhir_store_id}. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_fhir_store_iam_binding#members HealthcareFhirStoreIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_fhir_store_iam_binding#role HealthcareFhirStoreIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingCondition">HealthcareFhirStoreIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_fhir_store_iam_binding#id HealthcareFhirStoreIamBinding#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fhirStoreId`<sup>Required</sup> <a name="fhirStoreId" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConfig.property.fhirStoreId"></a>

```typescript
public readonly fhirStoreId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_fhir_store_iam_binding#fhir_store_id HealthcareFhirStoreIamBinding#fhir_store_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_fhir_store_iam_binding#members HealthcareFhirStoreIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_fhir_store_iam_binding#role HealthcareFhirStoreIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: HealthcareFhirStoreIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingCondition">HealthcareFhirStoreIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_fhir_store_iam_binding#condition HealthcareFhirStoreIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_fhir_store_iam_binding#id HealthcareFhirStoreIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcareFhirStoreIamBindingConditionOutputReference <a name="HealthcareFhirStoreIamBindingConditionOutputReference" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { healthcareFhirStoreIamBinding } from '@cdktf/provider-google'

new healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingCondition">HealthcareFhirStoreIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HealthcareFhirStoreIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStoreIamBinding.HealthcareFhirStoreIamBindingCondition">HealthcareFhirStoreIamBindingCondition</a>

---



