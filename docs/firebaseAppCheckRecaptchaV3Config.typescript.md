# `firebaseAppCheckRecaptchaV3Config` Submodule <a name="`firebaseAppCheckRecaptchaV3Config` Submodule" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirebaseAppCheckRecaptchaV3Config <a name="FirebaseAppCheckRecaptchaV3Config" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/firebase_app_check_recaptcha_v3_config google_firebase_app_check_recaptcha_v3_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer"></a>

```typescript
import { firebaseAppCheckRecaptchaV3Config } from '@cdktf/provider-google'

new firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config(scope: Construct, id: string, config: FirebaseAppCheckRecaptchaV3ConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig">FirebaseAppCheckRecaptchaV3ConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig">FirebaseAppCheckRecaptchaV3ConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.putTimeouts"></a>

```typescript
public putTimeouts(value: FirebaseAppCheckRecaptchaV3ConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts">FirebaseAppCheckRecaptchaV3ConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.resetTokenTtl"></a>

```typescript
public resetTokenTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FirebaseAppCheckRecaptchaV3Config resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.isConstruct"></a>

```typescript
import { firebaseAppCheckRecaptchaV3Config } from '@cdktf/provider-google'

firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.isTerraformElement"></a>

```typescript
import { firebaseAppCheckRecaptchaV3Config } from '@cdktf/provider-google'

firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.isTerraformResource"></a>

```typescript
import { firebaseAppCheckRecaptchaV3Config } from '@cdktf/provider-google'

firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.generateConfigForImport"></a>

```typescript
import { firebaseAppCheckRecaptchaV3Config } from '@cdktf/provider-google'

firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FirebaseAppCheckRecaptchaV3Config resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FirebaseAppCheckRecaptchaV3Config to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FirebaseAppCheckRecaptchaV3Config that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/firebase_app_check_recaptcha_v3_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FirebaseAppCheckRecaptchaV3Config to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.siteSecretSet">siteSecretSet</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference">FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.siteSecretInput">siteSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts">FirebaseAppCheckRecaptchaV3ConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.tokenTtlInput">tokenTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.siteSecret">siteSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.tokenTtl">tokenTtl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `siteSecretSet`<sup>Required</sup> <a name="siteSecretSet" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.siteSecretSet"></a>

```typescript
public readonly siteSecretSet: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.timeouts"></a>

```typescript
public readonly timeouts: FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference">FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference</a>

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `siteSecretInput`<sup>Optional</sup> <a name="siteSecretInput" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.siteSecretInput"></a>

```typescript
public readonly siteSecretInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FirebaseAppCheckRecaptchaV3ConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts">FirebaseAppCheckRecaptchaV3ConfigTimeouts</a>

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.tokenTtlInput"></a>

```typescript
public readonly tokenTtlInput: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `siteSecret`<sup>Required</sup> <a name="siteSecret" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.siteSecret"></a>

```typescript
public readonly siteSecret: string;
```

- *Type:* string

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FirebaseAppCheckRecaptchaV3ConfigConfig <a name="FirebaseAppCheckRecaptchaV3ConfigConfig" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.Initializer"></a>

```typescript
import { firebaseAppCheckRecaptchaV3Config } from '@cdktf/provider-google'

const firebaseAppCheckRecaptchaV3ConfigConfig: firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.appId">appId</a></code> | <code>string</code> | The ID of an [Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id). |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.siteSecret">siteSecret</a></code> | <code>string</code> | The site secret used to identify your service for reCAPTCHA v3 verification. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/firebase_app_check_recaptcha_v3_config#id FirebaseAppCheckRecaptchaV3Config#id}. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/firebase_app_check_recaptcha_v3_config#project FirebaseAppCheckRecaptchaV3Config#project}. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts">FirebaseAppCheckRecaptchaV3ConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.tokenTtl">tokenTtl</a></code> | <code>string</code> | Specifies the duration for which App Check tokens exchanged from reCAPTCHA V3 artifacts will be valid. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The ID of an [Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/firebase_app_check_recaptcha_v3_config#app_id FirebaseAppCheckRecaptchaV3Config#app_id}

---

##### `siteSecret`<sup>Required</sup> <a name="siteSecret" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.siteSecret"></a>

```typescript
public readonly siteSecret: string;
```

- *Type:* string

The site secret used to identify your service for reCAPTCHA v3 verification.

For security reasons, this field will never be populated in any response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/firebase_app_check_recaptcha_v3_config#site_secret FirebaseAppCheckRecaptchaV3Config#site_secret}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/firebase_app_check_recaptcha_v3_config#id FirebaseAppCheckRecaptchaV3Config#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/firebase_app_check_recaptcha_v3_config#project FirebaseAppCheckRecaptchaV3Config#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FirebaseAppCheckRecaptchaV3ConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts">FirebaseAppCheckRecaptchaV3ConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/firebase_app_check_recaptcha_v3_config#timeouts FirebaseAppCheckRecaptchaV3Config#timeouts}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: string;
```

- *Type:* string

Specifies the duration for which App Check tokens exchanged from reCAPTCHA V3 artifacts will be valid.

If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/firebase_app_check_recaptcha_v3_config#token_ttl FirebaseAppCheckRecaptchaV3Config#token_ttl}

---

### FirebaseAppCheckRecaptchaV3ConfigTimeouts <a name="FirebaseAppCheckRecaptchaV3ConfigTimeouts" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts.Initializer"></a>

```typescript
import { firebaseAppCheckRecaptchaV3Config } from '@cdktf/provider-google'

const firebaseAppCheckRecaptchaV3ConfigTimeouts: firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/firebase_app_check_recaptcha_v3_config#create FirebaseAppCheckRecaptchaV3Config#create}. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/firebase_app_check_recaptcha_v3_config#delete FirebaseAppCheckRecaptchaV3Config#delete}. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/firebase_app_check_recaptcha_v3_config#update FirebaseAppCheckRecaptchaV3Config#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/firebase_app_check_recaptcha_v3_config#create FirebaseAppCheckRecaptchaV3Config#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/firebase_app_check_recaptcha_v3_config#delete FirebaseAppCheckRecaptchaV3Config#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/firebase_app_check_recaptcha_v3_config#update FirebaseAppCheckRecaptchaV3Config#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference <a name="FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { firebaseAppCheckRecaptchaV3Config } from '@cdktf/provider-google'

new firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts">FirebaseAppCheckRecaptchaV3ConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirebaseAppCheckRecaptchaV3ConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts">FirebaseAppCheckRecaptchaV3ConfigTimeouts</a>

---



