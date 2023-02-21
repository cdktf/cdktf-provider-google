# `cloudfunctionsFunctionIamMember` Submodule <a name="`cloudfunctionsFunctionIamMember` Submodule" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfunctionsFunctionIamMember <a name="CloudfunctionsFunctionIamMember" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_member google_cloudfunctions_function_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.Initializer"></a>

```typescript
import { cloudfunctionsFunctionIamMember } from '@cdktf/provider-google'

new cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember(scope: Construct, id: string, config: CloudfunctionsFunctionIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConfig">CloudfunctionsFunctionIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConfig">CloudfunctionsFunctionIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.putCondition"></a>

```typescript
public putCondition(value: CloudfunctionsFunctionIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberCondition">CloudfunctionsFunctionIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.isConstruct"></a>

```typescript
import { cloudfunctionsFunctionIamMember } from '@cdktf/provider-google'

cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.isTerraformElement"></a>

```typescript
import { cloudfunctionsFunctionIamMember } from '@cdktf/provider-google'

cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.isTerraformResource"></a>

```typescript
import { cloudfunctionsFunctionIamMember } from '@cdktf/provider-google'

cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference">CloudfunctionsFunctionIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.cloudFunctionInput">cloudFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberCondition">CloudfunctionsFunctionIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.cloudFunction">cloudFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.condition"></a>

```typescript
public readonly condition: CloudfunctionsFunctionIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference">CloudfunctionsFunctionIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `cloudFunctionInput`<sup>Optional</sup> <a name="cloudFunctionInput" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.cloudFunctionInput"></a>

```typescript
public readonly cloudFunctionInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: CloudfunctionsFunctionIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberCondition">CloudfunctionsFunctionIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `cloudFunction`<sup>Required</sup> <a name="cloudFunction" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.cloudFunction"></a>

```typescript
public readonly cloudFunction: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfunctionsFunctionIamMemberCondition <a name="CloudfunctionsFunctionIamMemberCondition" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberCondition.Initializer"></a>

```typescript
import { cloudfunctionsFunctionIamMember } from '@cdktf/provider-google'

const cloudfunctionsFunctionIamMemberCondition: cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_member#expression CloudfunctionsFunctionIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_member#title CloudfunctionsFunctionIamMember#title}. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_member#description CloudfunctionsFunctionIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_member#expression CloudfunctionsFunctionIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_member#title CloudfunctionsFunctionIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_member#description CloudfunctionsFunctionIamMember#description}.

---

### CloudfunctionsFunctionIamMemberConfig <a name="CloudfunctionsFunctionIamMemberConfig" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConfig.Initializer"></a>

```typescript
import { cloudfunctionsFunctionIamMember } from '@cdktf/provider-google'

const cloudfunctionsFunctionIamMemberConfig: cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConfig.property.cloudFunction">cloudFunction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_member#cloud_function CloudfunctionsFunctionIamMember#cloud_function}. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_member#member CloudfunctionsFunctionIamMember#member}. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_member#role CloudfunctionsFunctionIamMember#role}. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberCondition">CloudfunctionsFunctionIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_member#id CloudfunctionsFunctionIamMember#id}. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_member#project CloudfunctionsFunctionIamMember#project}. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_member#region CloudfunctionsFunctionIamMember#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cloudFunction`<sup>Required</sup> <a name="cloudFunction" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConfig.property.cloudFunction"></a>

```typescript
public readonly cloudFunction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_member#cloud_function CloudfunctionsFunctionIamMember#cloud_function}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_member#member CloudfunctionsFunctionIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_member#role CloudfunctionsFunctionIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: CloudfunctionsFunctionIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberCondition">CloudfunctionsFunctionIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_member#condition CloudfunctionsFunctionIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_member#id CloudfunctionsFunctionIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_member#project CloudfunctionsFunctionIamMember#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_member#region CloudfunctionsFunctionIamMember#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfunctionsFunctionIamMemberConditionOutputReference <a name="CloudfunctionsFunctionIamMemberConditionOutputReference" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { cloudfunctionsFunctionIamMember } from '@cdktf/provider-google'

new cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberCondition">CloudfunctionsFunctionIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudfunctionsFunctionIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunctionIamMember.CloudfunctionsFunctionIamMemberCondition">CloudfunctionsFunctionIamMemberCondition</a>

---



