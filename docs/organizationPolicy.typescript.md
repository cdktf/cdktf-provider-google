# `organizationPolicy` Submodule <a name="`organizationPolicy` Submodule" id="@cdktf/provider-google.organizationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationPolicy <a name="OrganizationPolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/organization_policy google_organization_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer"></a>

```typescript
import { organizationPolicy } from '@cdktf/provider-google'

new organizationPolicy.OrganizationPolicy(scope: Construct, id: string, config: OrganizationPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig">OrganizationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig">OrganizationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putBooleanPolicy">putBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putListPolicy">putListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putRestorePolicy">putRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetBooleanPolicy">resetBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetListPolicy">resetListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetRestorePolicy">resetRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBooleanPolicy` <a name="putBooleanPolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putBooleanPolicy"></a>

```typescript
public putBooleanPolicy(value: OrganizationPolicyBooleanPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putBooleanPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy">OrganizationPolicyBooleanPolicy</a>

---

##### `putListPolicy` <a name="putListPolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putListPolicy"></a>

```typescript
public putListPolicy(value: OrganizationPolicyListPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putListPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy">OrganizationPolicyListPolicy</a>

---

##### `putRestorePolicy` <a name="putRestorePolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putRestorePolicy"></a>

```typescript
public putRestorePolicy(value: OrganizationPolicyRestorePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putRestorePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy">OrganizationPolicyRestorePolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: OrganizationPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts">OrganizationPolicyTimeouts</a>

---

##### `resetBooleanPolicy` <a name="resetBooleanPolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetBooleanPolicy"></a>

```typescript
public resetBooleanPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetListPolicy` <a name="resetListPolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetListPolicy"></a>

```typescript
public resetListPolicy(): void
```

##### `resetRestorePolicy` <a name="resetRestorePolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetRestorePolicy"></a>

```typescript
public resetRestorePolicy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetVersion"></a>

```typescript
public resetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OrganizationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.isConstruct"></a>

```typescript
import { organizationPolicy } from '@cdktf/provider-google'

organizationPolicy.OrganizationPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.isTerraformElement"></a>

```typescript
import { organizationPolicy } from '@cdktf/provider-google'

organizationPolicy.OrganizationPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.isTerraformResource"></a>

```typescript
import { organizationPolicy } from '@cdktf/provider-google'

organizationPolicy.OrganizationPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.generateConfigForImport"></a>

```typescript
import { organizationPolicy } from '@cdktf/provider-google'

organizationPolicy.OrganizationPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OrganizationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OrganizationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OrganizationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/organization_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OrganizationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.booleanPolicy">booleanPolicy</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference">OrganizationPolicyBooleanPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.listPolicy">listPolicy</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference">OrganizationPolicyListPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.restorePolicy">restorePolicy</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference">OrganizationPolicyRestorePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference">OrganizationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.booleanPolicyInput">booleanPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy">OrganizationPolicyBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.constraintInput">constraintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.listPolicyInput">listPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy">OrganizationPolicyListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.restorePolicyInput">restorePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy">OrganizationPolicyRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts">OrganizationPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.versionInput">versionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.constraint">constraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.version">version</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `booleanPolicy`<sup>Required</sup> <a name="booleanPolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.booleanPolicy"></a>

```typescript
public readonly booleanPolicy: OrganizationPolicyBooleanPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference">OrganizationPolicyBooleanPolicyOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `listPolicy`<sup>Required</sup> <a name="listPolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.listPolicy"></a>

```typescript
public readonly listPolicy: OrganizationPolicyListPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference">OrganizationPolicyListPolicyOutputReference</a>

---

##### `restorePolicy`<sup>Required</sup> <a name="restorePolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.restorePolicy"></a>

```typescript
public readonly restorePolicy: OrganizationPolicyRestorePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference">OrganizationPolicyRestorePolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: OrganizationPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference">OrganizationPolicyTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `booleanPolicyInput`<sup>Optional</sup> <a name="booleanPolicyInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.booleanPolicyInput"></a>

```typescript
public readonly booleanPolicyInput: OrganizationPolicyBooleanPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy">OrganizationPolicyBooleanPolicy</a>

---

##### `constraintInput`<sup>Optional</sup> <a name="constraintInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.constraintInput"></a>

```typescript
public readonly constraintInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `listPolicyInput`<sup>Optional</sup> <a name="listPolicyInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.listPolicyInput"></a>

```typescript
public readonly listPolicyInput: OrganizationPolicyListPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy">OrganizationPolicyListPolicy</a>

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `restorePolicyInput`<sup>Optional</sup> <a name="restorePolicyInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.restorePolicyInput"></a>

```typescript
public readonly restorePolicyInput: OrganizationPolicyRestorePolicy;
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy">OrganizationPolicyRestorePolicy</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OrganizationPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts">OrganizationPolicyTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.versionInput"></a>

```typescript
public readonly versionInput: number;
```

- *Type:* number

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.constraint"></a>

```typescript
public readonly constraint: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationPolicyBooleanPolicy <a name="OrganizationPolicyBooleanPolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy.Initializer"></a>

```typescript
import { organizationPolicy } from '@cdktf/provider-google'

const organizationPolicyBooleanPolicy: organizationPolicy.OrganizationPolicyBooleanPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy.property.enforced">enforced</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, then the Policy is enforced. If false, then any configuration is acceptable. |

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy.property.enforced"></a>

```typescript
public readonly enforced: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, then the Policy is enforced. If false, then any configuration is acceptable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/organization_policy#enforced OrganizationPolicy#enforced}

---

### OrganizationPolicyConfig <a name="OrganizationPolicyConfig" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.Initializer"></a>

```typescript
import { organizationPolicy } from '@cdktf/provider-google'

const organizationPolicyConfig: organizationPolicy.OrganizationPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.constraint">constraint</a></code> | <code>string</code> | The name of the Constraint the Policy is configuring, for example, serviceuser.services. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.orgId">orgId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/organization_policy#org_id OrganizationPolicy#org_id}. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.booleanPolicy">booleanPolicy</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy">OrganizationPolicyBooleanPolicy</a></code> | boolean_policy block. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/organization_policy#id OrganizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.listPolicy">listPolicy</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy">OrganizationPolicyListPolicy</a></code> | list_policy block. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.restorePolicy">restorePolicy</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy">OrganizationPolicyRestorePolicy</a></code> | restore_policy block. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts">OrganizationPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.version">version</a></code> | <code>number</code> | Version of the Policy. Default version is 0. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.constraint"></a>

```typescript
public readonly constraint: string;
```

- *Type:* string

The name of the Constraint the Policy is configuring, for example, serviceuser.services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/organization_policy#constraint OrganizationPolicy#constraint}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/organization_policy#org_id OrganizationPolicy#org_id}.

---

##### `booleanPolicy`<sup>Optional</sup> <a name="booleanPolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.booleanPolicy"></a>

```typescript
public readonly booleanPolicy: OrganizationPolicyBooleanPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy">OrganizationPolicyBooleanPolicy</a>

boolean_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/organization_policy#boolean_policy OrganizationPolicy#boolean_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/organization_policy#id OrganizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listPolicy`<sup>Optional</sup> <a name="listPolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.listPolicy"></a>

```typescript
public readonly listPolicy: OrganizationPolicyListPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy">OrganizationPolicyListPolicy</a>

list_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/organization_policy#list_policy OrganizationPolicy#list_policy}

---

##### `restorePolicy`<sup>Optional</sup> <a name="restorePolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.restorePolicy"></a>

```typescript
public readonly restorePolicy: OrganizationPolicyRestorePolicy;
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy">OrganizationPolicyRestorePolicy</a>

restore_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/organization_policy#restore_policy OrganizationPolicy#restore_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OrganizationPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts">OrganizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/organization_policy#timeouts OrganizationPolicy#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

Version of the Policy. Default version is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/organization_policy#version OrganizationPolicy#version}

---

### OrganizationPolicyListPolicy <a name="OrganizationPolicyListPolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy.Initializer"></a>

```typescript
import { organizationPolicy } from '@cdktf/provider-google'

const organizationPolicyListPolicy: organizationPolicy.OrganizationPolicyListPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow">OrganizationPolicyListPolicyAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy.property.deny">deny</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny">OrganizationPolicyListPolicyDeny</a></code> | deny block. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy.property.inheritFromParent">inheritFromParent</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy.property.suggestedValue">suggestedValue</a></code> | <code>string</code> | The Google Cloud Console will try to default to a configuration that matches the value specified in this field. |

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy.property.allow"></a>

```typescript
public readonly allow: OrganizationPolicyListPolicyAllow;
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow">OrganizationPolicyListPolicyAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/organization_policy#allow OrganizationPolicy#allow}

---

##### `deny`<sup>Optional</sup> <a name="deny" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy.property.deny"></a>

```typescript
public readonly deny: OrganizationPolicyListPolicyDeny;
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny">OrganizationPolicyListPolicyDeny</a>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/organization_policy#deny OrganizationPolicy#deny}

---

##### `inheritFromParent`<sup>Optional</sup> <a name="inheritFromParent" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy.property.inheritFromParent"></a>

```typescript
public readonly inheritFromParent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/organization_policy#inherit_from_parent OrganizationPolicy#inherit_from_parent}

---

##### `suggestedValue`<sup>Optional</sup> <a name="suggestedValue" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy.property.suggestedValue"></a>

```typescript
public readonly suggestedValue: string;
```

- *Type:* string

The Google Cloud Console will try to default to a configuration that matches the value specified in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/organization_policy#suggested_value OrganizationPolicy#suggested_value}

---

### OrganizationPolicyListPolicyAllow <a name="OrganizationPolicyListPolicyAllow" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow.Initializer"></a>

```typescript
import { organizationPolicy } from '@cdktf/provider-google'

const organizationPolicyListPolicyAllow: organizationPolicy.OrganizationPolicyListPolicyAllow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow.property.all">all</a></code> | <code>boolean \| cdktf.IResolvable</code> | The policy allows or denies all values. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow.property.values">values</a></code> | <code>string[]</code> | The policy can define specific values that are allowed or denied. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow.property.all"></a>

```typescript
public readonly all: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/organization_policy#all OrganizationPolicy#all}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/organization_policy#values OrganizationPolicy#values}

---

### OrganizationPolicyListPolicyDeny <a name="OrganizationPolicyListPolicyDeny" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny.Initializer"></a>

```typescript
import { organizationPolicy } from '@cdktf/provider-google'

const organizationPolicyListPolicyDeny: organizationPolicy.OrganizationPolicyListPolicyDeny = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny.property.all">all</a></code> | <code>boolean \| cdktf.IResolvable</code> | The policy allows or denies all values. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny.property.values">values</a></code> | <code>string[]</code> | The policy can define specific values that are allowed or denied. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny.property.all"></a>

```typescript
public readonly all: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/organization_policy#all OrganizationPolicy#all}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/organization_policy#values OrganizationPolicy#values}

---

### OrganizationPolicyRestorePolicy <a name="OrganizationPolicyRestorePolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy.Initializer"></a>

```typescript
import { organizationPolicy } from '@cdktf/provider-google'

const organizationPolicyRestorePolicy: organizationPolicy.OrganizationPolicyRestorePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy.property.default">default</a></code> | <code>boolean \| cdktf.IResolvable</code> | May only be set to true. If set, then the default Policy is restored. |

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy.property.default"></a>

```typescript
public readonly default: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

May only be set to true. If set, then the default Policy is restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/organization_policy#default OrganizationPolicy#default}

---

### OrganizationPolicyTimeouts <a name="OrganizationPolicyTimeouts" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts.Initializer"></a>

```typescript
import { organizationPolicy } from '@cdktf/provider-google'

const organizationPolicyTimeouts: organizationPolicy.OrganizationPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/organization_policy#create OrganizationPolicy#create}. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/organization_policy#delete OrganizationPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/organization_policy#read OrganizationPolicy#read}. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/organization_policy#update OrganizationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/organization_policy#create OrganizationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/organization_policy#delete OrganizationPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/organization_policy#read OrganizationPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/organization_policy#update OrganizationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OrganizationPolicyBooleanPolicyOutputReference <a name="OrganizationPolicyBooleanPolicyOutputReference" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.Initializer"></a>

```typescript
import { organizationPolicy } from '@cdktf/provider-google'

new organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput">enforcedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.property.enforced">enforced</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy">OrganizationPolicyBooleanPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enforcedInput`<sup>Optional</sup> <a name="enforcedInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput"></a>

```typescript
public readonly enforcedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.property.enforced"></a>

```typescript
public readonly enforced: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OrganizationPolicyBooleanPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy">OrganizationPolicyBooleanPolicy</a>

---


### OrganizationPolicyListPolicyAllowOutputReference <a name="OrganizationPolicyListPolicyAllowOutputReference" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.Initializer"></a>

```typescript
import { organizationPolicy } from '@cdktf/provider-google'

new organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.resetAll">resetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAll` <a name="resetAll" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.resetAll"></a>

```typescript
public resetAll(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.allInput">allInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.all">all</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow">OrganizationPolicyListPolicyAllow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allInput`<sup>Optional</sup> <a name="allInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.allInput"></a>

```typescript
public readonly allInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.all"></a>

```typescript
public readonly all: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OrganizationPolicyListPolicyAllow;
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow">OrganizationPolicyListPolicyAllow</a>

---


### OrganizationPolicyListPolicyDenyOutputReference <a name="OrganizationPolicyListPolicyDenyOutputReference" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.Initializer"></a>

```typescript
import { organizationPolicy } from '@cdktf/provider-google'

new organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.resetAll">resetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAll` <a name="resetAll" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.resetAll"></a>

```typescript
public resetAll(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.allInput">allInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.all">all</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny">OrganizationPolicyListPolicyDeny</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allInput`<sup>Optional</sup> <a name="allInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.allInput"></a>

```typescript
public readonly allInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.all"></a>

```typescript
public readonly all: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OrganizationPolicyListPolicyDeny;
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny">OrganizationPolicyListPolicyDeny</a>

---


### OrganizationPolicyListPolicyOutputReference <a name="OrganizationPolicyListPolicyOutputReference" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.Initializer"></a>

```typescript
import { organizationPolicy } from '@cdktf/provider-google'

new organizationPolicy.OrganizationPolicyListPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.putAllow">putAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.putDeny">putDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.resetAllow">resetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.resetDeny">resetDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.resetInheritFromParent">resetInheritFromParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.resetSuggestedValue">resetSuggestedValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllow` <a name="putAllow" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.putAllow"></a>

```typescript
public putAllow(value: OrganizationPolicyListPolicyAllow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.putAllow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow">OrganizationPolicyListPolicyAllow</a>

---

##### `putDeny` <a name="putDeny" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.putDeny"></a>

```typescript
public putDeny(value: OrganizationPolicyListPolicyDeny): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.putDeny.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny">OrganizationPolicyListPolicyDeny</a>

---

##### `resetAllow` <a name="resetAllow" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.resetAllow"></a>

```typescript
public resetAllow(): void
```

##### `resetDeny` <a name="resetDeny" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.resetDeny"></a>

```typescript
public resetDeny(): void
```

##### `resetInheritFromParent` <a name="resetInheritFromParent" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.resetInheritFromParent"></a>

```typescript
public resetInheritFromParent(): void
```

##### `resetSuggestedValue` <a name="resetSuggestedValue" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.resetSuggestedValue"></a>

```typescript
public resetSuggestedValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference">OrganizationPolicyListPolicyAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.deny">deny</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference">OrganizationPolicyListPolicyDenyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.allowInput">allowInput</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow">OrganizationPolicyListPolicyAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.denyInput">denyInput</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny">OrganizationPolicyListPolicyDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput">inheritFromParentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.suggestedValueInput">suggestedValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.inheritFromParent">inheritFromParent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.suggestedValue">suggestedValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy">OrganizationPolicyListPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.allow"></a>

```typescript
public readonly allow: OrganizationPolicyListPolicyAllowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference">OrganizationPolicyListPolicyAllowOutputReference</a>

---

##### `deny`<sup>Required</sup> <a name="deny" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.deny"></a>

```typescript
public readonly deny: OrganizationPolicyListPolicyDenyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference">OrganizationPolicyListPolicyDenyOutputReference</a>

---

##### `allowInput`<sup>Optional</sup> <a name="allowInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.allowInput"></a>

```typescript
public readonly allowInput: OrganizationPolicyListPolicyAllow;
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow">OrganizationPolicyListPolicyAllow</a>

---

##### `denyInput`<sup>Optional</sup> <a name="denyInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.denyInput"></a>

```typescript
public readonly denyInput: OrganizationPolicyListPolicyDeny;
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny">OrganizationPolicyListPolicyDeny</a>

---

##### `inheritFromParentInput`<sup>Optional</sup> <a name="inheritFromParentInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput"></a>

```typescript
public readonly inheritFromParentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `suggestedValueInput`<sup>Optional</sup> <a name="suggestedValueInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.suggestedValueInput"></a>

```typescript
public readonly suggestedValueInput: string;
```

- *Type:* string

---

##### `inheritFromParent`<sup>Required</sup> <a name="inheritFromParent" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.inheritFromParent"></a>

```typescript
public readonly inheritFromParent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `suggestedValue`<sup>Required</sup> <a name="suggestedValue" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.suggestedValue"></a>

```typescript
public readonly suggestedValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OrganizationPolicyListPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy">OrganizationPolicyListPolicy</a>

---


### OrganizationPolicyRestorePolicyOutputReference <a name="OrganizationPolicyRestorePolicyOutputReference" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.Initializer"></a>

```typescript
import { organizationPolicy } from '@cdktf/provider-google'

new organizationPolicy.OrganizationPolicyRestorePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.property.defaultInput">defaultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.property.default">default</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy">OrganizationPolicyRestorePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.property.default"></a>

```typescript
public readonly default: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OrganizationPolicyRestorePolicy;
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy">OrganizationPolicyRestorePolicy</a>

---


### OrganizationPolicyTimeoutsOutputReference <a name="OrganizationPolicyTimeoutsOutputReference" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { organizationPolicy } from '@cdktf/provider-google'

new organizationPolicy.OrganizationPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts">OrganizationPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrganizationPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts">OrganizationPolicyTimeouts</a>

---



