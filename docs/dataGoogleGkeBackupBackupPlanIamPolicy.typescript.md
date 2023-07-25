# `data_google_gke_backup_backup_plan_iam_policy`

Refer to the Terraform Registory for docs: [`data_google_gke_backup_backup_plan_iam_policy`](https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/gke_backup_backup_plan_iam_policy).

# `dataGoogleGkeBackupBackupPlanIamPolicy` Submodule <a name="`dataGoogleGkeBackupBackupPlanIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleGkeBackupBackupPlanIamPolicy <a name="DataGoogleGkeBackupBackupPlanIamPolicy" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/gke_backup_backup_plan_iam_policy google_gke_backup_backup_plan_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.Initializer"></a>

```typescript
import { dataGoogleGkeBackupBackupPlanIamPolicy } from '@cdktf/provider-google'

new dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy(scope: Construct, id: string, config: DataGoogleGkeBackupBackupPlanIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig">DataGoogleGkeBackupBackupPlanIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig">DataGoogleGkeBackupBackupPlanIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.isConstruct"></a>

```typescript
import { dataGoogleGkeBackupBackupPlanIamPolicy } from '@cdktf/provider-google'

dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.isTerraformElement"></a>

```typescript
import { dataGoogleGkeBackupBackupPlanIamPolicy } from '@cdktf/provider-google'

dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.isTerraformDataSource"></a>

```typescript
import { dataGoogleGkeBackupBackupPlanIamPolicy } from '@cdktf/provider-google'

dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleGkeBackupBackupPlanIamPolicyConfig <a name="DataGoogleGkeBackupBackupPlanIamPolicyConfig" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.Initializer"></a>

```typescript
import { dataGoogleGkeBackupBackupPlanIamPolicy } from '@cdktf/provider-google'

const dataGoogleGkeBackupBackupPlanIamPolicyConfig: dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/gke_backup_backup_plan_iam_policy#name DataGoogleGkeBackupBackupPlanIamPolicy#name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/gke_backup_backup_plan_iam_policy#id DataGoogleGkeBackupBackupPlanIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/gke_backup_backup_plan_iam_policy#location DataGoogleGkeBackupBackupPlanIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/gke_backup_backup_plan_iam_policy#project DataGoogleGkeBackupBackupPlanIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/gke_backup_backup_plan_iam_policy#name DataGoogleGkeBackupBackupPlanIamPolicy#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/gke_backup_backup_plan_iam_policy#id DataGoogleGkeBackupBackupPlanIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/gke_backup_backup_plan_iam_policy#location DataGoogleGkeBackupBackupPlanIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/gke_backup_backup_plan_iam_policy#project DataGoogleGkeBackupBackupPlanIamPolicy#project}.

---



