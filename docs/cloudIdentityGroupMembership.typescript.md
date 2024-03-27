# `cloudIdentityGroupMembership` Submodule <a name="`cloudIdentityGroupMembership` Submodule" id="@cdktf/provider-google.cloudIdentityGroupMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudIdentityGroupMembership <a name="CloudIdentityGroupMembership" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/cloud_identity_group_membership google_cloud_identity_group_membership}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer"></a>

```typescript
import { cloudIdentityGroupMembership } from '@cdktf/provider-google'

new cloudIdentityGroupMembership.CloudIdentityGroupMembership(scope: Construct, id: string, config: CloudIdentityGroupMembershipConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig">CloudIdentityGroupMembershipConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig">CloudIdentityGroupMembershipConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.putPreferredMemberKey">putPreferredMemberKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.putRoles">putRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.resetPreferredMemberKey">resetPreferredMemberKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPreferredMemberKey` <a name="putPreferredMemberKey" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.putPreferredMemberKey"></a>

```typescript
public putPreferredMemberKey(value: CloudIdentityGroupMembershipPreferredMemberKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.putPreferredMemberKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey">CloudIdentityGroupMembershipPreferredMemberKey</a>

---

##### `putRoles` <a name="putRoles" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.putRoles"></a>

```typescript
public putRoles(value: IResolvable | CloudIdentityGroupMembershipRoles[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.putRoles.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles">CloudIdentityGroupMembershipRoles</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudIdentityGroupMembershipTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts">CloudIdentityGroupMembershipTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPreferredMemberKey` <a name="resetPreferredMemberKey" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.resetPreferredMemberKey"></a>

```typescript
public resetPreferredMemberKey(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudIdentityGroupMembership resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.isConstruct"></a>

```typescript
import { cloudIdentityGroupMembership } from '@cdktf/provider-google'

cloudIdentityGroupMembership.CloudIdentityGroupMembership.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.isTerraformElement"></a>

```typescript
import { cloudIdentityGroupMembership } from '@cdktf/provider-google'

cloudIdentityGroupMembership.CloudIdentityGroupMembership.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.isTerraformResource"></a>

```typescript
import { cloudIdentityGroupMembership } from '@cdktf/provider-google'

cloudIdentityGroupMembership.CloudIdentityGroupMembership.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.generateConfigForImport"></a>

```typescript
import { cloudIdentityGroupMembership } from '@cdktf/provider-google'

cloudIdentityGroupMembership.CloudIdentityGroupMembership.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudIdentityGroupMembership resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudIdentityGroupMembership to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudIdentityGroupMembership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/cloud_identity_group_membership#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudIdentityGroupMembership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.preferredMemberKey">preferredMemberKey</a></code> | <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference">CloudIdentityGroupMembershipPreferredMemberKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList">CloudIdentityGroupMembershipRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference">CloudIdentityGroupMembershipTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.groupInput">groupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.preferredMemberKeyInput">preferredMemberKeyInput</a></code> | <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey">CloudIdentityGroupMembershipPreferredMemberKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.rolesInput">rolesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles">CloudIdentityGroupMembershipRoles</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts">CloudIdentityGroupMembershipTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `preferredMemberKey`<sup>Required</sup> <a name="preferredMemberKey" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.preferredMemberKey"></a>

```typescript
public readonly preferredMemberKey: CloudIdentityGroupMembershipPreferredMemberKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference">CloudIdentityGroupMembershipPreferredMemberKeyOutputReference</a>

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.roles"></a>

```typescript
public readonly roles: CloudIdentityGroupMembershipRolesList;
```

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList">CloudIdentityGroupMembershipRolesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.timeouts"></a>

```typescript
public readonly timeouts: CloudIdentityGroupMembershipTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference">CloudIdentityGroupMembershipTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.groupInput"></a>

```typescript
public readonly groupInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `preferredMemberKeyInput`<sup>Optional</sup> <a name="preferredMemberKeyInput" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.preferredMemberKeyInput"></a>

```typescript
public readonly preferredMemberKeyInput: CloudIdentityGroupMembershipPreferredMemberKey;
```

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey">CloudIdentityGroupMembershipPreferredMemberKey</a>

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.rolesInput"></a>

```typescript
public readonly rolesInput: IResolvable | CloudIdentityGroupMembershipRoles[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles">CloudIdentityGroupMembershipRoles</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CloudIdentityGroupMembershipTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts">CloudIdentityGroupMembershipTimeouts</a>

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudIdentityGroupMembershipConfig <a name="CloudIdentityGroupMembershipConfig" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.Initializer"></a>

```typescript
import { cloudIdentityGroupMembership } from '@cdktf/provider-google'

const cloudIdentityGroupMembershipConfig: cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.group">group</a></code> | <code>string</code> | The name of the Group to create this membership in. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.roles">roles</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles">CloudIdentityGroupMembershipRoles</a>[]</code> | roles block. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/cloud_identity_group_membership#id CloudIdentityGroupMembership#id}. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.preferredMemberKey">preferredMemberKey</a></code> | <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey">CloudIdentityGroupMembershipPreferredMemberKey</a></code> | preferred_member_key block. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts">CloudIdentityGroupMembershipTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

The name of the Group to create this membership in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/cloud_identity_group_membership#group CloudIdentityGroupMembership#group}

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.roles"></a>

```typescript
public readonly roles: IResolvable | CloudIdentityGroupMembershipRoles[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles">CloudIdentityGroupMembershipRoles</a>[]

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/cloud_identity_group_membership#roles CloudIdentityGroupMembership#roles}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/cloud_identity_group_membership#id CloudIdentityGroupMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `preferredMemberKey`<sup>Optional</sup> <a name="preferredMemberKey" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.preferredMemberKey"></a>

```typescript
public readonly preferredMemberKey: CloudIdentityGroupMembershipPreferredMemberKey;
```

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey">CloudIdentityGroupMembershipPreferredMemberKey</a>

preferred_member_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/cloud_identity_group_membership#preferred_member_key CloudIdentityGroupMembership#preferred_member_key}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudIdentityGroupMembershipTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts">CloudIdentityGroupMembershipTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/cloud_identity_group_membership#timeouts CloudIdentityGroupMembership#timeouts}

---

### CloudIdentityGroupMembershipPreferredMemberKey <a name="CloudIdentityGroupMembershipPreferredMemberKey" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey.Initializer"></a>

```typescript
import { cloudIdentityGroupMembership } from '@cdktf/provider-google'

const cloudIdentityGroupMembershipPreferredMemberKey: cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey.property.id">id</a></code> | <code>string</code> | The ID of the entity. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey.property.namespace">namespace</a></code> | <code>string</code> | The namespace in which the entity exists. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID of the entity.

For Google-managed entities, the id must be the email address of an existing
group or user.

For external-identity-mapped entities, the id must be a string conforming
to the Identity Source's requirements.

Must be unique within a namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/cloud_identity_group_membership#id CloudIdentityGroupMembership#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace in which the entity exists.

If not specified, the EntityKey represents a Google-managed entity
such as a Google user or a Google Group.

If specified, the EntityKey represents an external-identity-mapped group.
The namespace must correspond to an identity source created in Admin Console
and must be in the form of 'identitysources/{identity_source_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/cloud_identity_group_membership#namespace CloudIdentityGroupMembership#namespace}

---

### CloudIdentityGroupMembershipRoles <a name="CloudIdentityGroupMembershipRoles" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles.Initializer"></a>

```typescript
import { cloudIdentityGroupMembership } from '@cdktf/provider-google'

const cloudIdentityGroupMembershipRoles: cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles.property.name">name</a></code> | <code>string</code> | The name of the MembershipRole. Must be one of OWNER, MANAGER, MEMBER. Possible values: ["OWNER", "MANAGER", "MEMBER"]. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles.property.expiryDetail">expiryDetail</a></code> | <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetail">CloudIdentityGroupMembershipRolesExpiryDetail</a></code> | expiry_detail block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the MembershipRole. Must be one of OWNER, MANAGER, MEMBER. Possible values: ["OWNER", "MANAGER", "MEMBER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/cloud_identity_group_membership#name CloudIdentityGroupMembership#name}

---

##### `expiryDetail`<sup>Optional</sup> <a name="expiryDetail" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles.property.expiryDetail"></a>

```typescript
public readonly expiryDetail: CloudIdentityGroupMembershipRolesExpiryDetail;
```

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetail">CloudIdentityGroupMembershipRolesExpiryDetail</a>

expiry_detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/cloud_identity_group_membership#expiry_detail CloudIdentityGroupMembership#expiry_detail}

---

### CloudIdentityGroupMembershipRolesExpiryDetail <a name="CloudIdentityGroupMembershipRolesExpiryDetail" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetail.Initializer"></a>

```typescript
import { cloudIdentityGroupMembership } from '@cdktf/provider-google'

const cloudIdentityGroupMembershipRolesExpiryDetail: cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetail = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetail.property.expireTime">expireTime</a></code> | <code>string</code> | The time at which the MembershipRole will expire. |

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetail.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

The time at which the MembershipRole will expire.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
resolution and up to nine fractional digits.

Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/cloud_identity_group_membership#expire_time CloudIdentityGroupMembership#expire_time}

---

### CloudIdentityGroupMembershipTimeouts <a name="CloudIdentityGroupMembershipTimeouts" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts.Initializer"></a>

```typescript
import { cloudIdentityGroupMembership } from '@cdktf/provider-google'

const cloudIdentityGroupMembershipTimeouts: cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/cloud_identity_group_membership#create CloudIdentityGroupMembership#create}. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/cloud_identity_group_membership#delete CloudIdentityGroupMembership#delete}. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/cloud_identity_group_membership#update CloudIdentityGroupMembership#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/cloud_identity_group_membership#create CloudIdentityGroupMembership#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/cloud_identity_group_membership#delete CloudIdentityGroupMembership#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/cloud_identity_group_membership#update CloudIdentityGroupMembership#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudIdentityGroupMembershipPreferredMemberKeyOutputReference <a name="CloudIdentityGroupMembershipPreferredMemberKeyOutputReference" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.Initializer"></a>

```typescript
import { cloudIdentityGroupMembership } from '@cdktf/provider-google'

new cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey">CloudIdentityGroupMembershipPreferredMemberKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudIdentityGroupMembershipPreferredMemberKey;
```

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey">CloudIdentityGroupMembershipPreferredMemberKey</a>

---


### CloudIdentityGroupMembershipRolesExpiryDetailOutputReference <a name="CloudIdentityGroupMembershipRolesExpiryDetailOutputReference" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.Initializer"></a>

```typescript
import { cloudIdentityGroupMembership } from '@cdktf/provider-google'

new cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.expireTimeInput">expireTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetail">CloudIdentityGroupMembershipRolesExpiryDetail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expireTimeInput`<sup>Optional</sup> <a name="expireTimeInput" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.expireTimeInput"></a>

```typescript
public readonly expireTimeInput: string;
```

- *Type:* string

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudIdentityGroupMembershipRolesExpiryDetail;
```

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetail">CloudIdentityGroupMembershipRolesExpiryDetail</a>

---


### CloudIdentityGroupMembershipRolesList <a name="CloudIdentityGroupMembershipRolesList" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.Initializer"></a>

```typescript
import { cloudIdentityGroupMembership } from '@cdktf/provider-google'

new cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.get"></a>

```typescript
public get(index: number): CloudIdentityGroupMembershipRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles">CloudIdentityGroupMembershipRoles</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudIdentityGroupMembershipRoles[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles">CloudIdentityGroupMembershipRoles</a>[]

---


### CloudIdentityGroupMembershipRolesOutputReference <a name="CloudIdentityGroupMembershipRolesOutputReference" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.Initializer"></a>

```typescript
import { cloudIdentityGroupMembership } from '@cdktf/provider-google'

new cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.putExpiryDetail">putExpiryDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.resetExpiryDetail">resetExpiryDetail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpiryDetail` <a name="putExpiryDetail" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.putExpiryDetail"></a>

```typescript
public putExpiryDetail(value: CloudIdentityGroupMembershipRolesExpiryDetail): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.putExpiryDetail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetail">CloudIdentityGroupMembershipRolesExpiryDetail</a>

---

##### `resetExpiryDetail` <a name="resetExpiryDetail" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.resetExpiryDetail"></a>

```typescript
public resetExpiryDetail(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.expiryDetail">expiryDetail</a></code> | <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference">CloudIdentityGroupMembershipRolesExpiryDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.expiryDetailInput">expiryDetailInput</a></code> | <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetail">CloudIdentityGroupMembershipRolesExpiryDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles">CloudIdentityGroupMembershipRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expiryDetail`<sup>Required</sup> <a name="expiryDetail" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.expiryDetail"></a>

```typescript
public readonly expiryDetail: CloudIdentityGroupMembershipRolesExpiryDetailOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetailOutputReference">CloudIdentityGroupMembershipRolesExpiryDetailOutputReference</a>

---

##### `expiryDetailInput`<sup>Optional</sup> <a name="expiryDetailInput" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.expiryDetailInput"></a>

```typescript
public readonly expiryDetailInput: CloudIdentityGroupMembershipRolesExpiryDetail;
```

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesExpiryDetail">CloudIdentityGroupMembershipRolesExpiryDetail</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudIdentityGroupMembershipRoles;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles">CloudIdentityGroupMembershipRoles</a>

---


### CloudIdentityGroupMembershipTimeoutsOutputReference <a name="CloudIdentityGroupMembershipTimeoutsOutputReference" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudIdentityGroupMembership } from '@cdktf/provider-google'

new cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts">CloudIdentityGroupMembershipTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudIdentityGroupMembershipTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts">CloudIdentityGroupMembershipTimeouts</a>

---



