# `recaptchaEnterpriseKey` Submodule <a name="`recaptchaEnterpriseKey` Submodule" id="@cdktf/provider-google.recaptchaEnterpriseKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RecaptchaEnterpriseKey <a name="RecaptchaEnterpriseKey" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/recaptcha_enterprise_key google_recaptcha_enterprise_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer"></a>

```typescript
import { recaptchaEnterpriseKey } from '@cdktf/provider-google'

new recaptchaEnterpriseKey.RecaptchaEnterpriseKey(scope: Construct, id: string, config: RecaptchaEnterpriseKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig">RecaptchaEnterpriseKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig">RecaptchaEnterpriseKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putAndroidSettings">putAndroidSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putIosSettings">putIosSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putTestingOptions">putTestingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putWebSettings">putWebSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetAndroidSettings">resetAndroidSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetIosSettings">resetIosSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetTestingOptions">resetTestingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetWebSettings">resetWebSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putAndroidSettings` <a name="putAndroidSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putAndroidSettings"></a>

```typescript
public putAndroidSettings(value: RecaptchaEnterpriseKeyAndroidSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putAndroidSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings">RecaptchaEnterpriseKeyAndroidSettings</a>

---

##### `putIosSettings` <a name="putIosSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putIosSettings"></a>

```typescript
public putIosSettings(value: RecaptchaEnterpriseKeyIosSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putIosSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings">RecaptchaEnterpriseKeyIosSettings</a>

---

##### `putTestingOptions` <a name="putTestingOptions" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putTestingOptions"></a>

```typescript
public putTestingOptions(value: RecaptchaEnterpriseKeyTestingOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putTestingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions">RecaptchaEnterpriseKeyTestingOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putTimeouts"></a>

```typescript
public putTimeouts(value: RecaptchaEnterpriseKeyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts">RecaptchaEnterpriseKeyTimeouts</a>

---

##### `putWebSettings` <a name="putWebSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putWebSettings"></a>

```typescript
public putWebSettings(value: RecaptchaEnterpriseKeyWebSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.putWebSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings">RecaptchaEnterpriseKeyWebSettings</a>

---

##### `resetAndroidSettings` <a name="resetAndroidSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetAndroidSettings"></a>

```typescript
public resetAndroidSettings(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIosSettings` <a name="resetIosSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetIosSettings"></a>

```typescript
public resetIosSettings(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTestingOptions` <a name="resetTestingOptions" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetTestingOptions"></a>

```typescript
public resetTestingOptions(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWebSettings` <a name="resetWebSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.resetWebSettings"></a>

```typescript
public resetWebSettings(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RecaptchaEnterpriseKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isConstruct"></a>

```typescript
import { recaptchaEnterpriseKey } from '@cdktf/provider-google'

recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isTerraformElement"></a>

```typescript
import { recaptchaEnterpriseKey } from '@cdktf/provider-google'

recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isTerraformResource"></a>

```typescript
import { recaptchaEnterpriseKey } from '@cdktf/provider-google'

recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.generateConfigForImport"></a>

```typescript
import { recaptchaEnterpriseKey } from '@cdktf/provider-google'

recaptchaEnterpriseKey.RecaptchaEnterpriseKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RecaptchaEnterpriseKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RecaptchaEnterpriseKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RecaptchaEnterpriseKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/recaptcha_enterprise_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RecaptchaEnterpriseKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.androidSettings">androidSettings</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference">RecaptchaEnterpriseKeyAndroidSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.iosSettings">iosSettings</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference">RecaptchaEnterpriseKeyIosSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.testingOptions">testingOptions</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference">RecaptchaEnterpriseKeyTestingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference">RecaptchaEnterpriseKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.webSettings">webSettings</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference">RecaptchaEnterpriseKeyWebSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.androidSettingsInput">androidSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings">RecaptchaEnterpriseKeyAndroidSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.iosSettingsInput">iosSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings">RecaptchaEnterpriseKeyIosSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.testingOptionsInput">testingOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions">RecaptchaEnterpriseKeyTestingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts">RecaptchaEnterpriseKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.webSettingsInput">webSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings">RecaptchaEnterpriseKeyWebSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `androidSettings`<sup>Required</sup> <a name="androidSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.androidSettings"></a>

```typescript
public readonly androidSettings: RecaptchaEnterpriseKeyAndroidSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference">RecaptchaEnterpriseKeyAndroidSettingsOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `iosSettings`<sup>Required</sup> <a name="iosSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.iosSettings"></a>

```typescript
public readonly iosSettings: RecaptchaEnterpriseKeyIosSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference">RecaptchaEnterpriseKeyIosSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `testingOptions`<sup>Required</sup> <a name="testingOptions" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.testingOptions"></a>

```typescript
public readonly testingOptions: RecaptchaEnterpriseKeyTestingOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference">RecaptchaEnterpriseKeyTestingOptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.timeouts"></a>

```typescript
public readonly timeouts: RecaptchaEnterpriseKeyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference">RecaptchaEnterpriseKeyTimeoutsOutputReference</a>

---

##### `webSettings`<sup>Required</sup> <a name="webSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.webSettings"></a>

```typescript
public readonly webSettings: RecaptchaEnterpriseKeyWebSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference">RecaptchaEnterpriseKeyWebSettingsOutputReference</a>

---

##### `androidSettingsInput`<sup>Optional</sup> <a name="androidSettingsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.androidSettingsInput"></a>

```typescript
public readonly androidSettingsInput: RecaptchaEnterpriseKeyAndroidSettings;
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings">RecaptchaEnterpriseKeyAndroidSettings</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `iosSettingsInput`<sup>Optional</sup> <a name="iosSettingsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.iosSettingsInput"></a>

```typescript
public readonly iosSettingsInput: RecaptchaEnterpriseKeyIosSettings;
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings">RecaptchaEnterpriseKeyIosSettings</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `testingOptionsInput`<sup>Optional</sup> <a name="testingOptionsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.testingOptionsInput"></a>

```typescript
public readonly testingOptionsInput: RecaptchaEnterpriseKeyTestingOptions;
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions">RecaptchaEnterpriseKeyTestingOptions</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | RecaptchaEnterpriseKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts">RecaptchaEnterpriseKeyTimeouts</a>

---

##### `webSettingsInput`<sup>Optional</sup> <a name="webSettingsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.webSettingsInput"></a>

```typescript
public readonly webSettingsInput: RecaptchaEnterpriseKeyWebSettings;
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings">RecaptchaEnterpriseKeyWebSettings</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RecaptchaEnterpriseKeyAndroidSettings <a name="RecaptchaEnterpriseKeyAndroidSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings.Initializer"></a>

```typescript
import { recaptchaEnterpriseKey } from '@cdktf/provider-google'

const recaptchaEnterpriseKeyAndroidSettings: recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings.property.allowAllPackageNames">allowAllPackageNames</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, it means allowed_package_names will not be enforced. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings.property.allowedPackageNames">allowedPackageNames</a></code> | <code>string[]</code> | Android package names of apps allowed to use the key. Example: 'com.companyname.appname'. |

---

##### `allowAllPackageNames`<sup>Optional</sup> <a name="allowAllPackageNames" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings.property.allowAllPackageNames"></a>

```typescript
public readonly allowAllPackageNames: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, it means allowed_package_names will not be enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/recaptcha_enterprise_key#allow_all_package_names RecaptchaEnterpriseKey#allow_all_package_names}

---

##### `allowedPackageNames`<sup>Optional</sup> <a name="allowedPackageNames" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings.property.allowedPackageNames"></a>

```typescript
public readonly allowedPackageNames: string[];
```

- *Type:* string[]

Android package names of apps allowed to use the key. Example: 'com.companyname.appname'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/recaptcha_enterprise_key#allowed_package_names RecaptchaEnterpriseKey#allowed_package_names}

---

### RecaptchaEnterpriseKeyConfig <a name="RecaptchaEnterpriseKeyConfig" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.Initializer"></a>

```typescript
import { recaptchaEnterpriseKey } from '@cdktf/provider-google'

const recaptchaEnterpriseKeyConfig: recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.displayName">displayName</a></code> | <code>string</code> | Human-readable display name of this key. Modifiable by user. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.androidSettings">androidSettings</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings">RecaptchaEnterpriseKeyAndroidSettings</a></code> | android_settings block. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/recaptcha_enterprise_key#id RecaptchaEnterpriseKey#id}. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.iosSettings">iosSettings</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings">RecaptchaEnterpriseKeyIosSettings</a></code> | ios_settings block. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | See [Creating and managing labels](https://cloud.google.com/recaptcha-enterprise/docs/labels). |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.project">project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.testingOptions">testingOptions</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions">RecaptchaEnterpriseKeyTestingOptions</a></code> | testing_options block. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts">RecaptchaEnterpriseKeyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.webSettings">webSettings</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings">RecaptchaEnterpriseKeyWebSettings</a></code> | web_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Human-readable display name of this key. Modifiable by user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/recaptcha_enterprise_key#display_name RecaptchaEnterpriseKey#display_name}

---

##### `androidSettings`<sup>Optional</sup> <a name="androidSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.androidSettings"></a>

```typescript
public readonly androidSettings: RecaptchaEnterpriseKeyAndroidSettings;
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings">RecaptchaEnterpriseKeyAndroidSettings</a>

android_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/recaptcha_enterprise_key#android_settings RecaptchaEnterpriseKey#android_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/recaptcha_enterprise_key#id RecaptchaEnterpriseKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `iosSettings`<sup>Optional</sup> <a name="iosSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.iosSettings"></a>

```typescript
public readonly iosSettings: RecaptchaEnterpriseKeyIosSettings;
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings">RecaptchaEnterpriseKeyIosSettings</a>

ios_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/recaptcha_enterprise_key#ios_settings RecaptchaEnterpriseKey#ios_settings}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

See [Creating and managing labels](https://cloud.google.com/recaptcha-enterprise/docs/labels).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/recaptcha_enterprise_key#labels RecaptchaEnterpriseKey#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/recaptcha_enterprise_key#project RecaptchaEnterpriseKey#project}

---

##### `testingOptions`<sup>Optional</sup> <a name="testingOptions" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.testingOptions"></a>

```typescript
public readonly testingOptions: RecaptchaEnterpriseKeyTestingOptions;
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions">RecaptchaEnterpriseKeyTestingOptions</a>

testing_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/recaptcha_enterprise_key#testing_options RecaptchaEnterpriseKey#testing_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: RecaptchaEnterpriseKeyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts">RecaptchaEnterpriseKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/recaptcha_enterprise_key#timeouts RecaptchaEnterpriseKey#timeouts}

---

##### `webSettings`<sup>Optional</sup> <a name="webSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyConfig.property.webSettings"></a>

```typescript
public readonly webSettings: RecaptchaEnterpriseKeyWebSettings;
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings">RecaptchaEnterpriseKeyWebSettings</a>

web_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/recaptcha_enterprise_key#web_settings RecaptchaEnterpriseKey#web_settings}

---

### RecaptchaEnterpriseKeyIosSettings <a name="RecaptchaEnterpriseKeyIosSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings.Initializer"></a>

```typescript
import { recaptchaEnterpriseKey } from '@cdktf/provider-google'

const recaptchaEnterpriseKeyIosSettings: recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings.property.allowAllBundleIds">allowAllBundleIds</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, it means allowed_bundle_ids will not be enforced. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings.property.allowedBundleIds">allowedBundleIds</a></code> | <code>string[]</code> | iOS bundle ids of apps allowed to use the key. Example: 'com.companyname.productname.appname'. |

---

##### `allowAllBundleIds`<sup>Optional</sup> <a name="allowAllBundleIds" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings.property.allowAllBundleIds"></a>

```typescript
public readonly allowAllBundleIds: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, it means allowed_bundle_ids will not be enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/recaptcha_enterprise_key#allow_all_bundle_ids RecaptchaEnterpriseKey#allow_all_bundle_ids}

---

##### `allowedBundleIds`<sup>Optional</sup> <a name="allowedBundleIds" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings.property.allowedBundleIds"></a>

```typescript
public readonly allowedBundleIds: string[];
```

- *Type:* string[]

iOS bundle ids of apps allowed to use the key. Example: 'com.companyname.productname.appname'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/recaptcha_enterprise_key#allowed_bundle_ids RecaptchaEnterpriseKey#allowed_bundle_ids}

---

### RecaptchaEnterpriseKeyTestingOptions <a name="RecaptchaEnterpriseKeyTestingOptions" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions.Initializer"></a>

```typescript
import { recaptchaEnterpriseKey } from '@cdktf/provider-google'

const recaptchaEnterpriseKeyTestingOptions: recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions.property.testingChallenge">testingChallenge</a></code> | <code>string</code> | For challenge-based keys only (CHECKBOX, INVISIBLE), all challenge requests for this site will return nocaptcha if NOCAPTCHA, or an unsolvable challenge if UNSOLVABLE_CHALLENGE. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions.property.testingScore">testingScore</a></code> | <code>number</code> | All assessments for this Key will return this score. |

---

##### `testingChallenge`<sup>Optional</sup> <a name="testingChallenge" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions.property.testingChallenge"></a>

```typescript
public readonly testingChallenge: string;
```

- *Type:* string

For challenge-based keys only (CHECKBOX, INVISIBLE), all challenge requests for this site will return nocaptcha if NOCAPTCHA, or an unsolvable challenge if UNSOLVABLE_CHALLENGE.

Possible values: TESTING_CHALLENGE_UNSPECIFIED, NOCAPTCHA, UNSOLVABLE_CHALLENGE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/recaptcha_enterprise_key#testing_challenge RecaptchaEnterpriseKey#testing_challenge}

---

##### `testingScore`<sup>Optional</sup> <a name="testingScore" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions.property.testingScore"></a>

```typescript
public readonly testingScore: number;
```

- *Type:* number

All assessments for this Key will return this score.

Must be between 0 (likely not legitimate) and 1 (likely legitimate) inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/recaptcha_enterprise_key#testing_score RecaptchaEnterpriseKey#testing_score}

---

### RecaptchaEnterpriseKeyTimeouts <a name="RecaptchaEnterpriseKeyTimeouts" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts.Initializer"></a>

```typescript
import { recaptchaEnterpriseKey } from '@cdktf/provider-google'

const recaptchaEnterpriseKeyTimeouts: recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/recaptcha_enterprise_key#create RecaptchaEnterpriseKey#create}. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/recaptcha_enterprise_key#delete RecaptchaEnterpriseKey#delete}. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/recaptcha_enterprise_key#update RecaptchaEnterpriseKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/recaptcha_enterprise_key#create RecaptchaEnterpriseKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/recaptcha_enterprise_key#delete RecaptchaEnterpriseKey#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/recaptcha_enterprise_key#update RecaptchaEnterpriseKey#update}.

---

### RecaptchaEnterpriseKeyWebSettings <a name="RecaptchaEnterpriseKeyWebSettings" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.Initializer"></a>

```typescript
import { recaptchaEnterpriseKey } from '@cdktf/provider-google'

const recaptchaEnterpriseKeyWebSettings: recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.integrationType">integrationType</a></code> | <code>string</code> | Required. Describes how this key is integrated with the website. Possible values: SCORE, CHECKBOX, INVISIBLE. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.allowAllDomains">allowAllDomains</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, it means allowed_domains will not be enforced. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.allowAmpTraffic">allowAmpTraffic</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, the key can be used on AMP (Accelerated Mobile Pages) websites. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.allowedDomains">allowedDomains</a></code> | <code>string[]</code> | Domains or subdomains of websites allowed to use the key. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.challengeSecurityPreference">challengeSecurityPreference</a></code> | <code>string</code> | Settings for the frequency and difficulty at which this key triggers captcha challenges. |

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.integrationType"></a>

```typescript
public readonly integrationType: string;
```

- *Type:* string

Required. Describes how this key is integrated with the website. Possible values: SCORE, CHECKBOX, INVISIBLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/recaptcha_enterprise_key#integration_type RecaptchaEnterpriseKey#integration_type}

---

##### `allowAllDomains`<sup>Optional</sup> <a name="allowAllDomains" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.allowAllDomains"></a>

```typescript
public readonly allowAllDomains: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, it means allowed_domains will not be enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/recaptcha_enterprise_key#allow_all_domains RecaptchaEnterpriseKey#allow_all_domains}

---

##### `allowAmpTraffic`<sup>Optional</sup> <a name="allowAmpTraffic" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.allowAmpTraffic"></a>

```typescript
public readonly allowAmpTraffic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, the key can be used on AMP (Accelerated Mobile Pages) websites.

This is supported only for the SCORE integration type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/recaptcha_enterprise_key#allow_amp_traffic RecaptchaEnterpriseKey#allow_amp_traffic}

---

##### `allowedDomains`<sup>Optional</sup> <a name="allowedDomains" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.allowedDomains"></a>

```typescript
public readonly allowedDomains: string[];
```

- *Type:* string[]

Domains or subdomains of websites allowed to use the key.

All subdomains of an allowed domain are automatically allowed. A valid domain requires a host and must not include any path, port, query or fragment. Examples: 'example.com' or 'subdomain.example.com'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/recaptcha_enterprise_key#allowed_domains RecaptchaEnterpriseKey#allowed_domains}

---

##### `challengeSecurityPreference`<sup>Optional</sup> <a name="challengeSecurityPreference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings.property.challengeSecurityPreference"></a>

```typescript
public readonly challengeSecurityPreference: string;
```

- *Type:* string

Settings for the frequency and difficulty at which this key triggers captcha challenges.

This should only be specified for IntegrationTypes CHECKBOX and INVISIBLE. Possible values: CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED, USABILITY, BALANCE, SECURITY

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/recaptcha_enterprise_key#challenge_security_preference RecaptchaEnterpriseKey#challenge_security_preference}

---

## Classes <a name="Classes" id="Classes"></a>

### RecaptchaEnterpriseKeyAndroidSettingsOutputReference <a name="RecaptchaEnterpriseKeyAndroidSettingsOutputReference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.Initializer"></a>

```typescript
import { recaptchaEnterpriseKey } from '@cdktf/provider-google'

new recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.resetAllowAllPackageNames">resetAllowAllPackageNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.resetAllowedPackageNames">resetAllowedPackageNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowAllPackageNames` <a name="resetAllowAllPackageNames" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.resetAllowAllPackageNames"></a>

```typescript
public resetAllowAllPackageNames(): void
```

##### `resetAllowedPackageNames` <a name="resetAllowedPackageNames" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.resetAllowedPackageNames"></a>

```typescript
public resetAllowedPackageNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowAllPackageNamesInput">allowAllPackageNamesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowedPackageNamesInput">allowedPackageNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowAllPackageNames">allowAllPackageNames</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowedPackageNames">allowedPackageNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings">RecaptchaEnterpriseKeyAndroidSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowAllPackageNamesInput`<sup>Optional</sup> <a name="allowAllPackageNamesInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowAllPackageNamesInput"></a>

```typescript
public readonly allowAllPackageNamesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedPackageNamesInput`<sup>Optional</sup> <a name="allowedPackageNamesInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowedPackageNamesInput"></a>

```typescript
public readonly allowedPackageNamesInput: string[];
```

- *Type:* string[]

---

##### `allowAllPackageNames`<sup>Required</sup> <a name="allowAllPackageNames" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowAllPackageNames"></a>

```typescript
public readonly allowAllPackageNames: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedPackageNames`<sup>Required</sup> <a name="allowedPackageNames" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowedPackageNames"></a>

```typescript
public readonly allowedPackageNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RecaptchaEnterpriseKeyAndroidSettings;
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyAndroidSettings">RecaptchaEnterpriseKeyAndroidSettings</a>

---


### RecaptchaEnterpriseKeyIosSettingsOutputReference <a name="RecaptchaEnterpriseKeyIosSettingsOutputReference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.Initializer"></a>

```typescript
import { recaptchaEnterpriseKey } from '@cdktf/provider-google'

new recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.resetAllowAllBundleIds">resetAllowAllBundleIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.resetAllowedBundleIds">resetAllowedBundleIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowAllBundleIds` <a name="resetAllowAllBundleIds" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.resetAllowAllBundleIds"></a>

```typescript
public resetAllowAllBundleIds(): void
```

##### `resetAllowedBundleIds` <a name="resetAllowedBundleIds" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.resetAllowedBundleIds"></a>

```typescript
public resetAllowedBundleIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowAllBundleIdsInput">allowAllBundleIdsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowedBundleIdsInput">allowedBundleIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowAllBundleIds">allowAllBundleIds</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowedBundleIds">allowedBundleIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings">RecaptchaEnterpriseKeyIosSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowAllBundleIdsInput`<sup>Optional</sup> <a name="allowAllBundleIdsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowAllBundleIdsInput"></a>

```typescript
public readonly allowAllBundleIdsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedBundleIdsInput`<sup>Optional</sup> <a name="allowedBundleIdsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowedBundleIdsInput"></a>

```typescript
public readonly allowedBundleIdsInput: string[];
```

- *Type:* string[]

---

##### `allowAllBundleIds`<sup>Required</sup> <a name="allowAllBundleIds" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowAllBundleIds"></a>

```typescript
public readonly allowAllBundleIds: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedBundleIds`<sup>Required</sup> <a name="allowedBundleIds" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowedBundleIds"></a>

```typescript
public readonly allowedBundleIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RecaptchaEnterpriseKeyIosSettings;
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyIosSettings">RecaptchaEnterpriseKeyIosSettings</a>

---


### RecaptchaEnterpriseKeyTestingOptionsOutputReference <a name="RecaptchaEnterpriseKeyTestingOptionsOutputReference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.Initializer"></a>

```typescript
import { recaptchaEnterpriseKey } from '@cdktf/provider-google'

new recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.resetTestingChallenge">resetTestingChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.resetTestingScore">resetTestingScore</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTestingChallenge` <a name="resetTestingChallenge" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.resetTestingChallenge"></a>

```typescript
public resetTestingChallenge(): void
```

##### `resetTestingScore` <a name="resetTestingScore" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.resetTestingScore"></a>

```typescript
public resetTestingScore(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingChallengeInput">testingChallengeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingScoreInput">testingScoreInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingChallenge">testingChallenge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingScore">testingScore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions">RecaptchaEnterpriseKeyTestingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `testingChallengeInput`<sup>Optional</sup> <a name="testingChallengeInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingChallengeInput"></a>

```typescript
public readonly testingChallengeInput: string;
```

- *Type:* string

---

##### `testingScoreInput`<sup>Optional</sup> <a name="testingScoreInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingScoreInput"></a>

```typescript
public readonly testingScoreInput: number;
```

- *Type:* number

---

##### `testingChallenge`<sup>Required</sup> <a name="testingChallenge" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingChallenge"></a>

```typescript
public readonly testingChallenge: string;
```

- *Type:* string

---

##### `testingScore`<sup>Required</sup> <a name="testingScore" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingScore"></a>

```typescript
public readonly testingScore: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RecaptchaEnterpriseKeyTestingOptions;
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTestingOptions">RecaptchaEnterpriseKeyTestingOptions</a>

---


### RecaptchaEnterpriseKeyTimeoutsOutputReference <a name="RecaptchaEnterpriseKeyTimeoutsOutputReference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.Initializer"></a>

```typescript
import { recaptchaEnterpriseKey } from '@cdktf/provider-google'

new recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts">RecaptchaEnterpriseKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RecaptchaEnterpriseKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyTimeouts">RecaptchaEnterpriseKeyTimeouts</a>

---


### RecaptchaEnterpriseKeyWebSettingsOutputReference <a name="RecaptchaEnterpriseKeyWebSettingsOutputReference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.Initializer"></a>

```typescript
import { recaptchaEnterpriseKey } from '@cdktf/provider-google'

new recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowAllDomains">resetAllowAllDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowAmpTraffic">resetAllowAmpTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowedDomains">resetAllowedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resetChallengeSecurityPreference">resetChallengeSecurityPreference</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowAllDomains` <a name="resetAllowAllDomains" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowAllDomains"></a>

```typescript
public resetAllowAllDomains(): void
```

##### `resetAllowAmpTraffic` <a name="resetAllowAmpTraffic" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowAmpTraffic"></a>

```typescript
public resetAllowAmpTraffic(): void
```

##### `resetAllowedDomains` <a name="resetAllowedDomains" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowedDomains"></a>

```typescript
public resetAllowedDomains(): void
```

##### `resetChallengeSecurityPreference` <a name="resetChallengeSecurityPreference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.resetChallengeSecurityPreference"></a>

```typescript
public resetChallengeSecurityPreference(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAllDomainsInput">allowAllDomainsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAmpTrafficInput">allowAmpTrafficInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowedDomainsInput">allowedDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.challengeSecurityPreferenceInput">challengeSecurityPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.integrationTypeInput">integrationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAllDomains">allowAllDomains</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAmpTraffic">allowAmpTraffic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowedDomains">allowedDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.challengeSecurityPreference">challengeSecurityPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.integrationType">integrationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings">RecaptchaEnterpriseKeyWebSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowAllDomainsInput`<sup>Optional</sup> <a name="allowAllDomainsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAllDomainsInput"></a>

```typescript
public readonly allowAllDomainsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowAmpTrafficInput`<sup>Optional</sup> <a name="allowAmpTrafficInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAmpTrafficInput"></a>

```typescript
public readonly allowAmpTrafficInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedDomainsInput`<sup>Optional</sup> <a name="allowedDomainsInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowedDomainsInput"></a>

```typescript
public readonly allowedDomainsInput: string[];
```

- *Type:* string[]

---

##### `challengeSecurityPreferenceInput`<sup>Optional</sup> <a name="challengeSecurityPreferenceInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.challengeSecurityPreferenceInput"></a>

```typescript
public readonly challengeSecurityPreferenceInput: string;
```

- *Type:* string

---

##### `integrationTypeInput`<sup>Optional</sup> <a name="integrationTypeInput" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.integrationTypeInput"></a>

```typescript
public readonly integrationTypeInput: string;
```

- *Type:* string

---

##### `allowAllDomains`<sup>Required</sup> <a name="allowAllDomains" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAllDomains"></a>

```typescript
public readonly allowAllDomains: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowAmpTraffic`<sup>Required</sup> <a name="allowAmpTraffic" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAmpTraffic"></a>

```typescript
public readonly allowAmpTraffic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedDomains`<sup>Required</sup> <a name="allowedDomains" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowedDomains"></a>

```typescript
public readonly allowedDomains: string[];
```

- *Type:* string[]

---

##### `challengeSecurityPreference`<sup>Required</sup> <a name="challengeSecurityPreference" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.challengeSecurityPreference"></a>

```typescript
public readonly challengeSecurityPreference: string;
```

- *Type:* string

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.integrationType"></a>

```typescript
public readonly integrationType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RecaptchaEnterpriseKeyWebSettings;
```

- *Type:* <a href="#@cdktf/provider-google.recaptchaEnterpriseKey.RecaptchaEnterpriseKeyWebSettings">RecaptchaEnterpriseKeyWebSettings</a>

---



