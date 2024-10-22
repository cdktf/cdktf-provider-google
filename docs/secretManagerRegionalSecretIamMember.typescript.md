# `secretManagerRegionalSecretIamMember` Submodule <a name="`secretManagerRegionalSecretIamMember` Submodule" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretManagerRegionalSecretIamMember <a name="SecretManagerRegionalSecretIamMember" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret_iam_member google_secret_manager_regional_secret_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer"></a>

```typescript
import { secretManagerRegionalSecretIamMember } from '@cdktf/provider-google'

new secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember(scope: Construct, id: string, config: SecretManagerRegionalSecretIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig">SecretManagerRegionalSecretIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig">SecretManagerRegionalSecretIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.putCondition"></a>

```typescript
public putCondition(value: SecretManagerRegionalSecretIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberCondition">SecretManagerRegionalSecretIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecretManagerRegionalSecretIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.isConstruct"></a>

```typescript
import { secretManagerRegionalSecretIamMember } from '@cdktf/provider-google'

secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.isTerraformElement"></a>

```typescript
import { secretManagerRegionalSecretIamMember } from '@cdktf/provider-google'

secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.isTerraformResource"></a>

```typescript
import { secretManagerRegionalSecretIamMember } from '@cdktf/provider-google'

secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.generateConfigForImport"></a>

```typescript
import { secretManagerRegionalSecretIamMember } from '@cdktf/provider-google'

secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SecretManagerRegionalSecretIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecretManagerRegionalSecretIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecretManagerRegionalSecretIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecretManagerRegionalSecretIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference">SecretManagerRegionalSecretIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberCondition">SecretManagerRegionalSecretIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.condition"></a>

```typescript
public readonly condition: SecretManagerRegionalSecretIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference">SecretManagerRegionalSecretIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: SecretManagerRegionalSecretIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberCondition">SecretManagerRegionalSecretIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretManagerRegionalSecretIamMemberCondition <a name="SecretManagerRegionalSecretIamMemberCondition" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberCondition.Initializer"></a>

```typescript
import { secretManagerRegionalSecretIamMember } from '@cdktf/provider-google'

const secretManagerRegionalSecretIamMemberCondition: secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret_iam_member#expression SecretManagerRegionalSecretIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret_iam_member#title SecretManagerRegionalSecretIamMember#title}. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret_iam_member#description SecretManagerRegionalSecretIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret_iam_member#expression SecretManagerRegionalSecretIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret_iam_member#title SecretManagerRegionalSecretIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret_iam_member#description SecretManagerRegionalSecretIamMember#description}.

---

### SecretManagerRegionalSecretIamMemberConfig <a name="SecretManagerRegionalSecretIamMemberConfig" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.Initializer"></a>

```typescript
import { secretManagerRegionalSecretIamMember } from '@cdktf/provider-google'

const secretManagerRegionalSecretIamMemberConfig: secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret_iam_member#member SecretManagerRegionalSecretIamMember#member}. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret_iam_member#role SecretManagerRegionalSecretIamMember#role}. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.secretId">secretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret_iam_member#secret_id SecretManagerRegionalSecretIamMember#secret_id}. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberCondition">SecretManagerRegionalSecretIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret_iam_member#id SecretManagerRegionalSecretIamMember#id}. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret_iam_member#location SecretManagerRegionalSecretIamMember#location}. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret_iam_member#project SecretManagerRegionalSecretIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret_iam_member#member SecretManagerRegionalSecretIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret_iam_member#role SecretManagerRegionalSecretIamMember#role}.

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret_iam_member#secret_id SecretManagerRegionalSecretIamMember#secret_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: SecretManagerRegionalSecretIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberCondition">SecretManagerRegionalSecretIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret_iam_member#condition SecretManagerRegionalSecretIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret_iam_member#id SecretManagerRegionalSecretIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret_iam_member#location SecretManagerRegionalSecretIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret_iam_member#project SecretManagerRegionalSecretIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecretManagerRegionalSecretIamMemberConditionOutputReference <a name="SecretManagerRegionalSecretIamMemberConditionOutputReference" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { secretManagerRegionalSecretIamMember } from '@cdktf/provider-google'

new secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberCondition">SecretManagerRegionalSecretIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecretManagerRegionalSecretIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberCondition">SecretManagerRegionalSecretIamMemberCondition</a>

---



