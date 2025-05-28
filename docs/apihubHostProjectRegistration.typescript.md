# `apihubHostProjectRegistration` Submodule <a name="`apihubHostProjectRegistration` Submodule" id="@cdktf/provider-google.apihubHostProjectRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApihubHostProjectRegistration <a name="ApihubHostProjectRegistration" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apihub_host_project_registration google_apihub_host_project_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.Initializer"></a>

```typescript
import { apihubHostProjectRegistration } from '@cdktf/provider-google'

new apihubHostProjectRegistration.ApihubHostProjectRegistration(scope: Construct, id: string, config: ApihubHostProjectRegistrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig">ApihubHostProjectRegistrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig">ApihubHostProjectRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.putTimeouts"></a>

```typescript
public putTimeouts(value: ApihubHostProjectRegistrationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeouts">ApihubHostProjectRegistrationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApihubHostProjectRegistration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.isConstruct"></a>

```typescript
import { apihubHostProjectRegistration } from '@cdktf/provider-google'

apihubHostProjectRegistration.ApihubHostProjectRegistration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.isTerraformElement"></a>

```typescript
import { apihubHostProjectRegistration } from '@cdktf/provider-google'

apihubHostProjectRegistration.ApihubHostProjectRegistration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.isTerraformResource"></a>

```typescript
import { apihubHostProjectRegistration } from '@cdktf/provider-google'

apihubHostProjectRegistration.ApihubHostProjectRegistration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.generateConfigForImport"></a>

```typescript
import { apihubHostProjectRegistration } from '@cdktf/provider-google'

apihubHostProjectRegistration.ApihubHostProjectRegistration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApihubHostProjectRegistration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApihubHostProjectRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApihubHostProjectRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apihub_host_project_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApihubHostProjectRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference">ApihubHostProjectRegistrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.gcpProjectInput">gcpProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.hostProjectRegistrationIdInput">hostProjectRegistrationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeouts">ApihubHostProjectRegistrationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.gcpProject">gcpProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.hostProjectRegistrationId">hostProjectRegistrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.timeouts"></a>

```typescript
public readonly timeouts: ApihubHostProjectRegistrationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference">ApihubHostProjectRegistrationTimeoutsOutputReference</a>

---

##### `gcpProjectInput`<sup>Optional</sup> <a name="gcpProjectInput" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.gcpProjectInput"></a>

```typescript
public readonly gcpProjectInput: string;
```

- *Type:* string

---

##### `hostProjectRegistrationIdInput`<sup>Optional</sup> <a name="hostProjectRegistrationIdInput" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.hostProjectRegistrationIdInput"></a>

```typescript
public readonly hostProjectRegistrationIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApihubHostProjectRegistrationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeouts">ApihubHostProjectRegistrationTimeouts</a>

---

##### `gcpProject`<sup>Required</sup> <a name="gcpProject" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.gcpProject"></a>

```typescript
public readonly gcpProject: string;
```

- *Type:* string

---

##### `hostProjectRegistrationId`<sup>Required</sup> <a name="hostProjectRegistrationId" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.hostProjectRegistrationId"></a>

```typescript
public readonly hostProjectRegistrationId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApihubHostProjectRegistrationConfig <a name="ApihubHostProjectRegistrationConfig" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.Initializer"></a>

```typescript
import { apihubHostProjectRegistration } from '@cdktf/provider-google'

const apihubHostProjectRegistrationConfig: apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.gcpProject">gcpProject</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.hostProjectRegistrationId">hostProjectRegistrationId</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.location">location</a></code> | <code>string</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apihub_host_project_registration#id ApihubHostProjectRegistration#id}. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apihub_host_project_registration#project ApihubHostProjectRegistration#project}. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeouts">ApihubHostProjectRegistrationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `gcpProject`<sup>Required</sup> <a name="gcpProject" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.gcpProject"></a>

```typescript
public readonly gcpProject: string;
```

- *Type:* string

Required.

Immutable. Google cloud project name in the format: "projects/abc" or "projects/123".
As input, project name with either project id or number are accepted.
As output, this field will contain project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apihub_host_project_registration#gcp_project ApihubHostProjectRegistration#gcp_project}

---

##### `hostProjectRegistrationId`<sup>Required</sup> <a name="hostProjectRegistrationId" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.hostProjectRegistrationId"></a>

```typescript
public readonly hostProjectRegistrationId: string;
```

- *Type:* string

Required.

The ID to use for the Host Project Registration, which will become the
final component of the host project registration's resource name. The ID
must be the same as the Google cloud project specified in the
host_project_registration.gcp_project field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apihub_host_project_registration#host_project_registration_id ApihubHostProjectRegistration#host_project_registration_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apihub_host_project_registration#location ApihubHostProjectRegistration#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apihub_host_project_registration#id ApihubHostProjectRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apihub_host_project_registration#project ApihubHostProjectRegistration#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApihubHostProjectRegistrationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeouts">ApihubHostProjectRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apihub_host_project_registration#timeouts ApihubHostProjectRegistration#timeouts}

---

### ApihubHostProjectRegistrationTimeouts <a name="ApihubHostProjectRegistrationTimeouts" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeouts.Initializer"></a>

```typescript
import { apihubHostProjectRegistration } from '@cdktf/provider-google'

const apihubHostProjectRegistrationTimeouts: apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apihub_host_project_registration#create ApihubHostProjectRegistration#create}. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apihub_host_project_registration#delete ApihubHostProjectRegistration#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apihub_host_project_registration#create ApihubHostProjectRegistration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/apihub_host_project_registration#delete ApihubHostProjectRegistration#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApihubHostProjectRegistrationTimeoutsOutputReference <a name="ApihubHostProjectRegistrationTimeoutsOutputReference" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.Initializer"></a>

```typescript
import { apihubHostProjectRegistration } from '@cdktf/provider-google'

new apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeouts">ApihubHostProjectRegistrationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApihubHostProjectRegistrationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeouts">ApihubHostProjectRegistrationTimeouts</a>

---



