# `privatecaCertificateTemplateIamBinding` Submodule <a name="`privatecaCertificateTemplateIamBinding` Submodule" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivatecaCertificateTemplateIamBinding <a name="PrivatecaCertificateTemplateIamBinding" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/privateca_certificate_template_iam_binding google_privateca_certificate_template_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.Initializer"></a>

```typescript
import { privatecaCertificateTemplateIamBinding } from '@cdktf/provider-google'

new privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding(scope: Construct, id: string, config: PrivatecaCertificateTemplateIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConfig">PrivatecaCertificateTemplateIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConfig">PrivatecaCertificateTemplateIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.putCondition"></a>

```typescript
public putCondition(value: PrivatecaCertificateTemplateIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingCondition">PrivatecaCertificateTemplateIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PrivatecaCertificateTemplateIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.isConstruct"></a>

```typescript
import { privatecaCertificateTemplateIamBinding } from '@cdktf/provider-google'

privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.isTerraformElement"></a>

```typescript
import { privatecaCertificateTemplateIamBinding } from '@cdktf/provider-google'

privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.isTerraformResource"></a>

```typescript
import { privatecaCertificateTemplateIamBinding } from '@cdktf/provider-google'

privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.generateConfigForImport"></a>

```typescript
import { privatecaCertificateTemplateIamBinding } from '@cdktf/provider-google'

privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PrivatecaCertificateTemplateIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrivatecaCertificateTemplateIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrivatecaCertificateTemplateIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/privateca_certificate_template_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PrivatecaCertificateTemplateIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference">PrivatecaCertificateTemplateIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.certificateTemplateInput">certificateTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingCondition">PrivatecaCertificateTemplateIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.certificateTemplate">certificateTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.condition"></a>

```typescript
public readonly condition: PrivatecaCertificateTemplateIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference">PrivatecaCertificateTemplateIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `certificateTemplateInput`<sup>Optional</sup> <a name="certificateTemplateInput" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.certificateTemplateInput"></a>

```typescript
public readonly certificateTemplateInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: PrivatecaCertificateTemplateIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingCondition">PrivatecaCertificateTemplateIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `certificateTemplate`<sup>Required</sup> <a name="certificateTemplate" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.certificateTemplate"></a>

```typescript
public readonly certificateTemplate: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivatecaCertificateTemplateIamBindingCondition <a name="PrivatecaCertificateTemplateIamBindingCondition" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingCondition.Initializer"></a>

```typescript
import { privatecaCertificateTemplateIamBinding } from '@cdktf/provider-google'

const privatecaCertificateTemplateIamBindingCondition: privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/privateca_certificate_template_iam_binding#expression PrivatecaCertificateTemplateIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/privateca_certificate_template_iam_binding#title PrivatecaCertificateTemplateIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/privateca_certificate_template_iam_binding#description PrivatecaCertificateTemplateIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/privateca_certificate_template_iam_binding#expression PrivatecaCertificateTemplateIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/privateca_certificate_template_iam_binding#title PrivatecaCertificateTemplateIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/privateca_certificate_template_iam_binding#description PrivatecaCertificateTemplateIamBinding#description}.

---

### PrivatecaCertificateTemplateIamBindingConfig <a name="PrivatecaCertificateTemplateIamBindingConfig" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConfig.Initializer"></a>

```typescript
import { privatecaCertificateTemplateIamBinding } from '@cdktf/provider-google'

const privatecaCertificateTemplateIamBindingConfig: privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConfig.property.certificateTemplate">certificateTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/privateca_certificate_template_iam_binding#certificate_template PrivatecaCertificateTemplateIamBinding#certificate_template}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/privateca_certificate_template_iam_binding#members PrivatecaCertificateTemplateIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/privateca_certificate_template_iam_binding#role PrivatecaCertificateTemplateIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingCondition">PrivatecaCertificateTemplateIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/privateca_certificate_template_iam_binding#id PrivatecaCertificateTemplateIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/privateca_certificate_template_iam_binding#location PrivatecaCertificateTemplateIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/privateca_certificate_template_iam_binding#project PrivatecaCertificateTemplateIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificateTemplate`<sup>Required</sup> <a name="certificateTemplate" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConfig.property.certificateTemplate"></a>

```typescript
public readonly certificateTemplate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/privateca_certificate_template_iam_binding#certificate_template PrivatecaCertificateTemplateIamBinding#certificate_template}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/privateca_certificate_template_iam_binding#members PrivatecaCertificateTemplateIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/privateca_certificate_template_iam_binding#role PrivatecaCertificateTemplateIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: PrivatecaCertificateTemplateIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingCondition">PrivatecaCertificateTemplateIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/privateca_certificate_template_iam_binding#condition PrivatecaCertificateTemplateIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/privateca_certificate_template_iam_binding#id PrivatecaCertificateTemplateIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/privateca_certificate_template_iam_binding#location PrivatecaCertificateTemplateIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/privateca_certificate_template_iam_binding#project PrivatecaCertificateTemplateIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivatecaCertificateTemplateIamBindingConditionOutputReference <a name="PrivatecaCertificateTemplateIamBindingConditionOutputReference" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { privatecaCertificateTemplateIamBinding } from '@cdktf/provider-google'

new privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingCondition">PrivatecaCertificateTemplateIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivatecaCertificateTemplateIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplateIamBinding.PrivatecaCertificateTemplateIamBindingCondition">PrivatecaCertificateTemplateIamBindingCondition</a>

---



